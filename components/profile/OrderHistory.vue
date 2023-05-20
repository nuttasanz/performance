<template>
  <div class="bg-white w-full h-full rounded-[24px] p-5 pb-10">
    <!-- HEADER TITLE -->
    <div class="border-b border-[#AEAFC5]">
      <div class="text-[32px] font-bold leading-[44.8px] text-[#24285F]">
        Order History
      </div>
    </div>
    <!-- END HEADER TITLE -->
    <div class="text-xl text-[#24285F] font-medium my-5">
      {{ orderDetail.length + " Order" }}
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
                Paid
              </div>
            </div>

            <div class="w-full flex gap-x-5 p-5">
              <div class="w-[600px] h-[300px]">
                <img
                  :src="order.orderCover"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="w-full flex flex-col">
                <div
                  class="text-[22px] text-[#24285F] leading-[30.8px] font-medium mb-6"
                >
                  {{ order.orderTitle }}
                </div>
                <div class="flex gap-x-[92px] mb-4">
                  <div>
                    <div class="text-[18px] leading-[17.82px] text-[#A2A2A8]">
                      Order Date
                    </div>
                    <div class="text-xl font-medium text-[#050505]">
                      {{ order.orderPurchase }}
                    </div>
                  </div>

                  <div>
                    <div class="text-[18px] leading-[17.82px] text-[#A2A2A8]">
                      Payment Method
                    </div>
                    <div class="text-xl font-medium text-[#050505]">
                      {{ order.orderPayment }}
                    </div>
                  </div>
                </div>

                <div>
                  <div class="text-[18px] leading-[17.82px] text-[#A2A2A8]">
                    Paid Date
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
              <div class="text-xl text-[#24285F] font-medium">Total</div>
              <div class="text-xl text-[#24285F] font-medium">
                <span class="text-[24px] leading-[33.6px]">{{
                  order.orderAmountCost
                }}</span>
                $
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
          orderNO: "Order No.: 220500643",
          orderCover: "/images/recommendCourse/course1.jpg",
          orderTitle: "Course1",
          orderPurchase: "19/05/2023 13:16",
          orderPayment: "Credit/Debit Cards",
          orderPayDate: "19/05/2023 13:18",
          orderAmountCost: "2,906.17",
        },
        {
          orderNO: "Order No.: 220500643",
          orderCover: "/images/recommendCourse/course1.jpg",
          orderTitle: "Course2",
          orderPurchase: "19/05/2023 13:16",
          orderPayment: "Credit/Debit Cards",
          orderPayDate: "19/05/2023 13:18",
          orderAmountCost: "2,906.17",
        },
      ],
    };
  },
};
</script>
