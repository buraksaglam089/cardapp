<template>
  <div class="mb-1">
    <Menubar class="bg-teal-300" :model="items" />
    <Dropdown
      class="bg-teal-300"
      v-model="selectedCity"
      :options="catagories"
      optionLabel="name"
      placeholder="Catagories"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/home" },
        { label: "Game", icon: "pi pi-fw pi-prime", to: "/game" },
        { label: "Catagories", icon: "pi pi-fw pi-info", to: "/about" },
      ],
      selectedCity: null,
      catagories: [
        { name: "A", code: "NY" },
        { name: "B", code: "RM" },
        { name: "C", code: "LDN" },
      ],
    };
  },
};
</script>
<style></style>
