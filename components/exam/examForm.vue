<template>
  <div class="w-full max-w-[798px] mx-auto mt-[9px]">
    <ValidationForm @submit="onSubmit">
      <div class="text-white bg-[#5762C5] rounded-[16px] py-6 px-8 mb-6">
        <div class="text-lg mb-2">แบบทดสอบ</div>
        <div class="text-[26px] leading-[31.2px] font-medium">
          Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ
          สร้างรายได้หลักล้าน
        </div>
      </div>

      <div class="flex flex-col gap-y-4">
        <div
          class="bg-white rounded-[16px] py-6 px-8 border-t-[8px] border-t-[#5762C5] shadow-[#0000000F]"
        >
          <div class="text-[22px] leading-[26px] text-[#24285F] font-bold">
            แบบข้อเขียน
          </div>
        </div>

        <template
          v-for="(subjective, i) in examSubjective"
          :key="`subjective-${i}`"
        >
          <UtilsCardExamSubjectiveCard
            :answer="`subjective-answer-${i + 1}`"
            :title="subjective.title"
            :url="subjective.url"
            :upload="subjective.upload"
          />
        </template>

        <div
          class="bg-white rounded-[16px] py-6 px-8 border-t-[8px] border-t-[#5762C5] shadow-[#0000000F]"
        >
          <div class="text-[22px] leading-[26px] text-[#24285F] font-bold">
            แบบเลือกตอบ
          </div>
        </div>

        <template
          v-for="(objective, i) in examObjective"
          :key="`objective-${i}`"
        >
          <UtilsCardExamObjectiveCard
            :title="objective.title"
            :choices="objective.choices"
            :multi-choices="objective.multiChoices"
          />
        </template>
      </div>
      <div class="flex justify-between items-center mt-[50px]">
        <utils-button-form
          class="max-w-[261px] h-[52px] text-lg"
          text="ส่งคำตอบ"
          text-color="bg-white"
        ></utils-button-form>
        <button type="reset" class="text-lg text-[#5762C5] cursor-pointer">
          ล้างคำตอบทั้งหมด
        </button>
      </div>
    </ValidationForm>
  </div>
</template>

<!--<script setup>-->
<!--import { defineRule, Form as ValidationForm } from "vee-validate";-->

<!--defineRule("required", (value) => {-->
<!--  if (!value || !value.length) {-->
<!--    return "This field is required";-->
<!--  }-->
<!--  return true;-->
<!--});-->

<!--function onSubmit(values) {-->
<!--  alert(JSON.stringify(values));-->
<!--}-->

<!--defineProps({-->
<!--  image: {-->
<!--    type: String,-->
<!--    default: null,-->
<!--  },-->
<!--});-->

<!--const examSubjective = [-->
<!--  {-->
<!--    title: "1. หาฤกษ์ออกรถที่ดี คนละ 1 ฤกษ์ วันอะไร กี่โมง พร้อมเหตุผล?",-->
<!--    url: "",-->
<!--  },-->
<!--  {-->
<!--    title: "2. ขับรถไปต่างจังหวัดไกล วันเสาร์ ออกกี่โมงปลอดภัย?",-->
<!--    url: "",-->
<!--  },-->
<!--  {-->
<!--    title: "3. คนที่แอบชอบคิดอย่างไรกับเรา วันจันทร์ 21.58 น.?",-->
<!--    url: "/images/example/moon-night-yarm3.png",-->
<!--  },-->
<!--];-->

<!--const examObjective = [-->
<!--  {-->
<!--    title: "4. ตำแหน่งไหนที่ทำนายเรื่องเพื่อน คนสนิท และการใช้มือ?",-->
<!--    choices: ["ตำแหน่งยาม", "ตำแหน่งวัน", "ตำแหน่งเดือน", "ตำแหน่งปี"],-->
<!--  },-->
<!--  {-->
<!--    title: "5. สีน้ำเงิน ฟ้า ดำ ขาว เงิน ทอง เป็นสีของธาตุอะไรบ้าง",-->
<!--    choices: ["ธาตุดิน", "ธาตุน้ำ", "ธาตุทอง", "ธาตุไม้", "ธาตุไฟ"],-->
<!--    multiChoices: true,-->
<!--  },-->
<!--];-->
<!--</script>-->
<script>
import { defineRule, Form as ValidationForm } from "vee-validate";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});

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
          upload: true,
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
      alert(JSON.stringify(values));
    },
  },
};
</script>
