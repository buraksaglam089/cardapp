<template>
  <div class="flex align-items-center justify-content-center">
    <div class="flex flex-column">
      <BaseCard :card="currentCard"></BaseCard>
      <div class="flex pt-3">
        <InputText type="text" v-model="value" class="p-inputtext-sm" />
        <div>
          <Button class="ml-2" label="Check" @click="checkAnswer()"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
import CardControl from "../components/CardControl.vue";
import { useCardStore } from "../store/CardStore";
export default {
  components: {
    BaseCard,
    CardControl,
  },

  data() {
    return {
      cardStore: useCardStore(),
      value: "",
      gameCards: [],
      currentCard: {},
    };
  },
  mounted() {
    this.gameCards = this.cardStore.cards;
    this.selectRandomCard();
  },
  methods: {
    selectRandomCard() {
      const nonEmptyGameCards = this.gameCards.filter((card) => card !== null);
      this.currentCard =
        nonEmptyGameCards[Math.floor(Math.random() * nonEmptyGameCards.length)];

      if (this.currentCard === undefined) {
        this.showEnd();
      }
    },

    checkAnswer() {
      if (this.value === this.currentCard.back) {
        console.log("correct");
        this.showSuccess();
        this.getNext();
      } else if (this.value !== this.currentCard.back) {
        this.showError();
        console.log("wrong");
      }
    },
    getNext() {
      this.removeGameCard(this.currentCard.id);
      this.selectRandomCard();
    },
    removeGameCard(id) {
      this.gameCards = this.gameCards.filter((c) => c.id !== id);
    },
    showEnd() {
      this.$toast.add({
        severity: "info",
        summary: "Game Over",
        detail: "You have finished the game",
        life: 3000,
      });
    },
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    },
    showError() {
      this.$toast.add({
        severity: "error",
        summary: "Error Message",
        detail: "Message Content",
        life: 3000,
      });
    },
  },
};
</script>

<style scoped>
:deep(.card-container) {
  width: 100%;
}
</style>
