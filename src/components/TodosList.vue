<template>
  <v-card width="500" class="mt-5 mx-auto">
    <v-card-title :class="color">
      {{ listName }}
      <v-text-field> </v-text-field>
    </v-card-title>
    <v-card-text>
      <todo-item v-for="(k, i) in 10" :key="i" />
    </v-card-text>
  </v-card>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  props: {
    listName: {
      require: true,
    },
    color: {
      require: true,
    },
  },
};
</script>

<style></style>
