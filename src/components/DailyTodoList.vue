<template>
  <v-container>
    <h1 class="text-center display-2 my-5">Todos</h1>
    <v-row justify="center">
      <v-col cols="7">
        <v-text-field
          @keydown.enter="addTodo"
          v-model="todo"
          autocomplete="off"
          clearable
          outlined
          width="25px"
          label="Input your todo"
          placeholder="Go to the store"
          append-outer-icon="mdi-check"
          @click:append-outer.enter="addTodo"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DailyTodoList",

  data: () => ({
    todo: null,
  }),
  methods: {
    addTodo() {
      if (!this.todo || this.todo.trim() === "") {
        return;
      }
      console.log(1);
    },
  },
};
</script>
