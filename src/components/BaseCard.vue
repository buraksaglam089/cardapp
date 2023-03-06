<template>
  <div class="flex justify-content-center">
    <div class="card-container">
      <div class="card" :class="{ flipped: card.isFlipped }">
        <div class="card-inner" @click="flip()">
          <div class="card-front bg-primary">
            {{ card.front }}
          </div>
          <div class="card-back bg-primary">
            {{ card.back }}
          </div>
        </div>
        <Button
          class="button"
          icon="pi pi-trash"
          @click="deleteCard(card.id)"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  emits: ["delete-card", "flip"],
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    flip() {
      this.$emit("flip", this.card.id);
    },
    deleteCard(id) {
      this.$emit("delete-card", id);
    },
  },
  components: { Button },
};
</script>

<style scoped>
.card {
  position: relative;
  min-width: 200px;
  height: 250px;
  perspective: 1000px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  padding-top: 70px;
  text-align: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card-front {
  z-index: 2;
}

.card-back {
  transform: rotateY(180deg);
  z-index: 1;
}
.button {
  position: absolute;
  top: 1;
  right: 0;
}
</style>
