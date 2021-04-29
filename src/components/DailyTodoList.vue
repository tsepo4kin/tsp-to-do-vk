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
    <v-row justify="center">
      <v-col cols="7">
        <v-list two-line>
          <v-list-item-group active-class="pink--text" multiple>
            <daily-to-do-node
              v-for="(item, index) in todoList"
              :key="index"
              :item="item"
              :index="index"
            ></daily-to-do-node>

            <!-- <v-divider
              v-if="index < items.length - 1"
              :key="index"
            ></v-divider>     -->
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DailyToDoNode from "./DailyToDoNode.vue";

export default {
  components: {
    DailyToDoNode,
  },

  name: "DailyTodoList",

  data: () => ({
    todo: null,
    todoList: [],
  }),
  methods: {
    addTodo() {
      if (!this.todo || this.todo.trim() === "") {
        return;
      }
      this.todoList.push(this.todo);
    },
  },
};
</script>
