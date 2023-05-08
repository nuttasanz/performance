<template>
  <div class="w-full bg-[#F7F7FD]">
    <!--  VDO COURSE  -->
    <div class="max-w-[1440px] mx-auto flex pb-[54px]">
      <div class="w-full flex">
        <div class="flex flex-col relative w-full max-w-[350px]">
          <!--     Learning Process     -->
          <div class="relative bg-white p-6">
            <div class="text-lg text-[#0E1F1D] mb-2">เรียนไปแล้ว 10%</div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-[#E8A43E] to-[#FFDAA1] h-2 rounded-full"
                style="width: 10%"
              ></div>
            </div>
          </div>
          <!--    End Learning Process     -->
          <div class="overflow-y-scroll flex flex-col">
            <template v-for="(item, i) in videoLesson" :key="i">
              <ExamVideoLesson
                :title="item.title"
                :time="item.time"
                @click="test(item, i)"
              />
            </template>
          </div>
          <!-- Homework Button -->
          <div class="bg-white p-6">
            <UtilsButtonStyle
              text="ทำการบ้านหลังเรียน"
              icon-type="fas"
              icon-name="square-check"
              class="w-full h-[56px] max-h-[56px] text-white text-lg font-semibold"
            />
          </div>
          <!-- Homework Button -->
        </div>

        <div class="w-full flex flex-col justify-between">
          <div>
            <!--   VDO HEADER   -->
            <div
              class="text-[26px] leading-[36.4px] font-semibold text-[#24285F] text-center my-6"
            >
              Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ
              สร้างรายได้หลักล้าน
            </div>
            <!--   END VDO HEADER   -->
            <!--   VDO CONTENT   -->
            <div v-if="!exam" class="relative">
              <video
                id="course-video"
                class="w-full h-full object-cover"
                controls
                @click="showQuiz"
              >
                <source src="/images/video/videotest.mp4" type="video/mp4" />
              </video>
              <img :src="lessonSelect.vdoLink" />

              <!-- Chang this line to video link -->
              {{ lessonSelect }}
              <div
                v-if="quiz"
                class="absolute bg-[#000]/[0.2] top-[10%] w-full h-[80%] flex flex-col items-center justify-center"
              >
                <div class="text-white text-[60px] leading-[81.2px] font-bold">
                  ยินดีด้วย!
                </div>
                <div class="text-[22px] text-white mt-3 mb-[30px]">
                  คุณได้เรียนหลักสูตรนี้เสร็จสิ้นแล้ว กรุณทำแบบทดสอบหลังเรียน
                </div>
                <button
                  class="border border-[#5762C533] rounded-full text-lg text-[#5762C5] bg-white py-4 px-6 hover:bg-[#5762C5] hover:text-white"
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
          </div>
          <!--   END EXAMPLE CONTENT   -->
          <!-- Next/Prev -->
          <div class="bg-white flex justify-between p-7">
            <div class="flex items-center gap-x-3 cursor-pointer">
              <div>
                <font-awesome-icon
                  :icon="['far', 'arrow-left']"
                  class="w-4 h-4 text-[#5762C5]"
                />
              </div>
              <div class="text-lg text-[#24285F] font-semibold">ก่อนหน้า</div>
            </div>
            <div class="flex items-center gap-x-3 cursor-pointer">
              <div class="text-lg text-[#24285F] font-semibold">ถัดไป</div>
              <div>
                <font-awesome-icon
                  :icon="['far', 'arrow-right']"
                  class="w-4 h-4 text-[#5762C5]"
                />
              </div>
            </div>
          </div>
          <!-- Next/Prev -->
        </div>
        <!--  END VDO COURSE  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      lessonSelect: [],
      exam: false,
      quiz: false,
      videoLesson: [
        {
          title: `บทที่ 1 <br>เกริ่นนำ`,
          time: "18นาที",
          vdoLink: "/images/video/videotest.mp4",
        },
        {
          title: `บทที่ 2<br>การเป็นนักพยากรณ์มืออาชีพ`,
          time: "1ขั่วโมง 8นาที",
          vdoLink: "/images/activitySeminar/activity2.png",
        },
        {
          title: `บทที่ 3<br>ทุกเรื่องเกี่ยวกับไพ่`,
          time: "54นาที",
          vdoLink: "/images/activitySeminar/activity3.png",
        },
        {
          title: `บทที่ 4<br>ไพ่ชุดใหญ่`,
          time: "30นาที",
          vdoLink: "/images/activitySeminar/activity4.png",
        },
        {
          title: `บทที่5 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/activitySeminar/activity5.png",
        },
        {
          title: `บทที่6 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/activitySeminar/activity6.png",
        },
        {
          title: `บทที่6 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/activitySeminar/activity7.png",
        },
        {
          title: `บทที่7 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/activitySeminar/activity8.png",
        },
        {
          title: `บทที่8 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/activitySeminar/activity8.png",
        },
        {
          title: `บทที่9 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/activitySeminar/activity8.png",
        },
      ],
    };
  },
  methods: {
    showQuiz() {
      document.getElementById("course-video").addEventListener("ended", () => {
        this.quiz = true;
      });
      document
        .getElementById("course-video")
        .addEventListener("seeking", () => {
          this.quiz = false;
        });
    },
    openExample() {
      this.exam = true;
      this.quiz = false;
    },
    closeExample() {
      this.exam = false;
      document
        .getElementById("course-video")
        .removeEventListener("ended", () => {});
    },
    test(item) {
      this.lessonSelect = item;
      this.active = !this.active;
    },
  },
};
</script>
