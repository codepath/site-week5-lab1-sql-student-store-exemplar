import axios from "axios"
import Tokens from "./tokens"

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl || "http://localhost:3001"
    this.token = null
  }

  setToken(token) {
    this.token = token
  }

  async request({ endpoint, method, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`
    console.debug("API Call:", endpoint, data, method)
    const params = method === "GET" ? data : {}
    const headers = {
      "Content-Type": "application/json",
    }

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`
    }

    try {
      const res = await axios({ url, method, data, params, headers })
      return { data: res.data, error: null, message: null }
    } catch (error) {
      console.error("APIclient.makeRequest.error", error.response)
      if (error?.response?.status === 404) return { data: null, error: "Not found" }
      const message = error?.response?.data?.error?.message
      return { data: null, error: error?.response, message }
    }
  }

  async listProducts() {
    return await this.request({ endpoint: `store`, method: `GET` })
  }

  async listOrders() {
    return await this.request({ endpoint: `orders`, method: `GET` })
  }

  async checkout(order) {
    return await this.request({ endpoint: `orders`, method: `POST`, data: { order } })
  }

  async signupUser(credentials) {
    return await this.request({ endpoint: `auth/register/`, method: `POST`, data: credentials })
  }

  async loginUser(credentials) {
    return await this.request({ endpoint: `auth/login/`, method: `POST`, data: credentials })
  }

  async fetchUser() {
    return await this.request({ endpoint: `auth/me/`, method: `GET` })
  }

  async logoutUser() {
    this.setToken(null)
    Tokens.setToken(null)
  }
}

export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL)
