<template>
  <v-app-bar app color="primary">
    logo
    <v-spacer></v-spacer>
    <v-text-field
      autocomplete="off"
      label="list name"
      clearable
      dense
      solo
      flat
      hide-details="true"
      append-outer-icon="mdi-plus"
      v-model="listName"
      @click:append-outer="addTodoList"
    ></v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    listName: null,
  }),
  methods: {
    addTodoList() {
      this.$emit("addTodoList", { listName: this.listName, color: "purple" });
    },
  },
};
</script>

<style></style>
