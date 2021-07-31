<template>
  <v-card width="500" class="mt-5 mx-auto align-self-center">
    <v-card-title :class="color" class="d-block">
      <div class="d-flex justify-space-between">
        <p>{{ listName }}</p>
        <v-btn
          @click="deleteTodoList"
          class="icon"
          elevation="0"
          :class="color"
        >
          <v-icon font-size="25">mdi-close</v-icon>
        </v-btn>
      </div>
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
        @saveNewTodoTitle="editTodo"
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
  created() {
    JSON.parse(localStorage.getItem(this.listName))
      ? (this.todos = JSON.parse(localStorage.getItem(this.listName)))
      : (this.todos = []);
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.todoTitle,
        complete: false,
        id: this.listName + this.todos.length,
      });
      this.todoTitle = null;
      localStorage.setItem(this.listName, JSON.stringify(this.todos));
    },
    deleteFromTodos(title) {
      this.todos = this.todos.filter((e) => e.title != title);
      localStorage.setItem(this.listName, JSON.stringify(this.todos));
    },
    toggleComplete(title) {
      this.todos = this.todos.map((e) => {
        if (e.title == title) {
          e.complete = !e.complete;
        }
        return e;
      });
      localStorage.setItem(this.listName, JSON.stringify(this.todos));
    },
    editTodo(todoData) {
      this.todos = this.todos.map((e) => {
        if (todoData.oldTitle == e.title) {
          e.title = todoData.newTitle;
        }
        return e;
      });
      localStorage.setItem(this.listName, JSON.stringify(this.todos));
    },
    deleteTodoList() {
      this.$emit("deleteTodoList", this.listName);
    },
  },
};
</script>

<style></style>
