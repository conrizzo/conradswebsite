<!-- using Composition API -->

<!-- 
making the custom search functions is a bit of a tricky process  
.input-container input is used to offset the placeholder text to the right 
.widen-container is an activated class that makes the search container wider
The combination of these 2 makes the search icon pop up and widens the container
-->

<template>
    <div class="outside-div">
        <div class="input-area">
            <!-- 
                click.stop prevents clicking outside the search input propogating to divs outside this 
                Hence, it allows the dropdown to close when clicking anywhere in class .input-area or .outside-div
            -->
            <div @click.stop class="search-container" :class="{ 'widen-container': inputFocused || dropdownOpen }">
                <div class="input-container">
                    <svg v-show="inputFocused" class="input-icon" xmlns="http://www.w3.org/2000/svg" height="16"
                        width="16" viewBox="0 0 512 512" fill="rgb(218, 220, 224)">
                        <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>

                    <input :class="{
                        'remove-bottom-border-radius': searchTerm.length > 0 && filteredItems.length > 0 && dropdownOpen
                    }" ref="inputField" type="text" v-model="searchTerm" @focus="handleSearchFocus"
                        @blur="handleSearchBlur" placeholder="Search projects...">
                </div>
                <!-- This template creates the dropdown menu -->
                <!-- This first checks IF links are https -->
                <template v-for="item in filteredItems" :key="item.id">
                    <!-- Check if the link is an HTTPS external link -->
                    <a v-if="isExternalLink(item.to)" :href="item.to" class="format-search-links" target="_blank"
                        rel="noopener noreferrer">
                        <div v-show="dropdownOpen">
                            <div v-if="searchTerm.length > 0">
                                <!-- SVG and item text here for external links -->
                                <svg class="inline-svg-right-padding" xmlns="http://www.w3.org/2000/svg" height="16"
                                    width="16" viewBox="0 0 512 512" fill="rgb(218, 220, 224)">
                                    <path
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>
                                {{ item.text }}
                            </div>
                        </div>
                    </a>
                    <!-- Use RouterLink for internal paths -->
                    <RouterLink v-else :to="item.to" class="format-search-links">
                        <div v-if="searchTerm.length > 0">
                            <div v-show="dropdownOpen">
                                <!-- SVG and item text here for internal links -->
                                <svg class="inline-svg-right-padding" xmlns="http://www.w3.org/2000/svg" height="16"
                                    width="16" viewBox="0 0 512 512" fill="rgb(218, 220, 224)">
                                    <path
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>
                                {{ item.text }}
                            </div>
                        </div>
                    </RouterLink>
                </template>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import ProductInventory from '../Navigation/ProjectLinks';

const searchTerm = ref('');
const items = ref(ProductInventory);
const inputField = ref<HTMLInputElement | null>(null);
const dropdownOpen = ref(false);
const inputFocused = ref(false);
const searchInputMarginLeft = ref('0px');

/*
onMounted(() => {
    if (window.innerWidth > 600 && inputField.value) {
        inputField.value.focus();
    }
});
*/

watch(dropdownOpen, (newValue) => {
    if (newValue) {
        document.addEventListener('click', closeDropdown);
    } else {
        document.removeEventListener('click', closeDropdown);
    }
});

onMounted(() => {
    // verify not null value
    if (inputField.value) {
        inputField.value.focus();
    }
});

onBeforeUnmount(() => {
    document.removeEventListener('click', closeDropdown);
});

function closeDropdown(event: MouseEvent) {
    // Null check
    if (inputField.value && !inputField.value.contains(event.target as Node)) {
        dropdownOpen.value = false;
    }
}

function handleSearchFocus() {
    dropdownOpen.value = true;
    inputFocused.value = true;
    searchInputMarginLeft.value = "0px";
}
const handleSearchBlur = () => {
    inputFocused.value = false;
    searchInputMarginLeft.value = '0px';

};

function isExternalLink(url: string) {
    return /^(https?:|mailto:|tel:)/.test(url);
}

const filteredItems = computed(() => {
    if (!searchTerm.value) {
        return items.value;
    }
    return items.value.filter(item =>
        item.text.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
});
</script>

<style scoped>
/* Use this to align the SVG icon with the input text */
.inline-svg-right-padding {
    display: inline-block;
    margin-right: .5rem;
}

.input-area {
    display: flex;
    align-items: center;
    justify-content: right;
}

.format-search-links {
    background: #fff;
    color: rgb(18, 18, 18);
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    padding-left: 10px;
    z-index: 10;
    padding-top: -1rem;
    /* put search results in front of all other content on the screen */
}

.format-search-links:first-of-type {
    border-top-right-radius: 0rem;
    border-top-left-radius: 0rem;
}

.format-search-links:last-child {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

.format-search-links:hover {
    background: rgb(233, 233, 234);
}

.search-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    /* this formats the shadowing correctly */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    width: calc(100% - 40rem);
    margin-right: 1rem;
}

/*
.widen-container {
    width: calc(100% - 38rem);
}
    */

.widen-container {}

.format-search-links:visited {
    color: rgb(18, 18, 18);
}

.outside-div {
    height: 3rem;
}

input {
    font-size: 1.5rem;
    border-radius: 1rem;
    border-width: 1px;
    outline: none;
    border: none;
    padding: .5rem;
    padding-left: 2rem;
    width: 100%;
}

.remove-bottom-border-radius {
    border-bottom: none;
    border-bottom-right-radius: 0rem;
    border-bottom-left-radius: 0rem;
}


.add-bottom-radius {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

select:focus,
button:focus {
    outline: none;
}

/* make custom outline  https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus */
input:focus {
    outline: none !important;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* tooltip-searchs on hover of anchors 
https://www.w3.org/TR/css-anchor-position-1/  https://www.w3.org/TR/css-anchor-position-1/

Uses new in 2023 Anchor CSS feature
*/

/* input field icon */
.input-container {
    position: relative;
    display: inline-block;
    box-shadow: none;
    width: 100%;
}

.input-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 0rem;
}

.input-container input {
    padding-left: 2.5rem;
    box-shadow: none;
}

.input-container input:focus {
    padding-left: 2.5rem;
    box-shadow: none;

}

@media (max-width: 70rem) {

    .remove-bottom-border-radius {
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: .5rem;
    }

    .search-container {
        width: 100%;
        margin-left: .5rem;
        margin-right: .5rem;
    }

    input {
        font-size: 1.6rem;
    }

    .format-search-links {
        font-size: 1.6rem;
    }

    .format-search-links:first-of-type {
        margin-top: 4px;
        border-top-right-radius: .5rem;
        border-top-left-radius: .5rem;
    }

    .format-search-links:last-child {
        border-bottom-right-radius: .4rem;
        border-bottom-left-radius: .4rem;

    }
}
</style>
./productInventoryOptionsData