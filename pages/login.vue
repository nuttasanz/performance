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
          >อีเมล/เบอร์โทรศัพท์
          <input
            class="w-full border-b border-[#AEAFC5] text-[14px] leading-[19.6px] font-normal mt-2"
            placeholder="กรอกอีเมล หรือเบอร์โทรศัพท์"
          />
        </label>
        <div class="mt-6">
          <label class="text-[#24285F] text-[20px] leading-[28px] font-bold"
            >รหัสผ่าน
            <input
              type="password"
              class="w-full border-b border-[#AEAFC5] text-[14px] leading-[19.6px] font-normal mt-2"
              placeholder="กรอกรหัสผ่าน"
            />
          </label>
        </div>
        <div class="text-right text-sm text-[#5762C5] my-4 mb-6">
          ลืมรหัสผ่าน?
        </div>
        <div class="px-8">
          <utils-button-style
            class="w-full max-h-[52px] text-white font-bold py-[17px]"
            text="เข้าสู่ระบบ"
          >
          </utils-button-style>
          <div class="text-center text-sm text-[#A2A2A8] my-[10px]">หรือ</div>
          <utils-button-line
            class="w-full max-h-[58px] text-white font-bold py-5"
            text="เข้าสู่ระบด้วย LINE"
            icon
          ></utils-button-line>
        </div>
      </div>
    </div>
  </div>
</template>
