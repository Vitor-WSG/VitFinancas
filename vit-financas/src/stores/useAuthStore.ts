import { defineStore } from 'pinia'
import axios from 'axios'

interface usuario {
  user: string,
  token: string
}


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem('token') || null
  }),

  actions: {
    async login(username: any, password: any) {
      const mokcUser = {email: "admin@email.com", password:'123'}
      if(email === mokcUser.email && password === mokcUser.password) {
        const fakeToken = btoa(`${email}:${password}`)
        this.user = {email},
        this.token = fakeToken

        localStorage.setItem("user", JSON.stringify(this.user))
        localStorage.setItem("token", this.token)

        return true
      }
      return false

    },

    async getUser() {
      if (!this.token) return;

      try {
        const { data } = await axios.get('http://localhost:3000/protected', {
          headers: { Authorization: this.token },
        })
        this.user = data.message
      } catch (error) {
        this.logout()
      }
    },

    logout() {
      this.user = null,
        this.token = null,
        localStorage.removeItem("token")
      localStorage.removeItem("user")
    }
  }
})