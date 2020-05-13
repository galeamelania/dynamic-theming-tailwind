<template>
  <button
    :style="{ 'background-color': color }"
    class="shadow mt-12 self-center focus:shadow-outline focus:outline-none text-inverse font-bold py-2 px-4 rounded"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",

  props: {
    color: {
      type: String
    }
  }
};
</script>
