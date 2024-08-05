<script>
import SettingsModal from "./components/SettingsModal.vue";
import Shortcuts from "@/components/Shortcuts.vue";
import {ref} from "vue";

export default {
  components: {Shortcuts, SettingsModal},
  setup() {
    let isFirefox = navigator.userAgent.match(/firefox|fxios/i);
    let settings = {
      logo: 'default',
      searchInput: 'default'
    };

    const formattedTime = ref(``);
    const formattedDate = ref(``);

    function updateDate() {
      const date = new Date();
      formattedTime.value = `${date.getHours() <= 12 ? date.getHours() : date.getHours() % 12}:${date.getMinutes()}`;
      formattedDate.value = `${date.toLocaleDateString("id-ID", {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })}`;
    }

    updateDate();

    if (!localStorage.getItem('settings')) {
      localStorage.setItem('settings', JSON.stringify(settings));
    } else {
      settings = JSON.parse(localStorage.getItem('settings'));
    }

    setInterval(() => {
      updateDate();
    }, 30000);

    return {
      isFirefox, settings, formattedTime, formattedDate
    }
  },
  methods: {
    openSettings() {
      document.getElementById('settings-modal').style.display = 'block';
    },
    closeSettings() {
      document.getElementById('settings-modal').style.display = 'none';
    }
  }
}
</script>

<template>
  <div class="p-[20px] float-right">
    <button class="button" @click="openSettings">
      <AdjustIcon/>
    </button>
  </div>

  <div class="pt-[150px]"></div>

  <!-- Logo -->
  <!--  <FirefoxLogo v-if="settings.logo === 'firefox' || (settings.logo === 'default' && isFirefox)"/>-->
  <!--  <GoogleLogo v-if="settings.logo === 'google' || (settings.logo === 'default' && !isFirefox)"/>-->

  <!-- Time and date -->
  <div class="flex flex-col items-center gap-1">
    <p class="font-semibold text-7xl dark:text-white text-gray-900">{{ formattedTime }}</p>
    <p class="font-medium text-lg dark:text-white text-gray-900">{{ formattedDate }}</p>
  </div>

  <!-- Search input -->
  <div class="text-center">
    <SearchInput :settings="settings"/>
  </div>

  <!-- Shortcuts -->
  <Shortcuts class="mt-8" :settings="settings"/>

  <SettingsModal/>
</template>

<style scoped>

</style>
