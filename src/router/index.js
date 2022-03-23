// imports 
import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Products from "../views/Products.vue";
import Cart from "../views/Cart.vue";
import Profile from "../views/Profile.vue"

// const Profile = () => import("../components/Profile.vue")

// lazy-loaded --only load when needed 

const routes = [
  {
    path: "/cart",
    component: Cart,
    name: "Cart"
  },
  {

    path: "/home",
    component: Home,
    name: "home"
  },

  {

    path: "/about",
    component: About,
    name: "about"
  },
  {
    path: "/login",
    component: Login,
    name: "Login"
  },
  {
    path: "/register",
    component: Register,
    name: "Register"
  },
  {
    path: "/products",
    component: Products,
    name: "Products",

  },
  {
    path: "/profile",
    component: Profile,
    name: "Profile",

  },
  {

    path: "/contact",
    component: Contact,
    name: "contact"
  }


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/home", "/about", "/contact"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    next("/login",);
  } else {
    next();
  }
});

export default router;

