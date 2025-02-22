/* eslint-disable no-unused-vars */
import { createRouter, createWebHashHistory } from "vue-router";
import Apartment from "./components/Apartment.vue";
import Enter from "./components/Enter.vue";
import Library from "./components/Library.vue";
import Settlement from "./components/Settlement.vue";

import Staff from "./components/Staff.vue";
import Information from "./components/Information.vue";


import SingUp from "./components/SingUp.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        
        { path:'/', name: 'apartment', component: Apartment }, 
        { path:'/library', name: 'library', component: Library }, 
        { path:'/staff', name: 'staff', component: Staff }, 
        { path:'/information', name:'information', component:Information},
        { path:'/enter', name:'enter', component:Enter},
        { path:'/settlement', name:'settlement', component:Settlement},
        { path:'/singUp', name:'news', component: SingUp},
    ]
});
