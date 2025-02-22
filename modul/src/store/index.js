import { createStore } from 'vuex'
import students from "./modules/students";

export default createStore({
  namespaced: true,
  modules: {
    students,
  }
})
