<template>
  <div id="settings-modal" class="details-modal hidden">
    <!-- Modal close button -->
    <button type="button" class="hover:bg-gray-600/20 details-modal-close" style="border-radius: 0 0.5em 0 0;" @click="closeSettings">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" />
      </svg>
    </button>

    <!-- Modal title -->
    <div class="details-modal-title">
      <div class="pt-[0.4rem] pb-[0.4rem] font-medium">Customize</div>
    </div>
    <!-- Modal contents -->
    <div class="details-modal-content">
      <p>Refresh the page to apply changes *</p>

      <!-- Logo title -->
      <p class="mt-[0.5rem]">Logo style</p>
      <!-- Logo option -->
      <select v-model="selectedLogo" class="mt-[0.1rem]">
        <option v-for="logo in logoOptions" :value="logo.value">
          {{ logo.text }}
        </option>
      </select>

      <!-- Search bar style title -->
      <p class="mt-[0.5rem]">Search bar style</p>
      <!-- Search bar style option -->
      <select v-model="selectedInputStyle" class="mt-[0.1rem]">
        <option v-for="inputStyle in inputStyleOptions" :value="inputStyle.value">
          {{ inputStyle.text }}
        </option>
      </select>

      <div class="pb-[1rem]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsModal",
  data() {
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
      settings,
      selectedLogo: settings.logo,
      logoOptions: [
        { text: 'Default', value: 'default' },
        { text: 'Firefox', value: 'firefox' },
        { text: 'Google', value: 'google' }
      ],
      selectedInputStyle: settings.searchInput,
      inputStyleOptions: [
        { text: 'Default', value: 'default' },
        { text: 'Rounded Full', value: 'rounded-full' },
        { text: 'Rounded', value: 'rounded' }
      ],
    }
  },
  watch: {
    selectedLogo(newValue) {
      this.settings.logo = newValue;
      localStorage.setItem('settings', JSON.stringify(this.settings));
    },
    selectedInputStyle(newValue) {
      this.settings.searchInput = newValue;
      localStorage.setItem('settings', JSON.stringify(this.settings));
    }
  },
  methods: {
    closeSettings() {
      document.getElementById('settings-modal').style.display = 'none';
    }
  }
}
</script>

<style scoped>
select {
  padding: 6px;
  background-color: transparent;
  border: 0.1em solid #3d3d3d;
  border-radius: 0.5em;
  box-shadow: none;
  -webkit-appearance: none;
}
select:focus {
  outline: none;
}

.details-modal {
  background: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 1px 4px black;
  top: 50%;
  left: 50%;
  width: 30em;
  height: auto;
  max-width: 95%;
  max-height: 95vh;
  position: absolute;
  transform: translate(-50%, -50%);
}
.details-modal-title {
  color: #111827;
  padding-left: 1em;
  position: relative;
  width: calc(100% - 4.5em);
}

.details-modal-close {
  align-items: center;
  color: #111827;
  display: flex;
  height: 2.4em;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 4.5em;
}

.details-modal-content {
  border-top: 1px solid #e0e0e0;
  padding-left: 1em;
  padding-right: 1em;
  overflow: auto;
  color: #111827;
}
</style>