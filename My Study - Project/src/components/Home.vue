<template>
    <h1>Welcome {{ name }}!</h1>
    <form @submit.prevent="">
        <label for="first"><input v-model="first" name="first"></label>
        <label for="second"><input v-model="second" name="second"></label>
        <p>Image Selection</p>
        <input type="radio" name="mountain" value="mountain" v-model="imageSelection" selected>
        <label for="mountain">Mountain</label><br>
        <input type="radio" name="ocean" value="ocean" v-model="imageSelection">
        <label for="ocean">Ocean</label><br>
    </form>
    <div >
        <img class="image" v-if="imageSelection === 'mountain'" src="../assets/mountain.jpg">
        <img class="image" v-else src="../assets/ocean.jpg">
    </div>
   
</template>

<script setup>

    import { computed } from 'vue'

    const first = defineModel('first');
    const second = defineModel('second');
    const imageSelection = defineModel('imageSelection');

    imageSelection.value="mountain";

    const name = computed(() => first.value || second.value ? `${first.value || ''}${second.value ? ' ' : ''}${second.value || ''}` : 'Unknown');

    const image = computed(() => imageSelection === 'mountain' ? 'mountain.jpg' : 'ocean.jpg');

</script>

<style scoped>
    .image {
        width: 400px;
    }
</style>