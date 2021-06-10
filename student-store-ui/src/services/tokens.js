export default class Tokens {
  static setToken(token, name = "student_store_token") {
    localStorage.setItem(name, token)
  }

  static getToken(name = "student_store_token") {
    const token = localStorage.getItem(name)

    try {
      const tokenJson = JSON.parse(token)
      return tokenJson
    } catch (err) {
      return token
    }
  }
}
