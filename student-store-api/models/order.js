const { BadRequestError } = require("../utils/errors")
const db = require("../db")

class Order {
  static async listOrdersForUser(user) {
    const query = `
      SELECT orders.id AS "orderId",
             orders.customer_id AS "customerId",
             od.quantity AS "quantity",
             products.name AS "name",
             products.price AS "price"
      FROM orders
        JOIN order_details AS od ON od.order_id = orders.id
        JOIN products ON products.id = od.product_id
      WHERE orders.customer_id = (SELECT id FROM users WHERE email = $1)
    `
    const result = await db.query(query, [user.email])

    return result.rows
  }

  static async createOrder({ order, user }) {
    if (!order || !Object.keys(order).length) {
      throw new BadRequestError("No order info provided")
    }
    if (!user) {
      throw new BadRequestError("No user provided")
    }

    // create a new order
    const orderResult = await db.query(
      `
      INSERT INTO orders (customer_id) 
      VALUES ((SELECT id FROM users WHERE email = $1))
      RETURNING id
    `,
      [user.email]
    )
    // get orderId
    const orderId = orderResult.rows[0].id

    // add the products to the order details table
    Object.keys(order).forEach(async (productId) => {
      const quantity = order[productId]

      await db.query(
        `
        INSERT INTO order_details (order_id, product_id, quantity)
        VALUES ($1, $2, $3)
      `,
        [orderId, productId, quantity]
      )
    })

    return await Order.fetchOrderById(orderId)
  }

  static async fetchOrderById(orderId) {
    const result = await db.query(
      `
      SELECT orders.id AS "orderId",
             orders.customer_id AS "customerId",
             od.quantity AS "quantity",
             products.name AS "name",
             products.price AS "price"
      FROM orders
        JOIN order_details AS od ON od.order_id = orders.id
        JOIN products ON products.id = od.product_id
      WHERE orders.id = $1
    `,
      [orderId]
    )

    return result.rows
  }
}

module.exports = Order
