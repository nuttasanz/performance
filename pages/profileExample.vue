<template>
  <div class="w-full bg-[#F7F7FD]">
    <div class="max-w-[1440px] mx-auto px-20 pt-[30px] pb-[90px]">
      <div class="w-full flex gap-x-[50px]">
        <!-- PROFILE MENU CARD -->
        <!-- MENU -->
        <ProfileMenuCard :menu="menu" @click="select" />
        <!-- END MENU -->
        <!-- END PROFILE MENU CARD -->
        <ProfilePersonalInformation
          v-if="selectedMenu === 'Personal Information'"
        />
        <ProfileMyCourse v-if="selectedMenu === 'My Course'" />
        <ProfileCertificateSession v-if="selectedMenu === 'Certificate'" />
        <ProfileOrderHistory v-if="selectedMenu === 'Order History'" />
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
          title: "Personal Information",
          icon: "/images/icons/avatar.png",
        },
        {
          title: "My Course",
          icon: "/images/icons/online-learning.png",
        },
        {
          title: "Certificate",
          icon: "/images/icons/certify.png",
        },
        {
          title: "Order History",
          icon: "/images/icons/cart.png",
        },
      ],
      selectedMenu: "Personal Information",
    };
  },
  methods: {
    select(menu) {
      this.selectedMenu = menu.target.innerText;
    },
  },
};
</script>
