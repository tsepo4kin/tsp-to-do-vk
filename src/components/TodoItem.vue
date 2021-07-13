<template>
  <div
    class="d-flex flex-wrap"
    :class="{ green: isComplete, 'lighten-3': isComplete }"
  >
    <span
      style="width: 390px"
      :class="{ 'text-decoration-line-through': isComplete }"
      class="title"
      >{{ title }}</span
    >

    <v-btn
      icon
      @click="isComplete = !isComplete"
      x-small
      class="green accent-3 align-self-center"
    >
      <v-icon>mdi-check</v-icon>
    </v-btn>
    <v-btn
      icon
      @click="deleteTask"
      x-small
      class="red accent-2 ml-1 align-self-center"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <hr style="width: 100%" />
  </div>
</template>

<script>
export default {
  data: () => ({
    isComplete: false,
  }),
  props: {
    title: {
      require: true,
    },
  },
  methods: {
    deleteTask() {
      this.$emit("deleteTask", this.title);
    },
  },
};
</script>

<style></style>
