import {createRouter, createWebHashHistory} from "vue-router";
import Main from './components/Main.vue';
import About from './components/About.vue';
import Information from './components/Information.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:'/main', component:Main, alias:'/'},
        {path:'/about', component:About},
        {path:'/information', component:Information},
    ]
})
