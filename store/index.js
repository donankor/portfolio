import { defineStore } from "pinia";

export const indexStore = defineStore("index", {
  state: () => ({
    mobile: false,
  }),
  actions: {
    set([name, value]) {
      this[name] = value;
    },
  },
});
