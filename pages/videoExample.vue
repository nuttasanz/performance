<template>
  <div class="w-full bg-[#F7F7FD]">
    <!--  VDO COURSE  -->
    <div class="max-w-[1440px] mx-auto flex pb-[54px]">
      <div v-if="!exam" class="w-full flex">
        <div class="relative flex flex-col w-full max-w-[350px]">
          <!--     Learning Process     -->
          <div class="bg-white p-6">
            <div class="text-lg text-[#0E1F1D] mb-2">
              เรียนไปแล้ว {{ learningProgress }}%
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-[#E8A43E] to-[#FFDAA1] h-2 rounded-full"
                style="width: 0%"
              ></div>
            </div>
          </div>
          <!--    End Learning Process     -->
          <div class="max-h-[530px] overflow-y-scroll">
            <template v-for="(item, i) in videoLesson" :key="i">
              <ExamVideoLesson
                :id="`lesson-${i}`"
                :title="item.title"
                :time="item.time"
                @click="selectedLesson(item, i)"
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
              @click="showQuiz"
            />
          </div>
          <!-- Homework Button -->
        </div>
        <div
          v-if="lessonSelect.length > 0"
          class="w-full flex flex-col justify-between"
        >
          <div>
            <!--   VDO HEADER   -->
            <div
              class="text-[26px] leading-[36.4px] font-semibold text-[#24285F] text-center my-6"
              @click="closeQuiz"
            >
              Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ
              สร้างรายได้หลักล้าน
            </div>
            <!--   END VDO HEADER   -->
            <!--   VDO CONTENT   -->
            <div class="relative">
              <video
                :id="`video-${index}`"
                :src="lessonSelect"
                controls
                class="w-full h-full max-h-[560px] object-cover"
                @click="playVideo"
              ></video>
              <!-- Next/Prev -->
              <div class="bg-white flex justify-between p-7">
                <div
                  class="flex items-center gap-x-3 cursor-pointer"
                  @click="prev()"
                >
                  <div>
                    <font-awesome-icon
                      :icon="['far', 'arrow-left']"
                      class="w-4 h-4 text-[#5762C5]"
                    />
                  </div>
                  <div class="text-lg text-[#24285F] font-semibold">
                    ก่อนหน้า
                  </div>
                </div>
                <div
                  class="flex items-center gap-x-3 cursor-pointer"
                  @click="next"
                >
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
            <!--   END VDO CONTENT   -->
          </div>
        </div>
      </div>
      <div v-else class="max-w-[1440px] mx-auto">
        <ExamForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      learningProgress: null,
      index: null,
      lessonSelect: [],
      exam: false,
      videoLesson: [
        {
          title: `บทที่ 1 <br>เกริ่นนำ`,
          time: "18นาที",
          vdoLink: "/images/video/testVid/vid1.mp4",
        },
        {
          title: `บทที่ 2<br>การเป็นนักพยากรณ์มืออาชีพ`,
          time: "1ขั่วโมง 8นาที",
          vdoLink: "/images/video/testVid/vid2.mp4",
        },
        {
          title: `บทที่ 3<br>ทุกเรื่องเกี่ยวกับไพ่`,
          time: "54นาที",
          vdoLink: "/images/video/testVid/vid3.mp4",
        },
        {
          title: `บทที่ 4<br>ไพ่ชุดใหญ่`,
          time: "30นาที",
          vdoLink: "/images/video/testVid/vid4.mp4",
        },
        {
          title: `บทที่5 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/video/testVid/vid5.mp4",
        },
        {
          title: `บทที่6 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/video/testVid/vid1.mp4",
        },
        {
          title: `บทที่6 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/video/testVid/vid2.mp4",
        },
        {
          title: `บทที่7 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/video/testVid/vid3.mp4",
        },
        {
          title: `บทที่8 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/video/testVid/vid4.mp4",
        },
        {
          title: `บทที่9 <br>ไพ่ชุดเล็ก`,
          time: "26นาที",
          vdoLink: "/images/video/testVid/vid5.mp4",
        },
      ],
    };
  },
  methods: {
    showQuiz() {
      this.exam = true;
    },
    closeQuiz() {
      this.exam = false;
    },
    selectedLesson(item, i) {
      this.lessonSelect = item.vdoLink;
      this.index = i;
    },
    playVideo() {
      const vid = document.getElementById(`video-${this.index}`);
      const lessonID = document.getElementById(`lesson-${this.index}`);
      const lessonStatus =
        lessonID.getElementsByClassName("hidden")[0].classList;
      vid.addEventListener("ended", () => {
        lessonID.classList.add("bg-[#D9FFEA]");
        lessonStatus.value = "block";
      });
    },
    next() {},
    prev() {},
  },
};
</script>
