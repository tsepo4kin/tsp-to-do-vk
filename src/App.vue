<template>
  <v-app>
    <AppHeader />

    <v-main>
      <v-container class="d-flex flex-wrap">
        <todos-list
          v-for="(todoList, i) of todosLists"
          :key="i"
          :listName="todoList.listName"
          :color="todoList.color"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import TodosList from "./components/TodosList.vue";

export default {
  name: "App",

  components: {
    AppHeader,
    TodosList,
  },

  data: () => ({
    todosLists: [
      { listName: "Important and urgent", color: "red" },
      { listName: "Urgent", color: "orange" },
      { listName: "Important", color: "green" },
      { listName: "Postponed indefinitely", color: "grey" },
    ],
  }),
};
</script>
