<template>
  <div class="w-full" :class="bgColor ? 'bg-[#F7F7FD]' : ''">
    <div class="max-w-[1440px] mx-auto pt-[114px] px-20 pb-20">
      <div class="relative h-[340px] bg-[#24285F] rounded-[32px]">
        <div class="w-full h-full flex justify-center items-center">
          <div class="flex flex-col items-center px-[42px]">
            <div
              class="max-w-[700px] h-full text-[26px] text-white leading-[45px] tracking-[0.01em] font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
              consequat nisi. Suspendisse consequat scelerisque ante a tempus.
              Etiam sit amet odio viverra, lacinia diam vitae, ultricies dolor.
              Proin tincidunt, metus vel porta rhoncus
            </div>
            <div class="flex w-full h-[54px] gap-x-8 mt-8">
              <UtilsButtonStyle
                class="w-full font-bold text-[#5762C5] text-xl tracking-[0.04em]"
                text="Neque porro quisquam est qui dolorem ipsum"
                button-color="bg-[#FFFFFF]"
                disabled
              />
              <UtilsButtonLine
                v-if="lineButton"
                class="w-full max-w-[320px] font-bold text-white text-xl leading-[18px]"
                text="LINE: froynts"
                icon
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  lineButton: Boolean,
  bgColor: {
    type: String,
    default: "bg-white",
  },
});
</script>
