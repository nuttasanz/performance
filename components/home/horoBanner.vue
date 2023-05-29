<template>
  <div class="w-full">
    <!-- DESKTOP RESPONSIVE -->
    <div class="hidden xl:block max-w-[1440px] mx-auto pt-6 px-20 pb-9">
      <div
        class="w-full h-[500px] relative mx-auto rounded-3xl flex items-center justify-center"
        style="
          background: linear-gradient(83.05deg, #4148ad 39.52%, #6570da 98.57%);
        "
      >
        <!--   BG IMAGE   -->
        <div class="relative w-full h-full flex justify-between">
          <!--    CONTENT    -->
          <div
            class="absolute w-full h-full flex justify-between items-center pl-20 pr-[70px]"
          >
            <div class="flex flex-col justify-center">
              <div class="text-[86px] font-bold text-white">
                Nuttasan Kotchawat
              </div>
              <div class="text-[34px] text-white">Front-End Developer</div>
            </div>
            <div class="text-[22px] text-white font-light">Freud (ฟรอยด์)</div>
          </div>
          <!--   END CONTENT   -->
        </div>
        <!--   END BG IMAGE   -->
      </div>
      <!--   SOCIAL CONTACT   -->
      <div class="flex justify-center gap-x-14 mt-8">
        <template v-for="(social, i) in socialContact" :key="i">
          <div
            class="flex items-center gap-x-2 hover:cursor-pointer"
            @click="go(social.link)"
          >
            <div class="flex items-center">
              <font-awesome-icon
                :icon="[`${social.iconType}`, `${social.iconName}`]"
                :style="{ color: `${social.iconColor}` }"
                size="lg"
              />
            </div>
            <div class="text-xl font-medium">
              {{ social.title }}
            </div>
          </div>
        </template>
      </div>
      <!--   END SOCIAL CONTACT   -->
    </div>
    <!-- END DESKTOP RESPONSIVE -->
    <!-- MOBILE RESPONSIVE -->
    <div class="block xl:hidden max-w-[1440px] mx-auto pt-6 px-5 pb-9">
      <!--   BG IMAGE   -->
      <div
        class="w-full flex justify-between rounded-2xl p-10"
        style="
          background: linear-gradient(83.05deg, #4148ad 39.52%, #6570da 98.57%);
        "
      >
        <!--    CONTENT    -->
        <div class="w-full h-full flex flex-col justify-center">
          <div class="flex flex-col justify-center text-center">
            <div class="text-[50px] font-bold text-white">
              Nuttasan Kotchawat
            </div>
            <div class="text-[22px] text-white font-light">Freud (ฟรอยด์)</div>
            <div class="text-[24px] text-white">Front-End Developer</div>
          </div>
        </div>
        <!--   END CONTENT   -->
      </div>
      <!--   END BG IMAGE   -->
    </div>
    <!--   SOCIAL CONTACT   -->
    <div class="flex flex-col px-5 pb-5">
      <template v-for="(social, i) in socialContact" :key="i">
        <div
          class="flex items-center gap-x-2 hover:cursor-pointer"
          @click="go(social.link)"
        >
          <div class="flex items-center">
            <font-awesome-icon
              :icon="[`${social.iconType}`, `${social.iconName}`]"
              :style="{ color: `${social.iconColor}` }"
              size="lg"
            />
          </div>
          <div class="text-xl font-semibold">
            {{ social.title }}
          </div>
        </div>
      </template>
      <!--   END SOCIAL CONTACT   -->
    </div>
    <!-- END MOBILE RESPONSIVE -->
  </div>
</template>

<script setup>
function go(url) {
  window.open(url);
}

const socialContact = [
  {
    iconType: "fab",
    iconName: "facebook",
    iconColor: "#1778F2",
    title: "Nuttasan Kotchawat",
    link: null,
  },
  {
    iconType: "fab",
    iconName: "line",
    iconColor: "#00B900",
    title: "froynts",
    link: null,
  },
  {
    iconType: "fas",
    iconName: "envelope",
    iconColor: "#000",
    title: "nuttasan.kotchawat@gmail.com",
    link: "mailto: nuttasan.kotchawat@gmail.com",
  },
  {
    iconType: "fas",
    iconName: "phone",
    iconColor: "#000",
    title: "092-423-5999",
    link: "tel:0924235999",
  },
];
</script>
