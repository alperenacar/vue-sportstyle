<template>
    <Header></Header>
        <div class="container mx-auto mt-36">
        <div class="w-10/12 mx-auto lg:w-10/12 md:w-11/12 ">
            <form action="get">
                <div class="grid grid-cols-3 gap-3 xl:gap-6 lg:gap-4 ">
                    <div class="col-span-3 mt-4 border-b border-brd-de">
                        <Adrstag></Adrstag>
                    </div>
                    <AdrsC></AdrsC>
                     <div class="col-span-3 md:col-span-1 ">
                    <Os></Os>
                    </div>
                </div>
            </form>

        </div>
    </div>
    <Footer></Footer>
</template>



<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Adrstag from '../components/Adrstag.vue'
import AdrsC from '../components/AdrsC.vue' 
import Os from '../components/Os.vue' 

export default {
  name: 'About',
  components: {
    Header,
    Footer,
    Adrstag,
    AdrsC,   
    Os,
  }
}
 
</script>