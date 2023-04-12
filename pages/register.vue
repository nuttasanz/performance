<template>
  <div class="w-full bg-[#F7F7FD]">
    <div class="max-w-[440px] mx-auto py-[60px] pb-[90px]">
      <div
        class="text-center text-[32px] text-[#5762C5] leading-[44.8px] font-bold font-bold mb-5"
      >
        เข้าสู่ระบบ
      </div>
      <div class="bg-white rounded-[10px] p-6">
        <label class="text-[#24285F] text-[20px] leading-[28px] font-bold"
          >อีเมล/เบอร์โทรศัพท์</label
        >
        <input
          class="w-full border-b border-[#AEAFC5] mt-2"
          placeholder="กรอกอีเมล หรือเบอร์โทรศัพท์"
        />
        <div class="mt-6">
          <label class="text-[#24285F] text-[20px] leading-[28px] font-bold"
            >รหัสผ่าน</label
          >
          <input
            class="w-full border-b border-[#AEAFC5] mt-2"
            placeholder="กรอกรหัสผ่าน"
          />
        </div>
        <div class="text-right text-sm text-[#5762C5] my-4 mb-6">
          ลืมรหัสผ่าน?
        </div>
        <div class="px-8">
          <utils-button-style
            class="w-full items-center justify-center text-white font-bold py-[17px]"
            text="เข้าสู่ระบบ"
          >
          </utils-button-style>
          <div class="text-center text-sm text-[#A2A2A8] my-[10px]">หรือ</div>
          <utils-button-style
            class="w-full items-center justify-center text-white font-bold py-[17px]"
            text="เข้าสู่ระบบด้วย LINE"
            button-color="#06C755"
            icon-type="fab"
            icon-name="line"
          >
          </utils-button-style>
        </div>
      </div>
    </div>
  </div>
</template>
