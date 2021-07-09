<template>
  <v-app>
    <AppHeader />

    <v-main>
      <todos-list />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import TodosList from "./components/TodosList.vue";

export default {
  name: "App",

  components: {
    AppHeader,
    TodosList,
  },

  data: () => ({
    //
  }),
};
</script>
