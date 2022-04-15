<template>
<!--Category Left-->
  <div class="hidden col-span-1 md:block">

                <div class="grid grid-cols-1 mt-4">
                    <div class="w-4/5 ">
                        <div class="">

                            <div class="transition ">
                                <!-- header -->
                                <div class="flex items-center justify-between space-x-5 transition cursor-pointer accordion-header">
                                    <span class="font-bold xl:text-s-18 lg:text-s-16 text-s-14">Kategoriler</span>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                                <!-- Content -->

                                <div class="relative overflow-hidden font-light transition-all duration-700 accordion-content max-h-0 custom-scrollbar" style="max-height: 12rem">
                                    <div class="grid grid-cols-1 gap-2 font-light lg:text-s-14 xl:text-s-16 text-s-12">

                                        <div>
                                            <a href="#">Kadın Ayakkabı</a>
                                        </div>
                                        <div>
                                            <a href="#">Kadın Giyim</a>
                                        </div>
                                        <div>
                                            <a href="#">Kadın Aksesuar ve Ekipman</a>
                                        </div>
                                        <div>
                                            <a href="#">Kadın Bot ve Çizme</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <form action="get">
                                <hr>
                                <div class="transition ">
                                    <!-- header -->
                                    <div class="flex items-center justify-between space-x-5 transition cursor-pointer accordion-header">
                                        <span class="font-bold xl:text-s-18 lg:text-s-16 text-s-14">Marka</span>
                                        <i class="fas fa-angle-down"></i>
                                    </div>
                                    <!-- Content -->
                                    <div class="relative overflow-hidden font-light transition-all duration-700 accordion-content max-h-0 custom-scrollbar" style="max-height: 12rem">
                                        <div class="grid grid-cols-1 gap-2 font-light lg:text-s-14 xl:text-s-16 text-s-12">

                                            <div>
                                                <label class="inline-flex items-center">
                                  <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                  Nike
                                </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                  <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                  New Balance
                                </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                  <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                  Diadora
                                </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                  <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                  Vans
                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <hr>
                                <div class="transition kategori-renk">
                                    <!-- header -->
                                    <div class="flex items-center justify-between space-x-5 transition cursor-pointer accordion-header">

                                        <span class="font-bold xl:text-s-18 lg:text-s-16 text-s-14">Renk</span>
                                        <i class="fas fa-angle-down"></i>
                                    </div>
                                    <!-- Content -->

                                    <div class="relative overflow-hidden overflow-y-auto font-light transition-all duration-700 accordion-content max-h-0 custom-scrollbar" style="max-height: 12rem">
                                        <div class="grid grid-cols-3 gap-2 font-light lg:text-s-14 xl:text-s-16 text-s-12">

                                            <div class="relative">
                                                <input class="absolute top-0 left-0 w-6 h-6 bg-transparent border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                                <label class="inline-flex items-center xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 bg-gradient-to-t from-slate-600 to-gray-900">  </label>
                                            </div>
                                            <div class="relative">
                                                <input class="absolute top-0 left-0 w-6 h-6 bg-transparent border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                                <label class="inline-flex items-center xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 bg-gradient-to-t from-blue-400 to-blue-900"> </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                 
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                 
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                 
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                 
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="w-6 h-6 border-none xl:w-8 xl:h-8 lg:h-6 lg:w-6 md:h-5 md:w-5 focus:ring-transparent" type="checkbox" />
                                
                              </label>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <hr>
                                <div class="transition">
                                    <!-- header -->
                                    <div class="flex items-center justify-between space-x-5 transition cursor-pointer accordion-header">

                                        <span class="font-bold xl:text-s-18 lg:text-s-16 text-s-14">Numara / Beden</span>
                                        <i class="fas fa-angle-down"></i>
                                    </div>
                                    <!-- Content -->
                                    <div class="relative overflow-hidden overflow-y-auto font-light transition-all duration-700 accordion-content max-h-0 custom-scrollbar" style="max-height: 12rem">
                                        <div class="grid grid-cols-1 gap-2 font-light lg:text-s-14 xl:text-s-16 text-s-12">

                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                XS
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                S
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                M
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                L
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                L/XL
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                XL
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                10
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                10.5
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                11
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                16OZ
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                1SIZE
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                1X
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                24OZ
                              </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                <input class="mr-2 bg-transparent border-2 border-black xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                2X
                              </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <hr>
                            </form>
                        </div>
                    </div>
                </div>



            </div>
                   
</template>

<script>
export default {
  name : 'CategoryLeft'
}
</script>