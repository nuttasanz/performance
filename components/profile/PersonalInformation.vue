<template>
  <!-- TAB SELECT MENU -->
  <div class="bg-white w-full h-screen rounded-[24px] p-5">
    <!-- HEADER TITLE -->
    <div class="border-b border-[#AEAFC5]">
      <div class="text-[32px] font-bold leading-[44.8px] text-[#24285F]">
        Personal Information
      </div>
    </div>
    <!-- END HEADER TITLE -->
    <!-- PROFILE PICTURE -->
    <div
      class="w-full max-w-[149px] h-full max-h-[149px] mx-auto border border-[#7D8592] border-dashed rounded-full my-10"
    >
      <div
        class="w-full h-full flex flex-col gap-y-[10px] items-center justify-center text-[#7D8592]"
      >
        <div>
          <font-awesome-icon :icon="['fas', 'circle-plus']" size="xl" />
        </div>
        <div class="text-xl">Add Profile Picture</div>
      </div>
    </div>
    <!-- END PROFILE PICTURE -->
    <!-- VALIDATE -->
    <div class="flex flex-col gap-y-6 px-[155px]">
      <div class="flex gap-x-7">
        <div class="flex flex-col w-full">
          <UtilsInputTextFields
            id="name"
            label="First Name"
            type="text"
            placeholder="First Name"
            name="name"
            for="name"
          />
        </div>
        <div class="flex flex-col w-full">
          <UtilsInputTextFields
            id="last-name"
            label="Last Name"
            type="text"
            placeholder="Last Name"
            name="last-name"
            for="last-name"
          />
        </div>
      </div>

      <div class="flex gap-x-7">
        <div class="flex flex-col w-full">
          <UtilsInputTextFields
            id="nick-name"
            label="Nickname"
            type="text"
            placeholder="Nickname"
            name="nick-name"
            for="nick-name"
          />
        </div>
        <div class="flex flex-col w-full">
          <UtilsInputGenderSelectFields
            id="gender-select"
            label="Gender"
            placeholder="Gender"
            name="gender"
            for="gender-select"
          />
        </div>
      </div>

      <div class="flex gap-x-7">
        <div class="flex flex-col w-full">
          <UtilsInputBirthSelectFields label="Birth Date" />
        </div>
      </div>

      <div class="flex gap-x-7">
        <div class="flex flex-col w-full">
          <UtilsInputTextFields
            id="tel"
            label="Telephone"
            type="tel"
            placeholder="Telephone"
            name="tel"
            for="tel"
          />
        </div>
        <div class="flex flex-col w-full">
          <UtilsInputTextFields
            id="email"
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
            for="email"
          />
        </div>
      </div>

      <div class="flex flex-col w-full max-w-[261px]">
        <UtilsInputTextFields
          id="lineID"
          label="Line ID"
          type="text"
          placeholder="LineID"
          name="lineID"
          for="lineID"
        />
      </div>
    </div>
    <!-- END VALIDATE -->
    <div class="max-w-[171px] h-full max-h-[52px] mx-auto mt-[60px] mb-[45px]">
      <UtilsButtonForm text="Submit" class="h-full" />
    </div>
  </div>
</template>
