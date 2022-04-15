<template>
  <div class="col-span-3 mt-4 border-b border-brd-de">
                        <div class="flex justify-center gap-5 mx-auto md:w-1/3">
                            <div class=" grs-btn active xl:text-s-18 lg:text-s-16 text-s-14">
                                <router-link class="w-full h-full " to="/signin">Giriş Yap</router-link>
                            </div>
                            <div class=" grs-btn xl:text-s-18 lg:text-s-16 text-s-14">
                                <router-link class="w-full h-full " to="/signup">Üye Ol</router-link>
                            </div>
                        </div>
                    </div>
</template>

<script>
export default {
  name : 'Logintag'
}
</script>