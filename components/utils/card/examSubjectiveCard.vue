<template>
  <div class="bg-white rounded-[16px] py-10 px-8">
    <div
      :for="answer"
      class="text-[20px] text-[#0E1F1D] leading-[26px] font-bold mb-6"
    >
      {{ title }}
    </div>
    <div v-if="url">
      <div class="flex flex-col items-center gap-y-6">
        <img :src="url" class="w-[251px] h-[212px]" />
        <Field
          :id="answer"
          as="textarea"
          :name="answer"
          type="text"
          placeholder="ใส่คำตอบของคุณ"
          maxlength="300"
          rules="required"
          class="h-11 py-[10px] px-[14px] overflow-hidden"
        ></Field>
      </div>
      <!--      <ErrorMessage :name="answer"></ErrorMessage>-->
    </div>
    <div v-else-if="upload">
      <div class="w-full">
        <div class="flex flex-col gap-y-5">
          <div
            class="relative w-full h-full border border-[#EAECF0] rounded-[12px] py-4 px-6"
          >
            <div
              class="w-full h-full flex flex-col items-center justify-center"
            >
              <div>
                <img src="/images/icons/cloudUpload.png" class="w-5 h-[18px]" />
              </div>
              <div class="text-sm text-[#24285F] font-semibold mt-4 mb-1">
                คลิกเพื่ออัพโหลด
                <span class="text-[#475467] font-normal"
                  >หรือ ลากไฟล์เพื่ออัพโหลด</span
                >
              </div>
              <div class="text-[12px] text-[#A2A2A8]">
                PNG, JPG หรือ PDF (ขนาดสูงสุด 25MB)
              </div>
            </div>
            <Field
              :id="answer"
              :name="answer"
              type="file"
              multiple
              accept=".jpeg, .jpg, .png, .pdf"
              rules="required"
              class="w-full h-full absolute z-40 opacity-0 top-0 left-0 cursor-pointer"
              @change="uploadFile"
            ></Field>
          </div>

          <div
            v-if="fileName"
            class="border border-[#5762C5] rounded-[16px] p-4"
          >
            <div class="flex justify-between">
              <div class="text-sm text-[#344054] font-medium">
                {{ fileName }}
              </div>
              <div @click="deleteInput">
                <img src="/images/icons/trash.png" class="w-5 h-5" />
              </div>
            </div>
            <div class="text-sm text-[#475467]">
              {{ fileSize }}
            </div>

            <div class="flex items-center gap-x-3">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full w-100%"></div>
              </div>
              <div class="text-sm text-[#344054] font-medium">100%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Field
        :id="answer"
        as="textarea"
        :name="answer"
        type="text"
        placeholder="ใส่คำตอบของคุณ"
        maxlength="300"
        rules="required"
      ></Field>
      <!--      <ErrorMessage :name="answer"></ErrorMessage>-->
      <div class="text-sm text-[#979789]">จำกัด 300 ตัวอักษร</div>
    </div>
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: {
    Field,
    // ErrorMessage
  },
  props: {
    answer: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    upload: Boolean,
  },
  data() {
    return {
      fileName: null,
      fileSize: "",
    };
  },

  methods: {
    uploadFile(e) {
      this.fileName = e.target.files[0].name;
      this.fileSize = (e.target.files[0].size / 1000000).toFixed(2) + " MB";
    },
    deleteInput() {
      this.fileName = null;
      this.fileSize = "";
    },
  },
};
</script>
