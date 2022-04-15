<template>
    <Header></Header>
 <div class="container px-4 mx-auto mt-36 tarz">
        <div class="grid gap-4">
            <div class="">
                <img class="w-full" src="../assets/img/trzpage.jpg" alt="">
            </div>
            <div class="xl:text-s-20 lg:text-s-18 text-s-16">Hoş Geldin. Ne Arıyorsun?</div>
            <div class="xl:text-s-16 lg:text-s-14 text-s-12">
                <ul class="flex flex-wrap pl-0 mb-4 list-none border-b nav nav-tabs md:flex-row border-brd-de" id="tabs-tab3" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-home3" class="block w-full px-6 py-3 font-medium leading-tight uppercase border-t-0 border-b-2 border-transparent nav-link border-x-0 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tab3" data-bs-toggle="pill"
                            data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3" aria-selected="true">Ayakkabı</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-profile3" class="block w-full px-6 py-3 font-medium leading-tight uppercase border-t-0 border-b-2 border-transparent nav-link border-x-0 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tab3" data-bs-toggle="pill"
                            data-bs-target="#tabs-profile3" role="tab" aria-controls="tabs-profile3" aria-selected="false">Tekstil</a>
                    </li>

                </ul>
                <div class="tab-content" id="tabs-tabContent3">
                    <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                        <div class="grid gap-4 divide-y divide-brd-de">
                            <div class="py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Kimin Tarzını Belirliyoruz?</div>
                                    <div>
                                        <div class="grid grid-cols-4 gap-2 md:flex 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="radio" name="kt" id="option99" class="hidden" />
                                                    <label for="option99" class="grid items-center justify-center h-full gap-2 p-0 font-bold text-center bg-transparent border cursor-pointer xs:rounded-2xl colum-border rounded-3xl border-brd-aa ">
                                                    <div> <img src="../assets/img/kadin.png" alt="">  </div>
                                                    <div class="flex items-center justify-center gap-1 md:gap-4 hr-span">
                                                        <div>
                                                            <span></span>
                                                        </div>
                                                        <div>
                                                            <span></span>
                                                        </div>
                                                        <div>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <p class="pb-2 md:text-s-12 lg:text-s-14 xl:text-s-16 2xl:text-s-18">Kadın</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="radio" name="kt" id="option100" class="hidden" />
                                                    <label for="option100" class="grid items-center justify-center h-full gap-2 p-0 font-bold text-center bg-transparent border cursor-pointer xs:rounded-2xl colum-border rounded-3xl border-brd-aa ">
                                                        <div> <img src="../assets/img/erkek.png" alt="">  </div>  
                                                        <div class="flex items-center justify-center gap-1 md:gap-4 hr-span">
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <p class="pb-2 md:text-s-12 lg:text-s-14 xl:text-s-16 2xl:text-s-18">Erkek</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="radio" name="kt" id="option101" class="hidden" />
                                                    <label for="option101" class="grid items-center justify-center h-full gap-2 p-0 font-bold text-center bg-transparent border cursor-pointer xs:rounded-2xl colum-border rounded-3xl border-brd-aa ">
                                                        <div> <img src="../assets/img/cocuk.png" alt="">  </div> 
                                                        <div class="flex items-center justify-center gap-1 md:gap-4 hr-span">
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                   <p class="pb-2 md:text-s-12 lg:text-s-14 xl:text-s-16 2xl:text-s-18">Çocuk</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="radio" name="kt" id="option102" class="hidden" />
                                                    <label for="option102" class="grid items-center justify-center h-full gap-2 p-0 font-bold text-center bg-transparent border cursor-pointer xs:rounded-2xl colum-border rounded-3xl border-brd-aa ">
                                                        <div> <img src="../assets/img/unisex.png" alt="">  </div> 
                                                         <div class="flex items-center justify-center gap-1 md:gap-4 hr-span">
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                         <p class="pb-2 md:text-s-12 lg:text-s-14 xl:text-s-16 2xl:text-s-18">Unisex</p>
                                                </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Hangi Spor Dalı Senin Tarzın?</div>
                                    <div>
                                        <div class="flex gap-1 md:gap-2 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option50" class="hidden" />
                                                    <label for="option50" class="grid items-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 j cursor-pointerustify-center tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                      <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-basket basket-css"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Basketbol</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option51" class="hidden" />
                                                    <label for="option51" class="grid items-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 j cursor-pointerustify-center tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                    <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-futbol futbol-css label-checked:bg-h-salon"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Futbol</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option52" class="hidden" />
                                                    <label for="option52" class="grid items-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 j cursor-pointerustify-center tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                    <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-tenis tenis-css label-checked:bg-h-salon"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Tenis</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option53" class="hidden" />
                                                    <label for="option53" class="grid items-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 j cursor-pointerustify-center tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                    <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-fitnes fitnes-css label-checked:bg-h-salon"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Fitness</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option54" class="hidden" />
                                                    <label for="option54" class="grid items-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 j cursor-pointerustify-center tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                    <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-kosu kosu-css label-checked:bg-h-salon"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Koşu</p>
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Tarzını Nasıl Tanımlarsın?</div>
                                    <div>
                                        <div class="flex gap-1 md:gap-2 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="tarzt" id="option40" class="hidden" />
                                                    <label for="option40" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                      <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-isinsan isinsan-css"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">İş İnsanı</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="tarzt" id="option41" class="hidden" />
                                                    <label for="option41" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                    <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-doga doga-css label-checked:bg-h-salon"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Doğa Sever</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="tarzt" id="option42" class="hidden" />
                                                    <label for="option42" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                    <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-spor spor-css label-checked:bg-h-salon"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Spor Tutkunu</p>
                                                </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Kombinini Nasıl Tanımlarsın?</div>
                                    <div>
                                        <div class="flex gap-1 md:gap-2 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option30" class="hidden" />
                                                    <label for="option30" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                          <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-crenkli crenkli-css"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Çok Renkli</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option31" class="hidden" />
                                                    <label for="option31" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-zrenkli zrenkli-css label-checked:bg-h-salon"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Zıt Renkler</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option32" class="hidden" />
                                                    <label for="option32" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-trenkli trenkli-css label-checked:bg-h-salon"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Tek Renkler</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option33" class="hidden" />
                                                    <label for="option33" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-krenkli krenkli-css label-checked:bg-h-salon"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Koyu Renkler</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn" id="option34" class="hidden" />
                                                    <label for="option34" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-arenkli arenkli-css label-checked:bg-h-salon"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Açık Renkler</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Ayakkabı Numaran?</div>
                                    <div>
                                        <div class="flex flex-wrap gap-1 md:gap-2 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option1" class="hidden" />
                                                    <label for="option1" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">35.5</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option2" class="hidden" />
                                                    <label for="option2" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">36</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option3" class="hidden" />
                                                    <label for="option3" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">36.5</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option4" class="hidden" />
                                                    <label for="option4" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">37</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option5" class="hidden" />
                                                    <label for="option5" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">37.5</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option6" class="hidden" />
                                                    <label for="option6" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa label-checked:border-transparent label-checked:product-check label-checked:text-white label-checked:font-bold label-checked:bg-bg-grn md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">38</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option1" class="hidden" />
                                                    <label for="option1" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">35.5</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option2" class="hidden" />
                                                    <label for="option2" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">36</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option3" class="hidden" />
                                                    <label for="option3" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">36.5</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option4" class="hidden" />
                                                    <label for="option4" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">37</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option5" class="hidden" />
                                                    <label for="option5" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">37.5</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option" id="option6" class="hidden" />
                                                    <label for="option6" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa label-checked:border-transparent label-checked:product-check label-checked:text-white label-checked:font-bold label-checked:bg-bg-grn md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">38</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Hangi Aktivite Tarzına Daha Uygun?</div>
                                    <div>
                                        <div class="flex gap-1 md:gap-2 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="aktvt" id="option10" class="hidden" />
                                                    <label for="option10" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                          <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-yuruyus yuruyus-css"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Günlük Yürüyüş</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="aktvt" id="option11" class="hidden" />
                                                    <label for="option11" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-salon tarz-div salon-css label-checked:bg-h-salon"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Spor Salonu</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid py-4 st-rows ">
                                <div class="py-2 my-2 mt-4 font-medium text-center text-white bg-black rounded-lg cursor-pointer 3xs:text-s-12 text-s-14 lg:text-s-16 xl:text-s-18"><a href="# ">GARDROBUNU YARAT</a></div>
                                <div class="text-red-500 ">*Lütfen sorulardan en az üçünü cevapladığından emin ol.</div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                        <div class="grid gap-4 divide-y divide-brd-de">
                            <div class="py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Kimin Tarzını Belirliyoruz?</div>
                                    <div>
                                        <div class="grid grid-cols-4 gap-2 md:flex 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="radio" name="kt2" id="option61" class="hidden" />
                                                    <label for="option61" class="grid items-center justify-center h-full gap-2 p-0 font-bold text-center bg-transparent border cursor-pointer xs:rounded-2xl colum-border rounded-3xl border-brd-aa ">
                                                    <div> <img src="../assets/img/kadin.png" alt="">  </div>
                                                    <div class="flex items-center justify-center gap-1 md:gap-4 hr-span">
                                                        <div>
                                                            <span></span>
                                                        </div>
                                                        <div>
                                                            <span></span>
                                                        </div>
                                                        <div>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <p class="pb-2 md:text-s-12 lg:text-s-14 xl:text-s-16 2xl:text-s-18">Kadın</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="radio" name="kt2" id="option62" class="hidden" />
                                                    <label for="option62" class="grid items-center justify-center h-full gap-2 p-0 font-bold text-center bg-transparent border cursor-pointer xs:rounded-2xl colum-border rounded-3xl border-brd-aa ">
                                                        <div> <img src="../assets/img/erkek.png" alt="">  </div>  
                                                        <div class="flex items-center justify-center gap-1 md:gap-4 hr-span">
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <p class="pb-2 md:text-s-12 lg:text-s-14 xl:text-s-16 2xl:text-s-18">Erkek</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="radio" name="kt2" id="option63" class="hidden" />
                                                    <label for="option63" class="grid items-center justify-center h-full gap-2 p-0 font-bold text-center bg-transparent border cursor-pointer xs:rounded-2xl colum-border rounded-3xl border-brd-aa ">
                                                        <div> <img src="../assets/img/cocuk.png" alt="">  </div> 
                                                        <div class="flex items-center justify-center gap-1 md:gap-4 hr-span">
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                   <p class="pb-2 md:text-s-12 lg:text-s-14 xl:text-s-16 2xl:text-s-18">Çocuk</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="radio" name="kt2" id="option64" class="hidden" />
                                                    <label for="option64" class="grid items-center justify-center h-full gap-2 p-0 font-bold text-center bg-transparent border cursor-pointer xs:rounded-2xl colum-border rounded-3xl border-brd-aa ">
                                                        <div> <img src="../assets/img/unisex.png" alt="">  </div> 
                                                         <div class="flex items-center justify-center gap-1 md:gap-4 hr-span">
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                         <p class="pb-2 md:text-s-12 lg:text-s-14 xl:text-s-16 2xl:text-s-18">Unisex</p>
                                                </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Tarzını Nasıl Tanımlarsın?</div>
                                    <div>
                                        <div class="flex gap-1 md:gap-2 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="tarzt2" id="option65" class="hidden" />
                                                    <label for="option65" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                      <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-isinsan isinsan-css"></div>
                                                    <p class="mx-auto md:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">İş İnsanı</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="tarzt2" id="option66" class="hidden" />
                                                    <label for="option66" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                    <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-doga doga-css label-checked:bg-h-salon"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Doğa Sever</p>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="tarzt2" id="option67" class="hidden" />
                                                    <label for="option67" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                    
                                                    <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-spor spor-css label-checked:bg-h-salon"></div>
                                                    <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Spor Tutkunu</p>
                                                </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Kombinini Nasıl Tanımlarsın?</div>
                                    <div>
                                        <div class="flex gap-1 md:gap-2 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn2" id="option68" class="hidden" />
                                                    <label for="option68" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                          <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-crenkli crenkli-css"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Çok Renkli</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn2" id="option69" class="hidden" />
                                                    <label for="option69" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-zrenkli zrenkli-css label-checked:bg-h-salon"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Zıt Renkler</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn2" id="option70" class="hidden" />
                                                    <label for="option70" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-trenkli trenkli-css label-checked:bg-h-salon"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Tek Renkler</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn2" id="option71" class="hidden" />
                                                    <label for="option71" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-krenkli krenkli-css label-checked:bg-h-salon"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Koyu Renkler</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="kmbn2" id="option72" class="hidden" />
                                                    <label for="option72" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer colum-border md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-arenkli arenkli-css label-checked:bg-h-salon"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Açık Renkler</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Ayakkabı Numaran?</div>
                                    <div>
                                        <div class="flex flex-wrap gap-1 md:gap-2 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option2" id="option73" class="hidden" />
                                                    <label for="option73" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">3L</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option2" id="option74" class="hidden" />
                                                    <label for="option74" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">M</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option2" id="option75" class="hidden" />
                                                    <label for="option75" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">S </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option2" id="option76" class="hidden" />
                                                    <label for="option76" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">XL</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option2" id="option77" class="hidden" />
                                                    <label for="option77" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">XS</label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <input type="checkbox" name="option2" id="option78" class="hidden" />
                                                    <label for="option78" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded cursor-pointer colum-border border-brd-aa label-checked:border-transparent label-checked:product-check label-checked:text-white label-checked:font-bold label-checked:bg-bg-grn md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">XXL</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden py-4 st-rows">
                                <div class="grid gap-4">
                                    <div class="font-light xl:text-s-18 lg:text-s-16 text-s-14">Hangi Aktivite Tarzına Daha Uygun?</div>
                                    <div>
                                        <div class="flex gap-1 md:gap-2 2xl:gap-4 xl:gap-3">
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="aktvt2" id="option79" class="hidden" />
                                                    <label for="option79" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                          <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-yuruyus yuruyus-css"></div>
                                                        <p class="mx-auto md:text-s-10 3xs:text-s-10 text-s-12 lg:text-s-12 xl:text-s-14 ">Günlük Yürüyüş</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="aktvt2" id="option80" class="hidden" />
                                                    <label for="option80" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-plates plates-css label-checked:bg-h-salon"></div>
                                                        <p class="w-3/4 mx-auto">Plates, Yoga
                                                            Fitness</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="h-full">
                                                    <input type="checkbox" name="aktvt2" id="option81" class="hidden" />
                                                    <label for="option81" class="grid items-center justify-center h-full gap-2 p-1 font-bold text-center bg-transparent border rounded-lg cursor-pointer md:p-2 tarz-div border-brd-aa md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16">
                                                        
                                                        <div class="mx-auto bg-center bg-no-repeat bg-auto xs:bg-contain bg-spor spor-css label-checked:bg-h-salon"></div>
                                                        <p class="w-3/4 mx-auto">Basket, Futbol
                                                            Tenis
                                                        </p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid py-4 st-rows">
                                <div class="py-2 my-2 mt-4 font-medium text-center text-white bg-black rounded-lg cursor-pointer 3xs:text-s-12 text-s-14 lg:text-s-16 xl:text-s-18"><a href="# ">GARDROBUNU YARAT</a></div>
                                <div class="text-red-500 ">*Lütfen sorulardan en az üçünü cevapladığından emin ol.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                <div class="w-full h-full content-div">
                    <a href="#" class="relative flex items-center justify-center h-full">
                        <img src="../assets/img/kategori3.jpg" class="w-full h-full " width="482" height="405" alt="">
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <div class="text-center ">
                                <button class="px-3 py-1 font-bold text-center bg-white rounded-lg xl:text-s-12 lg:text-s-11 text-s-10">İncele</button>
                            </div>
                        </div>
                    </a>

                </div>
                <a href="#" class="">
                    <div class="grid p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                        <div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div>
                        <div class="truncate">
                            <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack - D202016-976</span>
                        </div>
                        <div class="">
                            <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                        </div>
                        <div class="flex justify-between ">
                            <div class="flex justify-between">
                                <div class="my-auto"><span class="font-light text-red-600 xl:text-s-18 lg:text-s-16 md:text-s-14">100.00₺</span></div>
                                <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>
                            </div>
                            <div class="my-auto ">
                                <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                <div class="w-full h-full content-div">
                    <a href="#" class="relative flex items-center justify-center h-full">
                        <img src="../assets/img/kategori3.jpg" class="w-full h-full " width="482" height="405" alt="">
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <div class="text-center ">
                                <button class="px-3 py-1 font-bold text-center bg-white rounded-lg xl:text-s-12 lg:text-s-11 text-s-10">İncele</button>
                            </div>
                        </div>
                    </a>

                </div>
                <a href="#" class="">
                    <div class="grid p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                        <div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div>
                        <div class="truncate">
                            <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack - D202016-976</span>
                        </div>
                        <div class="">
                            <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                        </div>
                        <div class="flex justify-between ">
                            <div class="flex justify-between">
                                <div class="my-auto"><span class="font-light text-red-600 xl:text-s-18 lg:text-s-16 md:text-s-14">100.00₺</span></div>
                                <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>
                            </div>
                            <div class="my-auto ">
                                <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                <div class="w-full h-full content-div">
                    <a href="#" class="relative flex items-center justify-center h-full">
                        <img src="../assets/img/kategori3.jpg" class="w-full h-full " width="482" height="405" alt="">
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <div class="text-center ">
                                <button class="px-3 py-1 font-bold text-center bg-white rounded-lg xl:text-s-12 lg:text-s-11 text-s-10">İncele</button>
                            </div>
                        </div>
                    </a>

                </div>
                <a href="#" class="">
                    <div class="grid p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                        <div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div>
                        <div class="truncate">
                            <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack - D202016-976</span>
                        </div>
                        <div class="">
                            <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                        </div>
                        <div class="flex justify-between ">
                            <div class="flex justify-between">
                                <div class="my-auto"><span class="font-light text-red-600 xl:text-s-18 lg:text-s-16 md:text-s-14">100.00₺</span></div>
                                <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>
                            </div>
                            <div class="my-auto ">
                                <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>



<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
 
export default {
  name: 'Style',
  components: {
    Header,
    Footer,
  }
}
 
</script>