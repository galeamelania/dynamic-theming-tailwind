<template>
  <div class="container">
    <theme-picker />

    <my-button :color="themeColor">
      This is my button
    </my-button>

    <styled-button :color="themeColor">
      This is my styled button
    </styled-button>

    <div :class="appTheme">
      <div class="mb-6">
        <h1 class="font-display font-light text-5xl mb-4">
          My Awesome headline
        </h1>
        <p class="font-normal text-2xl">
          My Awesome subheadline
        </p>
      </div>
      <div>
        <button
          type="button"
          class="font-body rounded-btn text-xl font-medium bg-primary text-primary px-6 py-3 mr-2"
        >
          Main Action
        </button>
        <button
          type="button"
          class="font-body rounded-btn text-xl font-medium bg-secondary text-secondary px-6 py-3"
        >
          Secondary Action
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import ThemePicker from "~/components/ThemePicker.vue";
import MyButton from "~/components/MyButton.vue";
import StyledButton from "~/components/StyledButton.vue";

export default {
  components: {
    MyButton,
    ThemePicker,
    StyledButton
  },

  computed: {
    ...mapGetters(["themeColor"]),

    appTheme() {
      return process.env.APP_THEME;
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
</style>
