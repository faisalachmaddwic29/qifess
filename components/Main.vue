<template>
    <label style="margin-bottom: 10px" for="test">FAISAL</label>
    <v-text-field
        id="test"
        label="Name"
        type="text"
        hide-details
        single-line
        variant="outlined"
        density="compact"
    ></v-text-field>
    <div style="width: 200px; height: 200px; background-color: red">FAISAL</div>

    <v-data-table :items="items"></v-data-table>

    <v-data-table :items="items"></v-data-table>

    <v-data-table :items="items"></v-data-table>
</template>

<script setup>
const items = [
    {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
    },
    {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
    },
    {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
    },
    {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
    },
    {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
    },
    {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
    },
    // ... more items
];
</script>
