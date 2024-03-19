import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/homes/Home.vue'
import HelloWorld from "../components/HelloWorld.vue";
import Post from "../components/content/Post.vue";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path:"/Hello",
            name:"HelloWord",
            component:HelloWorld
        },{
            path:'/Post',
            name:"Post",
            component:Post,
        }
    ]
});

export default router;
