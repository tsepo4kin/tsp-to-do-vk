<template>
  <v-container>
    <v-card>
      <v-card-title>
        Importants
        <v-text-field> </v-text-field>
      </v-card-title>
      <v-card-text>
        <todo-item v-for="(k, i) in 10" :key="i" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
};
</script>

<style></style>
