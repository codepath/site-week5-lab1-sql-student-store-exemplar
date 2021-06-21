import SubNavbar from "../SubNavbar/SubNavbar"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { formatPrice } from "../../utils/format"
import {
  calculateOrderSubtotal,
  calculateItemSubtotal,
  calculateTaxesAndFees,
  calculateTotal,
} from "../../utils/calculations"
import "./Orders.css"

const groupOrderDetailsByOrderId = (orderDetails) => {
  // get an array of unique order ids
  const orderIds = [...new Set(orderDetails.map((d) => d.orderId))]

  return orderIds.reduce((acc, orderId) => {
    acc[orderId] = orderDetails.filter((d) => d.orderId === orderId)
    return acc
  }, {})
}

export default function Orders({
  user,
  orders,
  activeCategory,
  setActiveCategory,
  handleOnSearchInputChange,
  searchInputValue,
}) {
  const ordersMapping = groupOrderDetailsByOrderId(orders)

  const hasOrders = Boolean(Object.keys(ordersMapping)?.length)

  return (
    <div className="Orders">
      <Navbar />
      <SubNavbar
        user={user}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        handleOnSearchInputChange={handleOnSearchInputChange}
        searchInputValue={searchInputValue}
      />
      <div className="banner">
        <div className="content">
          <h2>Orders</h2>
        </div>
      </div>

      <div className="content">
        <div className="order-list">
          <div className="order-list-header">
            <span>Order</span>
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>

          {Object.keys(ordersMapping)?.map((orderId) => (
            <OrderItem key={orderId} orderId={orderId} orderItems={ordersMapping[orderId]} />
          ))}

          {!hasOrders ? (
            <div className="order-item">
              <p>You haven't placed any orders yet.</p>
            </div>
          ) : null}
        </div>
      </div>

      <Footer />
    </div>
  )
}

const OrderItem = ({ orderItems, orderId }) => {
  const subTotal = calculateOrderSubtotal(orderItems)

  return (
    <div className="order-item" key={orderId}>
      <h3>Order #{orderId}</h3>
      <div className="order-details">
        {orderItems.map((item) => (
          <div key={`${orderId}-${item.name}`} className="line-item">
            <span className="flex-2">{item.name}</span>
            <span className="center">{item.quantity}</span>
            <span className="center">{formatPrice(item.price)}</span>
            <span className="center">{formatPrice(calculateItemSubtotal(item.price, item.quantity))}</span>
          </div>
        ))}
        <div className="receipt">
          <div className="receipt-subtotal">
            <span className="label">Subtotal</span>
            <span />
            <span />
            <span className="center">{formatPrice(subTotal)}</span>
          </div>
          <div className="receipt-taxes">
            <span className="label">Taxes and Fees</span>
            <span />
            <span />
            <span className="center">{formatPrice(calculateTaxesAndFees(subTotal))}</span>
          </div>
          <div className="receipt-total">
            <span className="label">Total</span>
            <span />
            <span />
            <span className="center">{formatPrice(calculateTotal(subTotal))}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
