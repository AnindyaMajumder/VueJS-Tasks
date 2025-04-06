<template>
    <form @submit.prevent="add(strStatus)">
        <label for="postContents">Status</label>
        <input type="text" name="postContents" id="postContents" v-model="strStatus"><br>
        <button type="submit">Post</button>
        <div v-for="(p, i) in statPosts">
            <span>{{ p }}</span><button v-on:click="remove(i)" type="button">Delete</button>
        </div>
    </form>
</template>

<script setup>
const statPosts = defineModel('statPosts');
statPosts.value = [];
const strStatus = defineModel('strStatus');
strStatus.value = "";

const add = (status) => {
    statPosts.value.push(status);
    strStatus.value = '';
};

const remove = (i) => {
    const temp = statPosts.value.slice();
    temp.splice(i, 1);
    statPosts.value = temp;
};

</script>