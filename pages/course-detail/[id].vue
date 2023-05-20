<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  data() {
    return {
      route: useRoute().params.id,
      whoseCourse: [
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      ],
      whatLearn: [
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail1",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail2",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail3",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail4",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail5",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail6",
        },
      ],
    };
  },
});
</script>
<template>
  <div class="w-full bg-[#F7F7FD]">
    <div
      class="max-w-[1440px] mx-auto h-full p-20"
      style="
        background: linear-gradient(83.05deg, #4148ad 39.52%, #6570da 98.57%);
      "
    >
      <div class="flex gap-x-12">
        <div class="w-full max-h-[320px]">
          <img
            src="\images\recommendCourse\course1.jpg"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col">
          <div
            class="w-fit bg-[#6F93DD] rounded-full py-[10px] px-[14px] text-white text-[16px] leading-[12px]"
          >
            Online Course
          </div>
          <div
            class="text-[34px] leading-[44.8px] font-medium text-white mt-1 mb-3"
          >
            {{ route }} This is a name of slug
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            gravida a risus ac viverra. Praesent sit amet feugiat tortor. Nam
            risus augue, accumsan vel libero sit amet,
          </div>
          <div class="flex justify-between">
            <div class="flex items-center text-[#D0D0D1]">
              <div class="w-5 h-5 flex items-center justify-center">
                <font-awesome-icon :icon="['fas', 'clock']" />
              </div>
              <div class="text-[22px] leading-[28px] ml-2">Duration</div>
            </div>
          </div>
          <utils-button-line
            class="w-[242px] h-[58px] text-lg font-bold py-[17px] px-[37px] mt-[50px]"
            text="Get Infomation"
            icon
          >
          </utils-button-line>
        </div>
      </div>
    </div>
    <!--  CONTENT  -->
    <div class="max-w-[1440px] mx-auto pt-8 px-20 pb-[170px]">
      <div class="w-full flex gap-x-6 mb-[50px]">
        <div
          class="max-w-[734px] flex flex-col bg-white rounded-[24px] pt-8 px-8 pb-[85px]"
        >
          <!--    COURSE VIDEO      -->
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/tVIXY14aJms"
            title="NewJeans (뉴진스) &#39;Hurt&#39; Official MV"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <!--    END COURSE VIDEO      -->
          <!--    HEADER CONTENT    -->
          <div
            class="text-xl text-[#24285F] leading-[25.2px] font-medium mt-8 mb-[50px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            consectetur odio vel egestas semper. Praesent tincidunt laoreet
            libero in placerat. Aliquam accumsan aliquam lorem vel malesuada.
            Cras volutpat placerat nunc, eu rutrum erat ullamcorper id. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Vivamus mauris ex, molestie nec ante pharetra,
            rhoncus lobortis lorem.
          </div>
          <!---->
          <!--     RECOMMEND CONTENT     -->
          <div
            class="text-[26px] leading-[33.8px] font-bold text-[#0E1F1D] mb-[25px]"
          >
            คอร์สนี้เหมาะสำหรับใคร?
          </div>
          <div class="flex flex-col gap-y-[10px]">
            <template v-for="(item, i) in whoseCourse" :key="i">
              <div class="flex gap-x-4">
                <div class="w-6 h-6">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                    style="color: #5762c5"
                    class="w-full h-full"
                  />
                </div>
                <div class="text-lg font-medium">
                  {{ item.title }}
                </div>
              </div>
            </template>
          </div>
          <!---->
          <!--     WHAT WILL LEARN     -->
          <div
            class="text-[26px] leading-[33.8px] font-bold text-[#0E1F1D] mt-[50px] mb-[25px]"
          >
            คอร์สนี้คุณจะได้เรียนรู้อะไร
          </div>
          <div class="flex flex-col gap-y-4">
            <template v-for="(item, index) in whatLearn" :key="index">
              <utils-dropbox-drop-box-session
                :title="item.title"
                :desc="item.desc"
              ></utils-dropbox-drop-box-session>
            </template>
          </div>
        </div>
        <!--    Master Profile Card    -->
        <div class="w-full max-w-[458px] flex flex-col gap-y-4">
          <UtilsCardInstructorCard
            profile-img="\images\temp\frreud.jpg"
            title="Nuttasan Kotchawat"
            desc="Front-End Developer"
          />

          <!------------->
          <!------ Detail ------>
          <UtilsCardCourseDescription />
          <!---- End Detail ---->
        </div>
      </div>
    </div>
  </div>
</template>
