<template>
  <div class="w-4">
    <div class="p-inputgroup">
      <InputText
        v-model="keyword"
        placeholder="Search Timeline"
        class="p-inputtext-sm"
        @keypress="applySearch($event)"
      />
      <Button
        icon="pi pi-search"
        class="p-button-warning"
        @click="applySearch($event)"
      />
    </div>
  </div>
</template>
  
  <script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
  name: "SearchBar",
  components: { InputText, Button },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    applySearch($event) {
      if ($event.type === "click") {
        this.$emit("apply-search", this.keyword);
      }
      if ($event.keyCode !== 13) {
        return;
      }
      this.$emit("apply-search", this.keyword);
    },
  },
};
</script>
  
  <style scoped>
.searchbar {
  width: 50%;
}

input {
  padding: 5px;
}

i {
  cursor: pointer;
}

button {
  background: #008081 !important;
  border-color: #008081 !important;
}

input::placeholder {
  font-weight: bold;
}
</style>
  