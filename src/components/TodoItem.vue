<template>
  <div
    class="d-flex flex-wrap mt-2"
    :class="{ green: todo.complete, 'lighten-3': todo.complete }"
    @dblclick="editTodo"
  >
    <v-text-field
      solo
      flat
      color="black"
      :ref="todo.id"
      hide-details="true"
      style="width: 420px; font-size: 18px; font-weight: bold; padding: 0"
      :class="{ 'text-decoration-line-through': todo.complete }"
      :value="todo.title"
      :disabled="disabledField"
      @blur="saveNewTodoTitle"
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
    saveNewTodoTitle() {
      // this.$emit('saveNewTodoTitle', this.newTodoTitle)
      this.disabledField = true;
    },
    editTodo() {
      this.disabledField = false;
      let refName = this.todo.id;
      setTimeout(() => {
        this.$refs[refName].focus();
      }, 0);
      setTimeout(() => {
        window.getSelection().removeAllRanges();
      }, 0);
    },
  },
};
</script>

<style></style>
