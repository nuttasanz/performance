<template>
  <div class="w-full">
    <ValidationForm @submit="onSubmit">
      <div class="text-white bg-[#5762C5] rounded-[16px] py-6 px-8 mb-6">
        <div class="text-base mb-2">แบบทดสอบ</div>
        <div class="text-[24px] leading-[31.2px] font-medium">
          Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ
          สร้างรายได้หลักล้าน
        </div>
      </div>

      <div class="flex flex-col gap-y-4">
        <div
          class="bg-white rounded-[16px] py-6 px-8 border-t-[8px] border-t-[#5762C5] shadow-[#0000000F]"
        >
          <div class="text-[20px] leading-[26px] text-[#24285F] font-bold">
            แบบข้อเขียน
          </div>
        </div>

        <template
          v-for="(subjective, i) in examSubjective"
          :key="`subjective-${i}`"
        >
          <utils-card-exam-subjective-card
            :answer="`subjective-answer-${i + 1}`"
            :title="subjective.title"
            :url="subjective.url"
          ></utils-card-exam-subjective-card>
        </template>

        <div
          class="bg-white rounded-[16px] py-6 px-8 border-t-[8px] border-t-[#5762C5] shadow-[#0000000F]"
        >
          <div class="text-[20px] leading-[26px] text-[#24285F] font-bold">
            แบบเลือกตอบ
          </div>
        </div>

        <template
          v-for="(objective, i) in examObjective"
          :key="`objective-${i}`"
        >
          <utils-card-exam-objective-card
            :title="objective.title"
            :choices="objective.choices"
            :multi-choices="objective.multiChoices"
          ></utils-card-exam-objective-card>
        </template>
      </div>
      <div class="flex justify-between items-center mt-[50px]">
        <utils-button-style
          class="max-w-[261px] text-white h-[52px] justify-center"
          text="ส่งคำตอบ"
          text-color="bg-white"
        ></utils-button-style>
        <button type="reset" class="text-[#5762C5] cursor-pointer">
          ล้างคำตอบทั้งหมด
        </button>
      </div>
    </ValidationForm>
  </div>
</template>

<script>
import { Form as ValidationForm } from "vee-validate";

export default {
  components: { ValidationForm },
  props: {
    image: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      examSubjective: [
        {
          title: "1. หาฤกษ์ออกรถที่ดี คนละ 1 ฤกษ์ วันอะไร กี่โมง พร้อมเหตุผล?",
          url: "",
        },
        {
          title: "2. ขับรถไปต่างจังหวัดไกล วันเสาร์ ออกกี่โมงปลอดภัย?",
          url: "",
        },
        {
          title: "3. คนที่แอบชอบคิดอย่างไรกับเรา วันจันทร์ 21.58 น.?",
          url: "/images/example/moon-night-yarm3.png",
        },
      ],
      examObjective: [
        {
          title: "4. ตำแหน่งไหนที่ทำนายเรื่องเพื่อน คนสนิท และการใช้มือ?",
          choices: ["ตำแหน่งยาม", "ตำแหน่งวัน", "ตำแหน่งเดือน", "ตำแหน่งปี"],
        },
        {
          title: "5. สีน้ำเงิน ฟ้า ดำ ขาว เงิน ทอง เป็นสีของธาตุอะไรบ้าง",
          choices: ["ธาตุดิน", "ธาตุน้ำ", "ธาตุทอง", "ธาตุไม้", "ธาตุไฟ"],
          multiChoices: true,
        },
      ],
    };
  },
  methods: {
    onSubmit(values) {
      alert(values);
    },
  },
};
</script>
