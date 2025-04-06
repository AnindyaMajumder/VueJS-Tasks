<template>
    <div class="table-responsive bg-white">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col" id="codeHeading">Code</th>
                    <th scope="col" id="descHeading">Description</th>
                    <th scope="col" id="credHeading">Credit Points</th>
                    <th scope="col" id="typeHeading">Type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="u in units">
                    <td headers="codeHeading">{{u.code}}</td>
                    <td headers="descHeading">{{u.desc}}</td>
                    <td headers="credHeading">{{u.cp}}</td>
                    <td headers="typeHeading">{{u.type}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const units = defineModel('units');
units.value = [];

onMounted(async () => {
    const response = await fetch("./units.json");
    units.value = await response.json();
});

</script>