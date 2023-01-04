<script>
import SettingsModal from "./components/SettingsModal.vue";
import Shortcuts from "@/components/Shortcuts.vue";

export default {
  components: {Shortcuts, SettingsModal},
  setup() {
    let isFirefox = navigator.userAgent.match(/firefox|fxios/i);
    let settings = {
      logo: 'default',
      searchInput: 'default'
    };

    if (!localStorage.getItem('settings')) {
      localStorage.setItem('settings', JSON.stringify(settings));
    } else {
      settings = JSON.parse(localStorage.getItem('settings'));
    }

    return {
      isFirefox, settings
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

  <div class="pt-[120px]"></div>

  <!-- Logo -->
  <FirefoxLogo v-if="settings.logo === 'firefox' || (settings.logo === 'default' && isFirefox)"/>
  <GoogleLogo v-if="settings.logo === 'google' || (settings.logo === 'default' && !isFirefox)"/>

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
