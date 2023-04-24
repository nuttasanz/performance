<template>
  <div class="w-full bg-[#F7F7FD]">
    <!--  VDO COURSE  -->
    <div class="max-w-[1440px] mx-auto pt-6 px-20 pb-[54px]">
      <!--   VDO HEADER   -->
      <div class="flex justify-between mb-[34px]">
        <div class="flex items-center gap-x-2">
          <div>
            <font-awesome-icon
              :icon="['fas', 'chevron-left']"
              class="w-[18px] h-[18px]"
            />
          </div>
          <div class="text-base font-semibold text-[#24285F]">
            Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ
            สร้างรายได้หลักล้าน
          </div>
        </div>
        <div class="flex gap-x-2">
          <button
            v-if="quiz && !exam"
            class="border border-[#5762C533] rounded-full text-[#5762C5] py-4 px-6 hover:bg-[#5762C5] hover:text-white"
            @click="openExample"
          >
            <div class="flex items-center gap-x-2">
              <div>
                <font-awesome-icon
                  :icon="['far', 'square-check']"
                  class="w-4 h-4"
                />
              </div>
              <div>ทำแบบทดสอบ</div>
            </div>
          </button>
          <button
            class="w-fit border border-[#5762C533] rounded-full text-[#5762C5] py-4 px-6 hover:bg-[#5762C5] hover:text-white"
            @click="closeExample"
          >
            <div class="flex items-center gap-x-2">
              <div>
                <font-awesome-icon
                  :icon="['far', 'arrow-right-from-bracket']"
                  class="w-4 h-4"
                />
              </div>
              <div>ออกจากการเรียน</div>
            </div>
          </button>
        </div>
      </div>
      <!--   END VDO HEADER   -->
      <!--   VDO CONTENT   -->
      <div v-if="!exam" class="relative">
        <video
          id="course-video"
          class="w-full h-full rounded-[32px] object-cover"
          controls
        >
          <source src="/images/video/videotest.mp4" type="video/mp4" />
        </video>

        <div
          v-if="quiz"
          class="absolute bg-[#000]/[0.2] top-[10%] w-full h-[80%] flex flex-col items-center justify-center"
        >
          <div class="text-white text-[58px] leading-[81.2px] font-bold">
            ยินดีด้วย!
          </div>
          <div class="text-xl text-white mt-3 mb-[30px]">
            คุณได้เรียนหลักสูตรนี้เสร็จสิ้นแล้ว กรุณทำแบบทดสอบหลังเรียน
          </div>
          <button
            class="border border-[#5762C533] rounded-full text-[#5762C5] bg-white py-4 px-6 hover:bg-[#5762C5] hover:text-white"
            @click="openExample"
          >
            <div class="flex items-center gap-x-2">
              <div>
                <font-awesome-icon
                  :icon="['far', 'square-check']"
                  class="w-4 h-4"
                />
              </div>
              <div>ทำแบบทดสอบหลังเรียน</div>
            </div>
          </button>
        </div>
      </div>
      <!--   END VDO CONTENT   -->
      <!--   EXAMPLE CONTENT   -->
      <div v-else class="w-full max-w-[798px] mx-auto mt-[9px]">
        <exam-form></exam-form>
      </div>
      <!--   END EXAMPLE CONTENT   -->
    </div>
    <!--  END VDO COURSE  -->
    <!--  FAQ  -->
    <div class="bg-gradient-to-r from-[#4148AD] to-[#6570DA]">
      <div class="max-w-[1440px] mx-auto py-24 px-20">
        <div class="flex justify-between items-center">
          <div class="w-full flex flex-col">
            <div class="text-base text-[#AAAACB] font-semibold">Support</div>
            <div
              class="text-[48px] leading-[60px] text-[#FFF] font-semibold mt-3 mb-10"
            >
              คำถามที่พบบ่อย (FAQs)
            </div>
            <div
              class="max-w-[320px] bg-white rounded-[8px] flex gap-x-2 py-3 px-[14px]"
            >
              <div class="w-5 h-5">
                <img src="/images/icons/search-lg.png" class="w-full h-full" />
              </div>
              <input class="w-full" placeholder="Search" />
            </div>
          </div>
          <div class="text-base leading-[30px] text-[#AAAACB]">
            Need something cleared up? Here are our most frequently asked
            questions.
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-[1440px] mx-auto p-20">
      <div class="text-center mb-11">
        <div class="text-[#101828] text-[36px] leading-[44px] font-semibold">
          คำถามที่พบบ่อย
        </div>
        <div class="text-[#475467] text-base leading-[30px] mt-5">
          Everything you need to know about the product and billing.
        </div>
      </div>
      <div class="w-full max-w-[768px] mx-auto flex flex-col gap-y-4">
        <template v-for="(item, index) in whatLearn" :key="index">
          <utils-dropbox-drop-box-session :title="item.title" :desc="item.desc">
          </utils-dropbox-drop-box-session>
        </template>
      </div>
    </div>
    <!--  END FAQ  -->
    <!--  CONTACT US  -->
    <contact-us></contact-us>
    <!------------------>
  </div>
</template>

<script>
import ContactUs from "~/pages/contact-us.vue";
export default {
  components: { ContactUs },
  setup() {},
  data() {
    return {
      exam: false,
      quiz: false,
      whatLearn: [
        {
          title: "เรียนผ่านอุปกรณ์อะไรได้บ้าง",
          desc: "สามารถเรียนผ่านได้ทาง computer (windows,Mac os) และ Smart phone (IOS, Android)",
        },
        {
          title: "วิธีการเข้าเรียน และการใช้งาน",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร2",
        },
        {
          title: "วิธีการสมัครเรียน และชำระค่าหลักสูตร",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร3",
        },
        {
          title: "เข้าเรียนที่ไหน และเรียนได้ตอนไหน",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร4",
        },
        {
          title: "ไม่มี internet สามารถเรียนได้หรือไม่",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร5",
        },
        {
          title: "มีเอกสารประกอบการเรียนหรือไม่",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร6",
        },
        {
          title: "ถ้าเรียนจบคอร์สแล้ว สามารถย้อนกลับมาเรียนซ้ำได้หรือไม่",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร6",
        },
        {
          title: "ระยะเวลาในการเรียนกี่ชั่วโมง",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร6",
        },
        {
          title: "ไม่มีพื้นฐานสามารถเรียนได้หรือไม่",
          desc: "วิธีการกรีดไพ่ กางไพ่ มือซ้ายหรือมือขวา สาเหตุเพราะอะไรหันหน้าทิศไหน หลังพิงอะไรถึงจะดี นำความสำเร็จ ร่ำรวยวิธีตรวจสอบ เมื่อไรพร้อมดูดวง เมื่อไรไม่พร้อมดูดวงข้อห้ามการพยากรณ์ต่างๆ ต้องรู้ค่าครูต้องมีไหมการทำบุญอย่างไร6",
        },
      ],
    };
  },
  mounted() {
    this.showQuiz();
  },
  methods: {
    showQuiz() {
      document.getElementById("course-video").addEventListener("ended", () => {
        this.quiz = true;
      });
      document.getElementById("course-video").addEventListener("seeked", () => {
        this.quiz = null;
      });
    },
    openExample() {
      this.exam = true;
    },
    closeExample() {
      this.exam = false;
    },
  },
};
</script>
