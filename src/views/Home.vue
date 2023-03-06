<template>
  <CardControl @add-card="addCard"></CardControl>
  <div class="grid">
    <div class="col-4" v-for="card in cardStore.cards" :key="card.id">
      <BaseCard
        :card="card"
        @delete-card="onDeleteCard"
        @flip="flip"
      ></BaseCard>
    </div>
  </div>
</template>
<script>
import CardControl from "../components/CardControl.vue";
import BaseCard from "../components/BaseCard.vue";
import { useCardStore } from "../store/CardStore";

export default {
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      cardStore: useCardStore(),
    };
  },

  components: {
    CardControl,

    BaseCard,
  },

  methods: {
    addCard(card) {
      this.cardStore.addCard(card);
    },
    onDeleteCard(id) {
      console.log(id);
      this.cardStore.removeCard(id);
    },
    flip(id) {
      this.cardStore.flipCard(id);
    },
  },
};
</script>
