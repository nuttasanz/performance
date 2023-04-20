<template>
  <div class="w-full">
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

      <template v-for="(item, i) in examSubjective" :key="i">
        <div class="bg-white rounded-[16px] py-10 px-8">
          <div class="text-[20px] text-[#0E1F1D] leading-[26px] font-bold mb-6">
            {{ item.title }}
          </div>
          <div v-if="item.image" class="flex flex-col items-center gap-y-6">
            <img :src="item.image" class="w-[251px] h-[212px]" />
            <textarea
              class="h-11 py-[10px] px-[14px] overflow-hidden"
              placeholder="ใส่คำตอบของคุณ"
            ></textarea>
          </div>
          <div v-else>
            <textarea placeholder="ใส่คำตอบของคุณ" maxlength="300"></textarea>
            <div class="text-sm text-[#979789]">จำกัด 300 ตัวอักษร</div>
          </div>
        </div>
      </template>

      <div
        class="bg-white rounded-[16px] py-6 px-8 border-t-[8px] border-t-[#5762C5] shadow-[#0000000F]"
      >
        <div class="text-[20px] leading-[26px] text-[#24285F] font-bold">
          แบบเลือกตอบ
        </div>
      </div>
      <template v-for="(item, i) in examObjective" :key="i">
        <div class="bg-white rounded-[16px] py-10 px-8">
          <div class="text-[20px] text-[#0E1F1D] leading-[26px] font-bold mb-6">
            {{ item.title }}
            <span
              v-if="item.multiChoices"
              class="text-[20px] leading-[26px] text-[#A2A2A8] font-normal"
              >(ตอบได้มากกว่า 1 ข้อ)</span
            >
          </div>
          <template
            v-for="(choice, j) in examObjective[i].choices"
            :key="`choice-${j}`"
          >
            <utils-input-check-box-fields
              v-if="item.multiChoices"
              :label="choice"
            ></utils-input-check-box-fields>
            <utils-input-radio-fields
              v-else
              :label="choice"
            ></utils-input-radio-fields>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
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
          image: "",
        },
        {
          title: "2. ขับรถไปต่างจังหวัดไกล วันเสาร์ ออกกี่โมงปลอดภัย?",
          image: "",
        },
        {
          title: "3. คนที่แอบชอบคิดอย่างไรกับเรา วันจันทร์ 21.58 น.?",
          image: "/images/example/moon-night-yarm3.png",
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
};
</script>
