import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStoreAPI = defineStore('authAPI', {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null
  }),

  actions: {
    async login(username: any, password: any) {
      try {
        const { data } = await axios.post("http://3000:localhost", { username, password })
        this.token = data.token
        localStorage.setItem('token', data.token)

        this.getUser()
      } catch (error) {
        console.log(error)
      }
    },

    getUser() {
      if (!this.token) return;

      try {
        const { data } = await axios.get("http://3000:localhost", {
          headers: { Authorization: this.token }
        })

        this.user = data.message
      } catch (error) {
        this.logout()
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  }
})