import { createStore } from "vuex";
import students from "./modules/students";
import auth from "./modules/auth.js"
export default createStore({
  namespaced: true,
  modules: {
    students,
    auth,
  },
});
