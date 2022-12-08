<template>
  <div @submit="search" id="input-wrapper" class="mt-[45px]">
    <form>
      <input
          id="search-input" type="text" autocomplete="off" spellcheck="false" placeholder="Search Google or enter address"
          class='max-w-[80%] md:max-w-[600px] w-full h-[45px] text-sm pl-[20px] pr-[20px] border-none text-gray-800 dark:text-white focus:outline-none bg-white shadow-all dark:bg-dark-gray dark:shadow-none'
          :style="[{ 'border-radius': isRoundedFull ? '9999px' : '10px' }]"
      >
    </form>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "SearchInput",
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const isFirefox = navigator.userAgent.match(/firefox|fxios/i);
    const isRoundedFull = computed(() => {
      // if search input is 'rounded-full' or 'default' and browser is not firefox
      return props.settings.searchInput === 'rounded-full' ||
          (props.settings.searchInput === 'default' && (props.settings.logo === 'google' || !isFirefox));
    });

    return {isRoundedFull}
  },
  methods: {
    search(event) {
      event.preventDefault();

      const search = document.getElementById("search-input").value;
      window.location = `https://www.google.com/search?q=${encodeURIComponent(search).replaceAll('%20', '+')}`;
    }
  }
}
</script>