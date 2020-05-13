<template>
  <themed-button
    class="button shadow mt-12 self-center focus:shadow-outline focus:outline-none text-inverse font-bold py-2 px-4 rounded"
    :color="color"
    ><slot></slot
  ></themed-button>
</template>

<script>
import ThemedButton from "./styled-components/ThemedButton";

export default {
  name: "StyledButton",
  components: { ThemedButton },
  props: {
    color: {
      type: String
    }
  }
};
</script>
