<template>
  <div class="w-full bg-[#F7F7FD]">
    <!--  VDO COURSE  -->
    <div class="max-w-[1440px] mx-auto pt-6 px-20 pb-[54px]">
      <!--   VDO HEADER   -->
      <div class="flex justify-between mb-[34px]">
        <div class="flex items-center gap-x-2">
          <div>
            <font-awesome-icon
              :icon="['fas', 'chevron-left']"
              class="w-[18px] h-[18px]"
            />
          </div>
          <div class="text-base font-semibold text-[#24285F]">
            Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ
            สร้างรายได้หลักล้าน
          </div>
        </div>
        <div class="flex gap-x-2">
          <button
            v-if="quiz && !exam"
            class="border border-[#5762C533] rounded-full text-[#5762C5] py-3 px-6 hover:bg-[#5762C5] hover:text-white"
            @click="openExample"
          >
            <div class="flex items-center gap-x-2">
              <div>
                <font-awesome-icon
                  :icon="['far', 'square-check']"
                  class="w-4 h-4"
                />
              </div>
              <div>ทำแบบทดสอบ</div>
            </div>
          </button>
          <button
            class="w-fit border border-[#5762C533] rounded-full text-[#5762C5] py-3 px-6 hover:bg-[#5762C5] hover:text-white"
            @click="closeExample"
          >
            <div class="flex items-center gap-x-2">
              <div>
                <font-awesome-icon
                  :icon="['far', 'arrow-right-from-bracket']"
                  class="w-4 h-4"
                />
              </div>
              <div>ออกจากการเรียน</div>
            </div>
          </button>
        </div>
      </div>
      <!--   END VDO HEADER   -->
      <!--   VDO CONTENT   -->
      <div v-if="!exam" class="relative">
        <video
          id="course-video"
          class="w-full h-full rounded-[32px] object-cover"
          controls
        >
          <source src="/images/video/videotest.mp4" type="video/mp4" />
        </video>

        <div
          v-if="quiz"
          class="absolute bg-[#000]/[0.2] top-[10%] w-full h-[80%] flex flex-col items-center justify-center"
        >
          <div class="text-white text-[58px] leading-[81.2px] font-bold">
            ยินดีด้วย!
          </div>
          <div class="text-xl text-white mt-3 mb-[30px]">
            คุณได้เรียนหลักสูตรนี้เสร็จสิ้นแล้ว กรุณทำแบบทดสอบหลังเรียน
          </div>
          <button
            class="border border-[#5762C533] rounded-full text-[#5762C5] bg-white py-4 px-6 hover:bg-[#5762C5] hover:text-white"
            @click="openExample"
          >
            <div class="flex items-center gap-x-2">
              <div>
                <font-awesome-icon
                  :icon="['far', 'square-check']"
                  class="w-4 h-4"
                />
              </div>
              <div>ทำแบบทดสอบหลังเรียน</div>
            </div>
          </button>
        </div>
      </div>
      <!--   END VDO CONTENT   -->
      <!--   EXAMPLE CONTENT   -->
      <div v-else>
        <exam-form></exam-form>
      </div>
      <!--   END EXAMPLE CONTENT   -->
    </div>
    <!--  END VDO COURSE  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      exam: false,
      quiz: false,
    };
  },
  mounted() {
    this.showQuiz();
  },
  methods: {
    showQuiz() {
      document.getElementById("course-video").addEventListener("ended", () => {
        this.quiz = true;
      });
    },
    openExample() {
      this.exam = true;
    },
    closeExample() {
      this.exam = false;
    },
  },
};
</script>
