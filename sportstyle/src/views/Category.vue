<template>
    <Header></Header>
      <div class="container mx-auto mt-40">

        <div class="grid grid-cols-5 px-2 mt-8 lg:px-6 md:px-4">
            <div class="col-span-5 col-start-1">
            
        <!--breadcrumb-->
             <Breadcrumb></Breadcrumb>
            </div>
        </div>


        <div class="grid grid-cols-5 px-2 py-4 lg:px-6 md:px-4">
            <!--Filtre Category Left block-->
            <CategoryLeft></CategoryLeft>

            <!--Category Right side-->
            <div class="col-span-5 md:col-span-4">
                <CategoryRight></CategoryRight>
            </div>

        </div>
    </div>

    <Footer></Footer>
</template>



<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CategoryLeft from '../components/CategoryLeft.vue'
import CategoryRight from '../components/CategoryRight.vue'
import Breadcrumb from '../components/Breadcrumb.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
    CategoryLeft,
    CategoryRight,
    Breadcrumb,
  }
}
 
</script>