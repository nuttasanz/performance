<template>
  <div class="w-full bg-[#F7F7FD]">
    <div class="max-w-[1440px] mx-auto px-20 pt-[30px] pb-[90px]">
      <div class="w-full flex gap-x-[50px]">
        <!-- PROFILE MENU CARD -->
        <!-- MENU -->
        <ProfileMenuCard :menu="menu" @click="select" />
        <!-- END MENU -->
        <!-- END PROFILE MENU CARD -->
        <ProfilePersonalInformation v-if="selectedMenu === 'ข้อมูลส่วนตัว'" />
        <ProfileMyCourse v-if="selectedMenu === 'คอร์สของฉัน'" />
        <ProfileCertificateSession v-if="selectedMenu === 'ใบประกาศนียบัตร'" />
        <ProfileOrderHistory v-if="selectedMenu === 'ประวัติการสั่งซื้อ'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "ข้อมูลส่วนตัว",
          icon: "/images/icons/avatar.png",
        },
        {
          title: "คอร์สของฉัน",
          icon: "/images/icons/online-learning.png",
        },
        {
          title: "ใบประกาศนียบัตร",
          icon: "/images/icons/certify.png",
        },
        {
          title: "ประวัติการสั่งซื้อ",
          icon: "/images/icons/cart.png",
        },
      ],
      selectedMenu: "ข้อมูลส่วนตัว",
    };
  },
  methods: {
    select(menu) {
      this.selectedMenu = menu.target.innerText;
    },
  },
};
</script>
