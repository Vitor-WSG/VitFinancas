import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.stringify(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null
  }),

  actions: {
    login(email: string, password: any) {
      const mockUser = { email: 'user@email.com', password: '123' }

      if (email === mockUser.email && password === mockUser.password) {
        const fakeToken = btoa(`${email}:${password}`)
        this.user = { email };
        this.token = fakeToken;

        try {
          localStorage.setItem("user", JSON.stringify(this.user))
          localStorage.setItem("token", this.token)
        } catch (error) {
          this.logout()
        }
        return true
      }
      return false
    },

    logout() {
      this.user = null;
      this.token = ''
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    }
  },

})