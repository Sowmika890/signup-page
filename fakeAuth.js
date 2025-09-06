// Dummy Auth Service (localStorage based)
const fakeAuth = {
  signup: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  },

  login: (username, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.username === username && savedUser.password === password) {
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem("user");
  },

  getUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default fakeAuth;
