<template>
  <div class="fixed z-40 flex-col w-full pb-4 overflow-y-auto font-light bg-white divide-y opacity-0 text-s-20 divide-brd-de mobile-menu-area ">
            <div class="block px-6 py-4 transition md:hidden ">
                <!-- header -->
                <a href="#" class="flex items-center justify-between space-x-5 cursor-pointer text-ktxtgray">
                    <span>Giriş Yap veya Üye Ol</span>
                    <i class="fal fa-user"></i>
                </a>
            </div>

            <div class="block px-6 py-4 transition md:hidden ">
                <!-- header -->
                <a href="#" class="flex items-center justify-between space-x-5 cursor-pointer text-ktxtgray">
                    <span>Yeni Sezon</span>

                </a>
            </div>

            <div class="block px-6 py-4 transition md:hidden ">
                <!-- header -->
                <div class="flex items-center justify-between space-x-5 transition cursor-pointer text-ktxtgray accordion-header">
                    <span>Kadın</span>
                    <i class="fas fa-angle-down"></i>
                </div>
                <!-- Content -->

                <div class="relative overflow-hidden transition-all duration-700 text-ktxtgray accordion-content max-h-0 custom-scrollbar" style="max-height: 0" x-ref="category" x-bind:style="selected == 1 ? 'max-height: ' + 277 + 'px' : ''">
                    <div class="grid grid-cols-1 gap-2 py-2 font-medium text-s-14">

                        <div>
                            <a href="#">KADIN</a>
                        </div>
                        <div>
                            <a href="#">ERKEK</a>
                        </div>
                        <div>
                            <a href="#">ÇOCUK</a>
                        </div>
                        <div>
                            <a href="#">BÜYÜK BEDEN</a>
                        </div>
                        <div>
                            <a href="#">MARKALAR</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block px-6 py-4 transition md:hidden ">
                <!-- header -->
                <div class="flex items-center justify-between space-x-5 transition cursor-pointer text-ktxtgray accordion-header">
                    <span>Erkek</span>
                    <i class="fas fa-angle-down"></i>
                </div>
                <!-- Content -->

                <div class="relative overflow-hidden transition-all duration-700 text-ktxtgray accordion-content max-h-0 custom-scrollbar" style="max-height: 0" x-ref="category" x-bind:style="selected == 1 ? 'max-height: ' + 277 + 'px' : ''">
                    <div class="grid grid-cols-1 gap-2 py-2 font-medium text-s-14">

                        <div>
                            <a href="#">KADIN</a>
                        </div>
                        <div>
                            <a href="#">ERKEK</a>
                        </div>
                        <div>
                            <a href="#">ÇOCUK</a>
                        </div>
                        <div>
                            <a href="#">BÜYÜK BEDEN</a>
                        </div>
                        <div>
                            <a href="#">MARKALAR</a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="block px-6 py-4 transition md:hidden ">
                <!-- header -->
                <div class="flex items-center justify-between space-x-5 transition cursor-pointer text-ktxtgray accordion-header">
                    <span>Çocuk</span>
                    <i class="fas fa-angle-down"></i>
                </div>
                <!-- Content -->

                <div class="relative overflow-hidden transition-all duration-700 text-ktxtgray accordion-content max-h-0 custom-scrollbar" style="max-height: 0" x-ref="category" x-bind:style="selected == 1 ? 'max-height: ' + 277 + 'px' : ''">
                    <div class="grid grid-cols-1 gap-2 py-2 font-medium text-s-14">

                        <div>
                            <a href="#">KADIN</a>
                        </div>
                        <div>
                            <a href="#">ERKEK</a>
                        </div>
                        <div>
                            <a href="#">ÇOCUK</a>
                        </div>
                        <div>
                            <a href="#">BÜYÜK BEDEN</a>
                        </div>
                        <div>
                            <a href="#">MARKALAR</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block px-6 py-4 transition md:hidden ">
                <!-- header -->
                <div class="flex items-center justify-between space-x-5 transition cursor-pointer text-ktxtgray accordion-header">
                    <span>Markalar</span>
                    <i class="fas fa-angle-down"></i>
                </div>
                <!-- Content -->

                <div class="relative overflow-hidden transition-all duration-700 text-ktxtgray accordion-content max-h-0 custom-scrollbar" style="max-height: 0" x-ref="category" x-bind:style="selected == 1 ? 'max-height: ' + 277 + 'px' : ''">
                    <div class="grid grid-cols-1 gap-2 py-2 font-medium text-s-14">

                        <div>
                            <a href="#">KADIN</a>
                        </div>
                        <div>
                            <a href="#">ERKEK</a>
                        </div>
                        <div>
                            <a href="#">ÇOCUK</a>
                        </div>
                        <div>
                            <a href="#">BÜYÜK BEDEN</a>
                        </div>
                        <div>
                            <a href="#">MARKALAR</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block px-6 py-4 transition md:hidden ">
                <!-- header -->
                <div class="flex items-center justify-between space-x-5 transition cursor-pointer text-ktxtgray accordion-header">
                    <span>Outlet</span>
                    <i class="fas fa-angle-down"></i>
                </div>
                <!-- Content -->

                <div class="relative overflow-hidden transition-all duration-700 text-ktxtgray accordion-content max-h-0 custom-scrollbar" style="max-height: 0" x-ref="category" x-bind:style="selected == 1 ? 'max-height: ' + 277 + 'px' : ''">
                    <div class="grid grid-cols-1 gap-2 py-2 font-medium text-s-14">

                        <div>
                            <a href="#">KADIN</a>
                        </div>
                        <div>
                            <a href="#">ERKEK</a>
                        </div>
                        <div>
                            <a href="#">ÇOCUK</a>
                        </div>
                        <div>
                            <a href="#">BÜYÜK BEDEN</a>
                        </div>
                        <div>
                            <a href="#">MARKALAR</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block px-6 py-4 transition md:hidden ">
                <!-- header -->
                <a href="#" class="flex items-center justify-between space-x-5 cursor-pointer text-ktxtgray">
                    <span>Süper İndirim</span>

                </a>
            </div>
            <div class="block px-6 py-4 transition md:hidden ">
                <!-- header -->
                <a href="#" class="flex items-center justify-between space-x-5 cursor-pointer text-ktxtgray">
                    <span>İLETİŞİM</span>

                </a>
            </div>
        </div>
</template>

<script>
export default {
  name : 'Mheader'
}
</script>