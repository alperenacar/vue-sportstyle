<template>
    <!--Header-->
    <header class="fixed top-0 z-50 w-full bg-white">
    <!--Mobil menu are-->
       <Mheader></Mheader>
    <!--UHeader Swiper-->
        <Uheader></Uheader>
    <!--DHeader-->
        <Dheader></Dheader>
    </header>
</template>

<script>
import Uheader from './Uheader.vue'
import Dheader from './Dheader.vue'
import Mheader from './Mheader.vue'

export default {
  name : 'Header',
  components:{
    Uheader,
    Dheader,
    Mheader
  }
}
</script>