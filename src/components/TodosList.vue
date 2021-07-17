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
        @toggleComplete="toggleComplete"
        v-for="(todo, i) in todos"
        :key="i"
        :todo="todo"
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
      this.todos.push({ title: this.todoTitle, complete: false });
      this.todoTitle = null;
    },
    deleteFromTodos(title) {
      this.todos = this.todos.filter((e) => e.title != title);
    },
    toggleComplete(title) {
      this.todos = this.todos.map((e) => {
        if (e.title == title) {
          e.complete = !e.complete;
        }
        return e;
      });
    },
  },
};
</script>

<style></style>
