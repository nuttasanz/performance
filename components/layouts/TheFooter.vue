<template>
  <div class="w-full relative bottom-0 bg-[#24285F]">
    <div class="max-w-[1440px] mx-auto pt-8 px-20 pb-6">
      <div class="flex justify-between">
        <!--   LOGO & MAPS   -->
        <div class="flex flex-col">
          <div class="max-w-[290px] h-[172px] mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d287.4106234133958!2d101.0771228257441!3d14.25782901516666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1684309020412!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <!--   END LOGO & MAPS   -->
        <!--   COURSE   -->
        <div class="flex gap-x-[50px]">
          <div class="flex flex-col text-lg text-white gap-y-3">
            <div class="font-semibold mb-3">Footer Content</div>
            <div>Footer Content</div>
            <div>Footer Content</div>
            <div>Footer Content</div>
            <div>Footer Content</div>
            <div>Footer Content</div>
          </div>

          <div class="flex flex-col text-lg text-white gap-y-3">
            <div class="font-semibold mb-3">Footer Content</div>
            <div>Footer Content</div>
            <div>Footer Content</div>
            <div>Footer Content</div>
            <div>Footer Content</div>
          </div>

          <div class="flex flex-col text-lg text-white gap-y-3 text-center">
            <div class="font-semibold mb-3">ช่องทางติดต่อ</div>
            <UtilsButtonSmall
              class="w-full"
              icon-type="fas"
              icon-name="phone"
              text="092-423-5999"
              @click="go('tel:0924235999')"
            />
            <UtilsButtonSmall
              class="w-full"
              icon-type="fab"
              icon-name="facebook"
              text="Nuttasan Kotchawat"
              button-color="#1877F2"
            />
            <UtilsButtonSmall
              class="w-full"
              icon-type="fab"
              icon-name="youtube"
              text="Nuttasan Kotchawat"
              button-color="#FF0000"
            />
            <UtilsButtonSmall
              class="w-full"
              icon-type="fab"
              icon-name="tiktok"
              text="Nuttasan Kotchawat"
              button-color="#000000"
            />
          </div>
        </div>
        <!--   END COURSE COURSE   -->
      </div>

      <div class="border border-t-[#CBC9C3]/[0.5] border-b-0 mt-10 mb-6"></div>
      <div class="text-white text-base font-light text-center">
        Nuttasan Kotchawat 2023 Built with Nuxt3
      </div>
    </div>
  </div>
</template>

<script setup>
function go(url) {
  window.open(url);
}
</script>
