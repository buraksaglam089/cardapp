import { defineStore } from 'pinia';

export const useCardStore = defineStore('cardStore', {
    state: () => {
        return { cards: [
            
        ], };
    },
    actions: {
       addCard(card) {
            this.cards.push(card);
        },
        removeCard(id) {
            this.cards = this.cards.filter((c) => c.id !== id);
        },
        flipCard(id) {
            const card = this.cards.find((c) => c.id === id);
            
            card.isFlipped = !card.isFlipped
        }
    }
});