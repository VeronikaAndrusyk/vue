/* eslint-disable no-unused-vars */
import { createStore } from "vuex";
import auth from "./modules/auth.js"
import lists from "./modules/lists.js"

export default createStore({
  namespaced: true,
  modules: {
    auth,
    lists,
    
    
  },
});
