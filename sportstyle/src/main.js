import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/build.css'
//import './assets/css/tailwind.css'
import $ from "jquery";

import 'swiper'
import 'tw-elements'
//import './assets/js/app.js'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Product from './views/Product.vue'
import Address from './views/Address.vue'
import Account from './views/Account.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import Sss from './views/Sss.vue'
import Cargo from './views/Cargo.vue'
import Payment from './views/Payment.vue'
import ContactPage from './views/ContactPage.vue'
import Category from './views/Category.vue'
import Blog from './views/Blog.vue'
import BlogDetail from './views/BlogDetail.vue'
import Style from './views/Style.vue'
import PaymentS from './views/PaymentS.vue'
import PaymentF from './views/PaymentF.vue'

//import '../assets/js/app.js'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/product', name: 'Product', component: Product },
        { path: '/about', name: 'About', component: About },
        { path: '/address', name: 'Address', component: Address },
        { path: '/account', name: 'Account', component: Account },
        { path: '/signup', name: 'Signup', component: Signup },
        { path: '/signin', name: 'Signin', component: Signin },
        { path: '/sss', name: 'Sss', component: Sss },
        { path: '/cargo', name: 'Cargo', component: Cargo },
        { path: '/payment', name: 'Payment', component: Payment },
        { path: '/contactpage', name: 'ContactPage', component: ContactPage },
        { path: '/category', name: 'Category', component: Category },
        { path: '/blog', name: 'Blog', component: Blog },
        { path: '/blogdetail', name: 'BlogDetail', component: BlogDetail },
        { path: '/style', name: 'Style', component: Style },
        { path: '/payments', name: 'PaymentS', component: PaymentS },
        { path: '/paymentf', name: 'PaymentF', component: PaymentF },
    ]
})

createApp(App)
    .use(router)
    .mount('#app')