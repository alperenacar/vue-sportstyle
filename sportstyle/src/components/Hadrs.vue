<template>
     <div class="grid gap-4">
                    <div class="flex-col divide-y divide-brd-de md:gap-y-4 gap-y-8">
                        <div class="grid grid-cols-3 gap-4 pb-4">
                            <div class="col-span-3">
                                <span class="font-medium lg:text-s-20 md:text-s-18 text-s-16">Teslimat Adresi</span>
                            </div>
                            <div class="grid grid-cols-3 col-span-3 gap-4">
                                <div class="grid flex-col h-56 col-span-3 gap-2 border md:col-span-1 border-brd-aa ">

                                    <a href="javascript:;" onclick="modal('ftr-modal')" class="my-auto ">
                                        <div class="grid gap-2 p-4 mx-auto text-center align-middle">
                                            <i class="fa fa-plus-square fa-2x"></i>
                                            <div class="w-full mx-auto font-normal lg:w-full lg:text-s-12 md:text-s-10 text-s-12">Lütfen yeni teslimat adresi ekleyiniz.</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="grid flex-col w-full h-full col-span-3 gap-2 border md:col-span-1 border-brd-aa">
                                    <div class="grid gap-2 p-4 mx-auto font-medium align-middle lg:text-s-12 md:text-s-10 text-s-12">

                                        <h5>Ev <i class="fa fa-check-circle text-success" title="varsayılan adres"></i></h5>
                                        <p>Alperen Açar</p>
                                        <p>Çamlıca Mah. Mülçimen Sok. Yaylalar sitesi no:7 BURSA/NİLÜFER</p>
                                        <p>NİLÜFER, Bursa, Türkiye</p>
                                        <p>5416335062</p>
                                        <a href="javascript:;" onclick="modal('ftr-modal')" class="bg-black   border-none text-center  text-white xl:text-s-14 md:text-s-12 xs:text-s-10  block w-full p-2.5">
                                            <i class="fa fa-edit"></i>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-4 pt-4 ">
                            <div class="col-span-3">
                                <span class="font-medium lg:text-s-20 md:text-s-18 text-s-16">Fatura Adresi</span>
                            </div>
                            <div class="grid h-56 grid-cols-3 col-span-3 gap-4">
                                <div class="grid flex-col h-full col-span-3 gap-2 border md:col-span-1 border-brd-aa ">

                                    <a href="javascript:;" onclick="modal('ftr-modal')" class="my-auto ">
                                        <div class="grid gap-2 p-4 mx-auto text-center align-middle ">
                                            <i class="fa fa-plus-square fa-2x"></i>
                                            <div class="w-full mx-auto font-normal lg:w-full lg:text-s-12 md:text-s-10 text-s-12">Lütfen yeni fatura adresi ekleyiniz.</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
</template>

<script>
export default {
  name : 'Hadrs'
}
</script>