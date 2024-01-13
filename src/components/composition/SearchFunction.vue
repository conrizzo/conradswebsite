<!-- using Composition API -->

<template>
  <div style="height: 100px;">
    <input type="text" v-model="searchTerm" placeholder="Search items..." />
    <div v-for="item in filteredItems" :key="item.id">
      <div v-if="searchTerm.length > 0">
        {{ item.name }} <span v-if="trie.search(searchTerm.toLowerCase())"> {{ item.price }}</span>

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref, computed } from 'vue';
import { productInventory } from '../Store/productInventoryOptionsData';
import { Trie } from './MakeTrie';


export default defineComponent({
  name: 'TestFile',
  setup() {
    const searchTerm = ref('');
    const items = ref(
      productInventory
    );
    let trie = new Trie;
    items.value.forEach(item => {

      trie.insert(item.name.toLowerCase());

    });
    trie.print();
    const printTrie = () => {
      trie.print();

    };

    const filteredItems = computed(() => {
      if (!searchTerm.value) {
        return items.value;
      }

      return items.value.filter(item =>
        item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    return {
      searchTerm,
      items,
      filteredItems,
      trie,
      printTrie,

    };
  },
});
</script>

<style scoped>
input {
  font-size: 1.25em;
  border-radius: 0.25em;
  border-width: 1px;
  outline: none;
  border: 1px solid rgb(218, 220, 224);
  padding: 0.25em;
}
</style>
