// userSession.js
class UserSession {
  static instance;

  constructor() {
      if (UserSession.instance) {
          return UserSession.instance; // Ensure singleton instance
      }
      UserSession.instance = this;

      // Check if we are in the browser environment
      if (typeof window !== "undefined") {
          const storedData = JSON.parse(localStorage.getItem("userData")) || {};
          this.userData = storedData.email ? storedData : null;
      } else {
          this.userData = null; // Handle the case when not in the browser
      }
  }

  login(email, role) {
      this.userData = { email, role };
      if (typeof window !== "undefined") { // Ensure we're in the browser
          localStorage.setItem("userData", JSON.stringify(this.userData));
      }
  }

  logout() {
      this.userData = null;
      if (typeof window !== "undefined") { // Ensure we're in the browser
          localStorage.removeItem("userData");
      }
  }

  getUser() {
      return this.userData;
  }

  isLoggedIn() {
      return !!this.userData;
  }

  getRole() {
      return this.userData?.role || null;
  }
}

export default new UserSession(); // Export a single instance
