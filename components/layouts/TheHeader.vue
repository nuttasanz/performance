<template>
  <div>
    <div
      class="hidden xl:block w-full relative top-0 z-50"
      @mouseleave="closeDropDown"
    >
      <div class="flex flex-col">
        <div class="w-full h-10 bg-[#24285F]"></div>
        <!-- HEADER MENU -->
        <div class="w-full" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04)">
          <div class="max-w-[1440px] mx-auto py-[10px] px-20">
            <div class="flex items-center justify-between">
              <nuxt-link to="/">
                <div class="text-lg text-[#24285F] font-bold">
                  Logo Here Back to Home
                </div>
              </nuxt-link>
              <div class="flex gap-x-10">
                <template v-for="(menu, i) in headerMenus" :key="i">
                  <div class="flex flex-col justify-center cursor-pointer">
                    <div
                      class="flex items-center gap-x-2"
                      @mouseover="openDropDown"
                    >
                      <div
                        class="text-lg text-[#24285F]"
                        :class="
                          subMenu === `${menu.title}` && menu.arrow
                            ? 'font-bold'
                            : ''
                        "
                      >
                        {{ menu.title }}
                      </div>
                      <div v-if="menu.arrow">
                        <div class="w-4 h-4 flex items-center">
                          <font-awesome-icon
                            :icon="['fas', 'chevron-down']"
                            style="color: #28364d"
                            :class="
                              subMenu === `${menu.title}` && menu.arrow
                                ? 'rotate-[180deg]'
                                : ''
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="subMenu === `${menu.title}` && menu.arrow"
                      class="flex justify-center"
                      @mouseleave="closeDropDown"
                    >
                      <div
                        class="w-[295px] absolute z-50 bg-white border border-[#EAECF0] rounded-[12px] mt-4 p-6"
                      >
                        <template
                          v-for="(subMenus, j) in menu.dropDownMenus"
                          :key="j"
                        >
                          <div class="text-[#24285F] text-lg">
                            <nuxt-link
                              :to="subMenus.link"
                              class="hover:underline hover:font-bold"
                              @click="onChange"
                            >
                              {{ subMenus.title }}
                            </nuxt-link>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </template>
                <nuxt-link to="/login">
                  <button
                    class="w-fit flex items-center gap-x-2 text-lg text-white leading-[18px] bg-[#5762C5] rounded-full py-3 px-6"
                  >
                    <div class="w-4 h-4">
                      <font-awesome-icon :icon="['fas', 'user']" size="sm" />
                    </div>
                    <div>Login</div>
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <!-- END HEADER MENU -->
      </div>
    </div>

    <!-- MOBILE RESPONSIVE -->
    <div class="block xl:hidden w-full">
      <div class="flex flex-col">
        <div class="w-full h-10 bg-[#24285F]"></div>
        <div class="w-full">
          <div class="h-20 p-5 flex items-center justify-between">
            <nuxt-link to="/">
              <div class="text-lg text-[#24285F] font-bold">
                Logo Here Back to Home
              </div>
            </nuxt-link>
            <div>
              <font-awesome-icon :icon="['fas', 'bars']" size="xl" />
            </div>
          </div>
        </div>
      </div>
      <!-- END MOBILE RESPONSIVE -->
    </div>
  </div>
</template>

<script setup>
const headerMenus = [
  {
    title: "Performance",
    arrow: true,
    dropDownMenus: [
      {
        title: "Video Example",
        link: "/videoExample",
      },
      {
        title: "Profile Example",
        link: "/profileExample",
      },
      {
        title: "FAQs",
        link: "/faq",
      },
      {
        title: "Contact Me",
        link: "/contact",
      },
    ],
  },
  {
    title: "Title",
    arrow: "",
  },
  {
    title: "Title",
    arrow: "",
  },
  {
    title: "Title",
    arrow: "",
  },
];
</script>

<script>
export default {
  data() {
    return {
      dropDown: false,
      subMenu: null,
    };
  },
  methods: {
    openDropDown(menu) {
      this.subMenu = menu.target.innerHTML;
      this.dropDown = true;
    },
    closeDropDown() {
      this.subMenu = null;
      this.dropDown = false;
    },
    onChange() {
      this.subMenu = null;
      this.dropDown = false;
    },
    go(url) {
      window.open(url);
    },
  },
};
</script>
