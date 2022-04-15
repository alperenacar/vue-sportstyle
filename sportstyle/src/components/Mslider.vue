<template>
   <!--Main Slider -->
    <div class="bg-second-gray ">
        <div class="container mx-auto ">
           <Tag></Tag>
           <Slider></Slider>
        </div>
    </div>
</template>

<script>
import Tag from './Tag.vue'
import Slider from './Slider.vue'

export default {
    name : 'Mslider',
    components: {
    Tag,
    Slider,
  },
};

</script>

 