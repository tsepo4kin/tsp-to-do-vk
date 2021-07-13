<template>
  <v-card width="500" class="mt-5 mx-auto">
    <v-card-title :class="color" class="d-block">
      <p>{{ listName }}</p>
      <v-text-field
        autocomplete="off"
        label="todo title"
        solo
        clearable
        dense
        background-color="#fff"
        color="#000"
        hide-details="true"
        v-model="todoTitle"
        append-outer-icon="mdi-plus"
        @click:append-outer="addTodo"
      >
      </v-text-field>
    </v-card-title>
    <v-card-text>
      <todo-item
        @deleteTask="deleteFromTodos"
        v-for="(todo, i) in todos"
        :key="i"
        :title="todo"
      />
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
  data: () => ({
    todoTitle: null,
    todos: [],
  }),
  methods: {
    addTodo() {
      this.todos.push(this.todoTitle);
      this.todoTitle = null;
    },
    deleteFromTodos(title) {
      this.todos = this.todos.filter((e) => e != title);
    },
  },
};
</script>

<style></style>
