<template>
  <!--NAV TAB MENU-->
    <div class="p-2 mx-auto text-center bg-second-gray">
        <span class="font-medium 2xl:text-s-24 md:text-s-16 lg:text-s-18 xl:text-s-19 text-s-19 ">Yeni Gelenler</span>
    </div>
    <div class="container mx-auto">
        <div class="main-navtab">

            <ul class="flex flex-wrap justify-center pl-0 mb-4 list-none border-b-0 nav nav-tabs md:flex-row xl:text-s-14 lg:text-s-13 md:text-s-12" id="tabs-tab3" role="tablist">
                <li class="nav-item" role="presentation">
                    <a href="#tabs-home3" class="block w-full px-6 py-3 my-2 font-medium leading-tight uppercase border-t-0 border-b-2 border-transparent nav-link border-x-0 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tab3" data-bs-toggle="pill"
                        data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3" aria-selected="true">Yeni sezon</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-profile3" class="block w-full px-6 py-3 my-2 font-medium leading-tight uppercase border-t-0 border-b-2 border-transparent nav-link border-x-0 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tab3" data-bs-toggle="pill"
                        data-bs-target="#tabs-profile3" role="tab" aria-controls="tabs-profile3" aria-selected="false">Günlük Kullanım</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-messages3" class="block w-full px-6 py-3 my-2 font-medium leading-tight uppercase border-t-0 border-b-2 border-transparent nav-link border-x-0 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-messages-tab3"
                        data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab" aria-controls="tabs-messages3" aria-selected="false">Sweatshirt</a>
                </li>
            </ul>
            <div class="tab-content" id="tabs-tabContent3">
                <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                     <Slider></Slider>
                </div>
                <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                     <Slider></Slider>
                </div>
                <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                    <Slider></Slider>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from './Slider.vue'

export default {
  name : 'Mtab',
  components: {
      Slider,
  }
}
</script>