<template>
  <div class="flex flex-wrap justify-center justify-items-center mx-5">
    <a :href="shortcut.url" class="hover:bg-white/20 transition duration-[20ms] rounded-md" v-for="shortcut in shortcuts">
      <div class="mx-6 mt-4">
        <div class="text-center p-3" style="background-color: rgb(42, 42, 42)" :style="[{ 'border-radius': isRoundedFull ? '9999px' : '10px' }]">
          <img width="28" height="28" :class="shortcut.style" :src="`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${shortcut.url}&size=64`" alt="Shortcut icon">
        </div>
        <div class="text-center text-xs mt-3 dark:text-white mb-4">{{ shortcut.name }}</div>
      </div>
    </a>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "Shortcuts",
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    let shortcuts = {
      youtube: {
        name: 'YouTube',
        url: 'https://www.youtube.com',
        style: 'none'
      },
      google: {
        name: 'Google',
        url: 'https://www.google.com',
        style: 'none'
      },
      gmail: {
        name: 'Gmail',
        url: 'https://mail.google.com',
        style: 'none'
      },
      github: {
        name: 'GitHub',
        url: 'https://github.com',
        style: 'rounded-full'
      },
      twitter: {
        name: 'Twitter',
        url: 'https://twitter.com',
        style: 'none'
      },
      reddit: {
        name: 'Reddit',
        url: 'https://www.reddit.com',
        style: 'none'
      },
    };

    if (!localStorage.getItem('shortcuts')) {
      localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
    } else {
      shortcuts = JSON.parse(localStorage.getItem('shortcuts'));
    }

    const isFirefox = navigator.userAgent.match(/firefox|fxios/i);
    const isRoundedFull = computed(() => {
      return props.settings.searchInput === 'rounded-full' ||
          (props.settings.searchInput === 'default' && (props.settings.logo === 'google' || !isFirefox));
    });

    return {shortcuts, isRoundedFull}
  }
}
</script>