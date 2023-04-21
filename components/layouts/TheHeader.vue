<template>
  <div class="w-full relative top-0">
    <div class="flex flex-col">
      <div class="w-full bg-[#24285F]">
        <div
          class="flex justify-end text-white gap-x-9 max-w-[1440px] mx-auto py-[5px] px-20"
        >
          <div
            class="flex items-center cursor-pointer"
            @click="go('tel:0882441915')"
          >
            <div class="w-[14px]">
              <font-awesome-icon
                :icon="['fas', 'phone']"
                style="color: #ffffff"
              />
            </div>
            <div class="text-sm ml-[9px]">088-244-1915</div>
          </div>

          <div class="flex justify-center items-center gap-x-4">
            <div
              class="w-4 h-4 flex items-center cursor-pointer"
              @click="go('https://www.facebook.com/zernhoroacademy')"
            >
              <img src="/images/brandLogo/facebookIcon.png" />
            </div>
            <div
              class="w-4 h-4 flex items-center cursor-pointer"
              @click="
                go(
                  'https://line.me/R/ti/p/@aj_zern?from=page&liff.referrer=http%3A%2F%2Flocalhost%3A3001%2F&accountId=aj_zern'
                )
              "
            >
              <img src="/images/brandLogo/lineIcon.png" />
            </div>
            <div
              class="w-4 h-4 flex items-center cursor-pointer"
              @click="go('https://www.youtube.com/@aj_zern')"
            >
              <img src="/images/brandLogo/youtubeIcon.png" />
            </div>
            <div
              class="w-4 h-4 flex items-center cursor-pointer"
              @click="
                go('https://www.tiktok.com/@horoacademy?_t=8bfrFDmItCj&_r=1')
              "
            >
              <img src="/images/brandLogo/tiktokIcon.png" />
            </div>
          </div>
        </div>
      </div>

      <!-- HEADER MENU -->
      <div class="w-full" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04)">
        <div class="max-w-[1440px] mx-auto py-[10px] px-20">
          <div class="flex items-center justify-between">
            <nuxt-link to="/">
              <div class="flex gap-x-3">
                <div class="max-w-[60px]">
                  <img src="/images/brandLogo/HeaderHoroLogo.png" />
                </div>
                <div class="max-w-[180px] flex items-center">
                  <img src="/images/brandLogo/HeaderHoroLogoText.png" />
                </div>
              </div>
            </nuxt-link>

            <div class="flex gap-x-10">
              <template v-for="(menu, i) in headerMenus" :key="i">
                <div class="flex items-center gap-x-[7px]">
                  <div class="text-base text-[#24285F]">{{ menu.title }}</div>
                  <div v-if="i < 3 && i % 2 === 0" class="w-[18px] h-[18px]">
                    <font-awesome-icon
                      :icon="['far', 'chevron-down']"
                      style="color: #28364d"
                    />
                  </div>
                </div>
              </template>
              <nuxt-link to="/register">
                <button
                  class="w-fit flex items-center gap-x-2 text-base text-white leading-[18px] bg-[#5762C5] rounded-full py-3 px-6"
                >
                  <div class="w-4 h-4">
                    <font-awesome-icon :icon="['fas', 'user']" size="sm" />
                  </div>
                  <div>เข้าสู่ระบบ</div>
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- END HEADER MENU -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerMenus: [
        {
          title: "หลักสูตร",
          arrow: "",
        },
        {
          title: "ไพ่ยิปซี",
          arrow: "",
        },
        {
          title: "เกร็ดความรู้",
          arrow: "",
        },
        {
          title: "ฮวงจุ้ย",
          arrow: "",
        },
        {
          title: "ประวัติอาจารย์เซิน",
          arrow: "",
        },
      ],
    };
  },
  methods: {
    go(url) {
      window.open(url);
    },
  },
};
</script>
