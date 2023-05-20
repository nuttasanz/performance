<template>
  <div class="w-full bg-[#F7F7FD]">
    <!--  VDO COURSE  -->
    <div class="max-w-[1440px] mx-auto flex px-20 pb-[54px]">
      <div v-if="!exam" class="w-full flex">
        <div
          class="relative flex flex-col justify-between w-full max-w-[350px]"
        >
          <!--     Learning Process     -->
          <div class="bg-white p-6">
            <div class="text-lg text-[#0E1F1D] mb-2">
              Learning Progress {{ learningProgress }}%
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="h-2 rounded-full"
                :class="
                  learningProgress == 100
                    ? 'bg-gradient-to-r from-[#6CB88E] to-[#9DEABF]'
                    : 'bg-gradient-to-r from-[#E8A43E] to-[#FFDAA1]'
                "
                :style="{ width: `${learningProgress}%` }"
              ></div>
            </div>
          </div>
          <!--    End Learning Process     -->
          <div class="relative top-0 h-full max-h-[535px] overflow-y-scroll">
            <template v-for="(item, i) in videoLesson" :key="i">
              <ExamVideoLesson
                :id="`lesson-${i}`"
                :title="item.title"
                :time="item.time"
                :status="item.lessonComplete"
                @click="selectedLesson(item, i)"
              />
            </template>
          </div>
          <!-- Homework Button -->
          <div class="bg-white p-6">
            <UtilsButtonStyle
              text="Quiz Test"
              icon-type="fas"
              icon-name="square-check"
              class="w-full h-[56px] max-h-[56px] text-white text-lg font-semibold"
              button-color="bg-[#5762C5]"
              :disabled="disabled"
              @click="showQuiz"
            />
          </div>
          <!-- Homework Button -->
        </div>
        <div v-if="lessonSelect.length > 0" class="w-full flex flex-col">
          <div>
            <!--   VDO HEADER   -->
            <div
              class="text-[26px] leading-[36.4px] font-semibold text-[#24285F] text-center my-6"
              @click="closeQuiz"
            >
              Course Title<br />
              If video completed button will active for Quiz
            </div>
            <!--   END VDO HEADER   -->
            <!--   VDO CONTENT   -->
            <div class="relative" @click="playVideo">
              <video
                :id="`video-${index}`"
                :src="videoLesson[index].vdoLink"
                controls
                class="w-full h-full max-h-[560px] object-cover"
              ></video>
              <div
                v-if="learningProgress == 100"
                class="absolute top-0 z-50 w-full h-full bg-black/[0.8]"
              >
                <div class="flex w-full h-full items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-[60px] leading-[81.2px] font-bold">
                      Congraturation!
                    </div>
                    <div class="text-xl mt-3 mb-[30px]">
                      You Have Completed All Chapters
                    </div>
                    <UtilsButtonStyle
                      text="Quiz"
                      icon-type="fas"
                      icon-name="square-check"
                      class="w-full h-[56px] max-h-[56px] text-[#5762C5] text-lg font-semibold"
                      :disabled="disabled"
                      button-color="bg-[#FFFFFF]"
                      @click="showQuiz"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--   END VDO CONTENT   -->
            <!-- Next/Prev -->
            <div class="bg-white flex justify-between p-7">
              <div
                class="flex items-center gap-x-3 cursor-pointer"
                @click="prev"
              >
                <div>
                  <font-awesome-icon
                    :icon="['far', 'arrow-left']"
                    class="w-4 h-4 text-[#5762C5]"
                  />
                </div>
                <div class="text-lg text-[#24285F] font-semibold">Previous</div>
              </div>
              <div
                class="flex items-center gap-x-3 cursor-pointer"
                @click="next"
              >
                <div class="text-lg text-[#24285F] font-semibold">Next</div>
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
        </div>
      </div>
      <div v-else class="w-full max-w-[798px] mx-auto">
        <ExamForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      learningProgress: 0,
      index: null,
      lessonSelect: [],
      exam: false,
      videoLesson: [
        {
          title: `Lesson1<br>Chapter Title`,
          time: "Duration",
          vdoLink: "/images/video/testVid/vid1.mp4",
          lessonComplete: false,
        },
        {
          title: `Lesson2<br>Chapter Title`,
          time: "Duration",
          vdoLink: "/images/video/testVid/vid2.mp4",
          lessonComplete: false,
        },
        // {
        //   title: `Lesson3<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid3.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson4<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid4.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson5<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid5.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson6<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid1.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson7<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid2.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson8<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid3.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson9<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid4.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson10<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid5.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson11<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid1.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson12<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid2.mp4",
        //   lessonComplete: false,
        // },
        // {
        //   title: `Lesson13<br>Chapter Title`,
        //   time: "Duration",
        //   vdoLink: "/images/video/testVid/vid3.mp4",
        //   lessonComplete: false,
        // },
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
      this.index = i;
      this.lessonSelect = this.videoLesson[this.index].vdoLink;
    },
    playVideo() {
      const vid = document.getElementById(`video-${this.index}`);
      vid.addEventListener(
        "ended",
        () => {
          this.videoLesson[this.index].lessonComplete = true;
          this.learningProgress += Math.ceil(100 / this.videoLesson.length);
          if (this.learningProgress >= 100) {
            this.learningProgress = 100;
            this.disabled = true;
          }
        },
        { once: true }
      );
    },
    next() {
      if (this.index >= this.videoLesson.length - 1) {
        return false;
      } else {
        this.index++;
      }
    },
    prev() {
      if (this.index <= 0) {
        return false;
      } else {
        this.index--;
      }
    },
  },
};
</script>
