<template>
  <div class="w-full bg-[#F7F7FD]">
    <div
      style="
        background: linear-gradient(83.05deg, #4148ad 39.52%, #6570da 98.57%);
      "
    >
      <div class="max-w-[1440px] mx-auto flex gap-x-12 py-[52px] px-20">
        <div class="max-w-[484px]">
          <img
            src="/images/HeroBanner/courseDetailBanner.png"
            class="object-cover"
          />
        </div>
        <div class="flex flex-col">
          <div
            class="w-fit bg-[#6F93DD] rounded-full py-[10px] px-[14px] text-white text-[16px] leading-[12px]"
          >
            คอร์สออนไลน์
          </div>
          <div
            class="text-[34px] leading-[44.8px] font-medium text-white mt-1 mb-3"
          >
            Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ
            สร้างรายได้หลักล้าน
          </div>
          <div class="flex justify-between">
            <div class="flex items-center text-[#D0D0D1]">
              <div class="w-5 h-5 flex items-center justify-center">
                <font-awesome-icon :icon="['fal', 'clock']" />
              </div>
              <div class="text-[22px] leading-[28px] ml-[14.5px]">
                4-5 ชั่วโมง
              </div>
            </div>
          </div>
          <utils-button-line
            class="w-[242px] h-[58px] text-lg font-bold py-[17px] px-[37px] mt-[50px]"
            text="สนใจเรียนคอร์สนี้"
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
            height="414"
            src="https://www.youtube.com/embed/qJ5JCX8o7sE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <!--    END COURSE VIDEO      -->
          <!--    HEADER CONTENT    -->
          <div
            class="text-xl text-[#24285F] leading-[25.2px] font-medium mt-8 mb-[50px] font-noto"
          >
            Online Tarot Course 1/63 คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ
            สร้างรายได้หลักล้าน สอนไพ่ยิปซีที่แก่นแท้ ไม่เน้นท่องจำ ทำนายได้เร็ว
            หลักสูตรเข้มข้น กับ อาจารย์ เซิน ไม่ว่าจะเรียนไปเพื่อดูเองทั่วไป
            หรือเพื่อเป็นนักพยากรณ์ เน้นการสอนแบบคุณภาพ เข้าใจจริง
            เน้นการทำนายต่อยอดเองได้
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
                <div class="text-lg font-medium font-noto">
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
            profile-img="/images/courseDetail/profile-image.png"
            title="อาจารย์เซิน"
            desc="เจ้าของสถาบัน Horo Academy"
          />

          <!------------->
          <!------ Detail ------>
          <UtilsCardCourseDescription />
          <!---- End Detail ---->
        </div>
      </div>
      <!--      -->
      <UtilsCardCourseCardSession
        title="หลักสูตรที่คล้ายกัน"
        :course="courseCard"
      />
      <!--      -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropBox: false,
      courseCard: [
        {
          image: "/images/recommendCourse/course1.png",
          tag: "คอร์สออนไลน์",
          title:
            "Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ สร้างรายได้หลักล้าน",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
        {
          image: "/images/recommendCourse/course2.png",
          tag: "คอร์สออนไลน์",
          title:
            "คอร์สเลขศาสตร์ การพยากรณ์เบอร์โทร เลขที่บ้าน และตัวเลขทุกชนิด",
          time: "4-5 ชั่วโมง",
          cost: "฿8,900",
        },
        {
          image: "/images/recommendCourse/course3.png",
          tag: "คอร์สออนไลน์",
          title: "คอร์สวิชาโหรทายหนู แม่นยำยิ่งกว่าตาเห็น",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
        {
          image: "/images/recommendCourse/course4.png",
          tag: "คอร์สออนไลน์",
          title: "คอร์สชัยภูมิฮวงจุ้ย 1 ทำเลฮวงจุ้ยมั่งคั่ง",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
      ],
      whoseCourse: [
        {
          title:
            "ท่านที่ต้องการมีอาชีพหลัก หรือเสริม ทำรายได้เร็ว ไม่เสียงานประจำ",
        },
        {
          title:
            "เรียนเพื่อประกอบควบคู่กับธุรกิจ เช่นร้านกาแฟ ร้านทำผม ที่ปรึกษาชีวิต การเงิน เป็นต้น",
        },
        {
          title:
            "ท่านที่กำลังมองหาอาจารย์ที่รู้จริง ไม่เน้นความงมงาย ทันสมัย ไม่น่ากลัว",
        },
        { title: "เรียนมาหลายที่ก็ยังทายไม่ได้สักที" },
        { title: "เรียนมาหลายที่ก็ยังทายไม่ได้สักที" },
        { title: "อยู่ต่างประเทศ ต่างจังหวัด ไม่รู้จะเรียนที่ไหน" },
        { title: "ไม่สะดวกเรียนต่อเนื่องยาวๆ" },
        { title: "ไม่สะดวกเดินทางไปเรียน" },
      ],
      whatLearn: [
        {
          title: "สอนการเป็นนักพยากรณ์มืออาชีพต้องรู้ต้องระวังอะไรบ้าง",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร1",
        },
        {
          title: "การเลือกไพ่ เลือกผ้า ทุกเรื่องไพ่และผ้า จบที่นี่",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร2",
        },
        {
          title: "ความหมายของไพ่ยิปซี ละเอียดที่สุดเท่าที่เคยมีมา",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร3",
        },
        {
          title:
            "รูปแบบการพยากรณ์อื่น ที่นิยม อาวุธที่หลากหลายใช้ในสถานการณ์ต่างๆกัน",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร4",
        },
        {
          title: "เรื่องการงาน จบทุกคำถาม ในการเปิดไพ่ครั้งเดียว",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร5",
        },
        {
          title: "วิธีมัดใจลูกค้าให้อยู่หมัด จนต้องกลับมาดูกับเราซ้ำแล้วซ้ำอีก",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร6",
        },
      ],
    };
  },
};
</script>
