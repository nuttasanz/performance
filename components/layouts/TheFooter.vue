<template>
  <div class="w-full relative bottom-0 bg-[#24285F]">
    <div class="max-w-[1440px] mx-auto pt-8 px-20 pb-6">
      <div class="flex justify-between">
        <!--   LOGO & MAPS   -->
        <div class="flex flex-col">
          <div class="flex gap-x-3">
            <div class="max-w-[60px]">
              <img src="@/public/images/brandLogo/FooterHoroLogo.png" />
            </div>
            <div class="max-w-[180px] flex items-center">
              <img src="@/public/images/brandLogo/FooterHoroLogoText.png" />
            </div>
          </div>
          <div class="max-w-[290px] h-[172px] mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.201712420316!2d100.62102411506041!3d13.82692299029889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d637d5bb11961%3A0xcb3de4a880a3ae0c!2zSG9ybyBBY2FkZW15IOC5guC4lOC4oiDguK3guLLguIjguLLguKPguKLguYzguYDguIvguLTguJk!5e0!3m2!1sth!2sth!4v1680851542177!5m2!1sth!2sth"
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
          <div class="flex flex-col text-base text-white gap-y-3">
            <div class="font-semibold mb-3">หลักสูตร</div>
            <div>หลักสูตรไพ่ยิปซี</div>
            <div>หลักสูตรเลขศาสตร์และยาม</div>
            <div>หลักสูตรฮวงจุ้ย</div>
            <div>หลักสูตรโหราศาสตร์และเลข ๗ ตัว</div>
            <div>หนังสือเสียง (Audio book)</div>
          </div>

          <div class="flex flex-col text-base text-white gap-y-3">
            <div class="font-semibold mb-3">เมนูต่างๆ</div>
            <div>ไพ่ยิปซี</div>
            <div>เกร็ดความรู้</div>
            <div>ฮวงจุ้ย</div>
            <div>ประวัติอาจารย์เซิน</div>
          </div>

          <div class="flex flex-col text-base text-white gap-y-3">
            <div class="font-semibold mb-3">ช่องทางติดต่อ</div>
            <utils-button-style
              class="w-full"
              icon-type="fas"
              icon-name="phone"
              text="088-244-1915"
              @click="go('tel:0882441915')"
            ></utils-button-style>
            <utils-button-style
              class="w-full"
              icon-type="fab"
              icon-name="facebook"
              text="zernhoroacademy"
              button-color="#1877F2"
              @click="go('https:www.facebook.com/zernhoroacademy')"
            ></utils-button-style>
            <utils-button-style
              class="w-full"
              icon-type="fab"
              icon-name="youtube"
              text="อจ เซิน ซินแส"
              button-color="#FF0000"
              @click="go('https://youtube.com/@aj_zern')"
            ></utils-button-style>
            <utils-button-style
              class="w-full"
              icon-type="fab"
              icon-name="tiktok"
              text="@horoacademy"
              button-color="#000000"
              @click="
                go('https://www.tiktok.com/@horoacademy?_t=8bfrFDmItCj&_r=1')
              "
            ></utils-button-style>
          </div>
        </div>
        <!--   END COURSE COURSE   -->
        <!--   LINE QR CODE   -->
        <div class="flex flex-col gap-y-3">
          <div class="max-w-[180px]">
            <img src="/images/brandLogo/LineQR.png" />
          </div>
          <button
            class="flex items-center bg-[#06C755] py-2 px-4 rounded-[6px] gap-x-4"
            @click="
              go('https://liff.line.me/1645278921-kWRPP32q/?accountId=aj_zern')
            "
          >
            <div class="max-w-[22px]">
              <img src="/images/brandLogo/lineIcon.png" />
            </div>
            <div class="text-base font-bold text-white">@aj_zern</div>
          </button>
        </div>
        <!--   END LINE QR CODE   -->
      </div>

      <div class="border border-t-[#CBC9C3]/[0.5] border-b-0 mt-10 mb-6"></div>
      <div class="text-white text-base font-light text-center">
        Copyright © 2023 Horo Academy.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go(url) {
      window.open(url);
    },
  },
};
</script>
