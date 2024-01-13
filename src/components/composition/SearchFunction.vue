<!-- using Composition API -->

<template>
  <div class="outside-div">
    <div class="input-area">
      <span id="tip-1" class="tooltip-search-anchor">
        <span anchor="tip-1" class="tooltip-search"> If a string match is typed a <b>Trie</b>
          confirms it and the price is shown.
          <br>Type <b>bread</b> to test it out.
          <br><i>This tooltip uses the new <b>CSS anchor positioning</b>.</i>
        </span>
      </span>
      <input ref="inputField" type="text" v-model="searchTerm" placeholder="Search items..." />
    </div>
    <div v-for="item in filteredItems" :key="item.id">
      <div v-if="searchTerm.length > 0">
        {{ item.name }} <span v-if="trie.search(searchTerm.toLowerCase())"> {{ item.price }}</span>

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref, computed, onMounted } from 'vue';
import { productInventory } from '../Store/productInventoryOptionsData';
import { Trie } from './MakeTrie';



export default {
  directives: {
    focus: {
      // directive definition
      mounted(el) {
        el.focus();
      },
    },
  },
  name: 'SearchFunction',
  setup() {

    const searchTerm = ref('');
    const items = ref(productInventory);
    const inputField = ref(null);

    let trie = new Trie;
    items.value.forEach(item => {
      trie.insert(item.name.toLowerCase());
    });


    // if someone is using a mobile device, the input field will not be focused!
    onMounted(() => {
      if (window.innerWidth > 600) {
        inputField.value.focus();
      }
    });

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
      inputField,

    };
  },
};
</script>

<style scoped>
.input-area{
  display: flex;
  align-items: center;
  justify-content: center;
}

.outside-div{
  height: 8rem;
}


input {
  font-size: 1.25em;
  border-radius: 2rem;
  border-width: 1px;
  outline: none;
  border: 1px solid rgb(218, 220, 224);
  padding: 0.25em;
  
}

select:focus,
button:focus {
  outline: none;
}
/* make custom outline  https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus */
input:focus {
  outline: none !important;
  
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}






/* tooltip-searchs on hover of anchors 

https://www.w3.org/TR/css-anchor-position-1/  https://www.w3.org/TR/css-anchor-position-1/

Uses new in 2023 Anchor CSS feature
*/

.tooltip-search-anchor {
  border: 2px solid rgb(255, 255, 255);
  padding: .1rem 0.5rem 0.1rem 0.5rem;
  margin-bottom: 0rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  cursor: help;
  position: relative;
}



.tooltip-search-anchor::after {
  content: "?";
  font-weight: bold;
}

.tooltip-search {
  line-height: 1.5;
  display: none;
  text-align: left;
  position: absolute;
  left: calc(anchor(implicit right) + .25em);
  bottom: calc(anchor(implicit top) + .25em);
}

.tooltip-search-anchor:hover>.tooltip-search {
  display: initial;
  color: rgb(18, 18, 18);
}

/* clickable tooltip-searchs using Popup API and anchor positioning API */
.tooltip-search{
  background: white;
  padding: .75rem;
  border-radius: 1rem;  
  width: 18.75rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
 margin-top: -10rem;
 margin-left: -0.6rem;
}


</style>
