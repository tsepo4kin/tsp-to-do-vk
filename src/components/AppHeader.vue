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
      color="white"
      append-outer-icon="mdi-check"
      v-model="listName"
      @click:append-outer="addTodoList"
    ></v-text-field>
    <span
      @click="toggleColorPicker"
      class="ring"
      :style="{ 'background-color': color }"
    ></span>
    <v-color-picker
      v-model="color"
      class="colorPicker"
      v-if="colorPicker"
    ></v-color-picker>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    listName: null,
    color: "#ffffff",
    colorPicker: false,
  }),
  methods: {
    addTodoList() {
      this.$emit("addTodoList", { listName: this.listName, color: this.color });
    },
    toggleColorPicker() {
      this.colorPicker = !this.colorPicker;
    },
  },
};
</script>

<style>
.ring {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid black;
}

.colorPicker {
  position: absolute;
  top: 45px;
  right: 20px;
}
</style>
