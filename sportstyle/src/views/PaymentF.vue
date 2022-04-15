<template>
    <Header></Header>
    <div class="container mx-auto mt-44">
        <div class="w-10/12 mx-auto lg:w-10/12 md:w-11/12 ">

            <div class="grid grid-cols-2 gap-4 xl:gap-8 lg:gap-6">
                <div class="flex items-center justify-center col-span-2 md:col-span-1">
                    <div class="flex gap-4">
                      <Payf></Payf>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                    <Os></Os>
                </div>
            </div>


        </div>
    </div>
    <Footer></Footer>
</template>



<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Os from '../components/Os.vue' 
import Payf from '../components/Payf.vue'

export default {
  name: 'Signup',
  components: {
    Header,
    Footer,
    Os,
    Payf,
  }
}
 
</script>