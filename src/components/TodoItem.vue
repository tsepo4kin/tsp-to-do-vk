<template>
  <div
    class="d-flex flex-wrap"
    :class="{ green: todo.complete, 'lighten-3': todo.complete }"
  >
    <span
      style="width: 390px"
      :class="{ 'text-decoration-line-through': todo.complete }"
      class="title"
      >{{ todo.title }}</span
    >

    <v-btn
      icon
      @click="toggleComplete"
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
  props: {
    todo: {
      require: true,
    },
  },
  methods: {
    deleteTask() {
      this.$emit("deleteTask", this.todo.title);
    },
    toggleComplete() {
      this.$emit("toggleComplete", this.todo.title);
    },
  },
};
</script>

<style></style>
