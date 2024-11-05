import { createWebHistory, createRouter } from "vue-router";
import HomeCoches from "@/components/HomeCoches"
import CreateCoches from "@/components/CreateCoches"
import DetailsCoche from "@/components/DetailsCoche"
import UpdateCoche from "@/components/UpdateCoche"

const myRoutes = [
    {
        path: "/", component: HomeCoches
    },
    {
        path: "/create", component: CreateCoches
    },
    {
        path: "/details/:idCoche", component: DetailsCoche
    },
    {
        path: "/update/:idCoche", component: UpdateCoche
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;