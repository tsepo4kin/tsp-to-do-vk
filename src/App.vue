<template>
  <v-app>
    <AppHeader />

    <v-main>
      <DailyTodoList />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import DailyTodoList from "./components/DailyTodoList";

export default {
  name: "App",

  components: {
    DailyTodoList,
    AppHeader,
  },

  data: () => ({
    //
  }),
};
</script>
