<template>
  <div class="w-full bg-[#F7F7FD]">
    <div class="max-w-[440px] mx-auto py-[60px] pb-[90px]">
      <div
        class="text-center text-[34px] text-[#5762C5] leading-[44.8px] font-bold font-bold mb-5"
      >
        เข้าสู่ระบบ
      </div>
      <div class="bg-white rounded-[10px] p-6">
        <ValidateForm @submit="onSubmit">
          <utils-input-text-fields
            id="email-phone"
            label="อีเมล/เบอร์โทรศัพท์"
            name="email-phone"
            type="text"
            placeholder="กรอกอีเมล หรือเบอร์โทรศัพท์"
            rules="required"
          ></utils-input-text-fields>
          <div class="mt-6"></div>
          <utils-input-text-fields
            id="password"
            label="รหัสผ่าน"
            name="password"
            type="password"
            placeholder="กรอกรหัสผ่าน"
            rules="required"
          ></utils-input-text-fields>
          <div class="text-right text-base text-[#5762C5] my-4 mb-6">
            ลืมรหัสผ่าน?
          </div>
          <div class="px-8">
            <utils-button-style
              class="w-full max-h-[52px] text-lg text-white font-bold py-[17px]"
              text="เข้าสู่ระบบ"
            >
            </utils-button-style>
            <div class="text-center text-base text-[#A2A2A8] my-[10px]">
              หรือ
            </div>
            <utils-button-line
              class="w-full max-h-[58px] text-lg text-white font-bold py-5"
              text="เข้าสู่ระบด้วย LINE"
              icon
            ></utils-button-line>
          </div>
        </ValidateForm>
      </div>
    </div>
  </div>
</template>

<script>
import { Form as ValidateForm } from "vee-validate";
export default {
  components: {
    ValidateForm,
  },
  methods: {
    onSubmit(value) {
      alert(JSON.stringify(value));
    },
  },
};
</script>
