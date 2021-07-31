<template>
  <v-app>
    <AppHeader @addTodoList="addNewTodoList" />

    <v-main>
      <v-container class="d-flex flex-wrap">
        <todos-list
          @deleteTodoList="deleteTodoList"
          v-for="(todoList, i) of todosLists"
          :key="i"
          :listName="todoList.listName"
          :color="todoList.color"
        />
        <!-- <v-btn
          class="px-16 mt-5 mx-auto green lighten-3"
          width="500"
          @click="deleteAllCompleteTasks"
          >delete all complete</v-btn
        > -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// deleteAllCompleteTasks допилить потенциальный апдейт
// Дизайн фиксы
import AppHeader from "./components/AppHeader";
import TodosList from "./components/TodosList.vue";

export default {
  name: "App",

  components: {
    AppHeader,
    TodosList,
  },

  created() {
    this.todosLists = JSON.parse(localStorage.getItem("todoLists"));
  },

  data: () => ({
    todosLists: [
      { listName: "Important and urgent", color: "red" },
      { listName: "Urgent", color: "orange" },
      { listName: "Important", color: "green" },
      { listName: "Postponed indefinitely", color: "grey" },
    ],
  }),
  methods: {
    addNewTodoList(listData) {
      this.todosLists.push(listData);
      localStorage.setItem("todoLists", JSON.stringify(this.todosLists));
    },
    deleteTodoList(listName) {
      this.todosLists = this.todosLists.filter((e) => e.listName != listName);
      localStorage.setItem("todoLists", JSON.stringify(this.todosLists));
    },
  },
};
</script>
