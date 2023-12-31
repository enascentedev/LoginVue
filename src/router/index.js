import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArearestritaView from "../views/AreaRestritaView.vue";
import Register from "../views/Register.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/registre-se",
			name: "Register",
			component: Register,
		},
		{
			path: "/clientes",
			name: "AreaRestrita",
			component: ArearestritaView,
		},
	],
});

export default router;
