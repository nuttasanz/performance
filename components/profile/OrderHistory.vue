<template>
  <div class="bg-white w-full h-full rounded-[24px] p-5 pb-10">
    <!-- HEADER TITLE -->
    <div class="border-b border-[#AEAFC5]">
      <div class="text-[32px] font-bold leading-[44.8px] text-[#24285F]">
        ประวัติการสั่งซื้อ
      </div>
    </div>
    <!-- END HEADER TITLE -->
    <div class="text-xl text-[#24285F] font-medium my-5">
      {{ orderDetail.length + " รายการ" }}
    </div>
    <div class="flex flex-col gap-y-5">
      <template v-for="(order, i) in orderDetail" :key="i">
        <div class="border border-[#AEAFC5] rounded-[18px] shadow-md">
          <div class="flex flex-col">
            <div
              class="w-full bg-gradient-to-r from-[#6CB88E]/[0.2] to-[#9DEABF]/[0.2] rounded-t-2xl flex items-center justify-between p-5"
            >
              <div class="text-xl text-[#24285F] font-medium">
                {{ order.orderNO }}
              </div>
              <div class="bg-[#6CB88E] rounded-[40px] text-white py-1 px-5">
                ชำระเงินแล้ว
              </div>
            </div>

            <div class="w-full flex gap-x-5 p-5">
              <div><img :src="order.orderCover" class="max-w-[230px]" /></div>
              <div class="w-full flex flex-col">
                <div
                  class="text-[22px] text-[#24285F] leading-[30.8px] font-medium mb-6"
                >
                  {{ order.orderTitle }}
                </div>
                <div class="flex gap-x-[92px] mb-4">
                  <div>
                    <div
                      class="font-noto text-[18px] leading-[17.82px] text-[#A2A2A8]"
                    >
                      วันที่สั่งซื้อ
                    </div>
                    <div class="text-xl font-medium text-[#050505]">
                      {{ order.orderPurchase }}
                    </div>
                  </div>

                  <div>
                    <div
                      class="font-noto text-[18px] leading-[17.82px] text-[#A2A2A8]"
                    >
                      วิธีการชำระเงิน
                    </div>
                    <div class="text-xl font-medium text-[#050505]">
                      {{ order.orderPayment }}
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    class="font-noto text-[18px] leading-[17.82px] text-[#A2A2A8]"
                  >
                    วันที่ชำระเงิน
                  </div>
                  <div class="text-xl font-medium text-[#050505]">
                    {{ order.orderPayDate }}
                  </div>
                </div>
              </div>
            </div>

            <div
              class="w-full flex items-center justify-between p-5 border-t border-t-[#AEAFC5]"
            >
              <div class="text-xl text-[#24285F] font-medium">ยอดชำระ</div>
              <div class="text-xl text-[#24285F] font-medium">
                <span class="text-[24px] leading-[33.6px]">{{
                  order.orderAmountCost
                }}</span>
                บาท
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderDetail: [
        {
          orderNO: "คำสั่งซื้อ: 220500643",
          orderCover: "/images/recommendCourse/course1.png",
          orderTitle:
            "Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์ มืออาชีพ สร้างรายได้หลักล้าน",
          orderPurchase: "19 พ.ค. 2565 13:16",
          orderPayment: "ชำระผ่านบัตรเครดิต/เดบิต",
          orderPayDate: "19 พ.ค. 2565 13:18",
          orderAmountCost: "2,906.17",
        },
        {
          orderNO: "คำสั่งซื้อ: 220500643",
          orderCover: "/images/recommendCourse/course1.png",
          orderTitle:
            "Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์ มืออาชีพ สร้างรายได้หลักล้าน",
          orderPurchase: "19 พ.ค. 2565 13:16",
          orderPayment: "ชำระผ่านบัตรเครดิต/เดบิต",
          orderPayDate: "19 พ.ค. 2565 13:18",
          orderAmountCost: "2,906.17",
        },
        {
          orderNO: "คำสั่งซื้อ: 220500643",
          orderCover: "/images/recommendCourse/course1.png",
          orderTitle:
            "Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์ มืออาชีพ สร้างรายได้หลักล้าน",
          orderPurchase: "19 พ.ค. 2565 13:16",
          orderPayment: "ชำระผ่านบัตรเครดิต/เดบิต",
          orderPayDate: "19 พ.ค. 2565 13:18",
          orderAmountCost: "2,906.17",
        },
        {
          orderNO: "คำสั่งซื้อ: 220500643",
          orderCover: "/images/recommendCourse/course1.png",
          orderTitle:
            "Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์ มืออาชีพ สร้างรายได้หลักล้าน",
          orderPurchase: "19 พ.ค. 2565 13:16",
          orderPayment: "ชำระผ่านบัตรเครดิต/เดบิต",
          orderPayDate: "19 พ.ค. 2565 13:18",
          orderAmountCost: "2,906.17",
        },
        {
          orderNO: "คำสั่งซื้อ: 220500643",
          orderCover: "/images/recommendCourse/course1.png",
          orderTitle:
            "Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์ มืออาชีพ สร้างรายได้หลักล้าน",
          orderPurchase: "19 พ.ค. 2565 13:16",
          orderPayment: "ชำระผ่านบัตรเครดิต/เดบิต",
          orderPayDate: "19 พ.ค. 2565 13:18",
          orderAmountCost: "2,906.17",
        },
      ],
    };
  },
};
</script>
