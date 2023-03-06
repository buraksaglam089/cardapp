<template>
  <div class="flex justify-content-center mb-2">
    <span class="p-float-label">
      <InputText class="mr-2" v-model="frontInfo" type="text" id="username" />
      <label for="username">Front of the Card</label>
    </span>
    <span class="p-float-label">
      <InputText v-model="backInfo" type="text" id="username" />
      <label for="username">Back of the Card</label>
    </span>

    <Button class="p-button-secondary" @click="addCard">Add New Card</Button>
  </div>
</template>
<script>
export default {
  emits: ["add-card"],
  data() {
    return {
      frontInfo: "",
      backInfo: "",
      id: "",
    };
  },
  methods: {
    addCard() {
      const card = {
        id: Date.now(),
        front: this.frontInfo,
        back: this.backInfo,
        isFlipped: false,
      };
      this.$emit("add-card", card);
    },
  },
};
</script>
