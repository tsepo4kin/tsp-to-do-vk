<template>
  <div
    class="d-flex flex-wrap mt-2"
    :class="{ green: todo.complete, 'lighten-3': todo.complete }"
    @dblclick="disabledField = false"
  >
    <v-text-field
      hide-details="true"
      style="width: 420px; font-size: 18px; font-weight: bold; padding: 0"
      :class="{ 'text-decoration-line-through': todo.complete }"
      :value="todo.title"
      :disabled="disabledField"
      @blur="editTodo"
    >
    </v-text-field>

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
  data: () => ({
    disabledField: true,
    newTodoTitle: null,
  }),
  methods: {
    deleteTask() {
      this.$emit("deleteTask", this.todo.title);
    },
    toggleComplete() {
      this.$emit("toggleComplete", this.todo.title);
    },
    editTodo() {
      // this.$emit('editTodo', this.newTodoTitle)
      console.log(1);
    },
  },
};
</script>

<style></style>
