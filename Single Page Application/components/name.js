const NameTest = {
    data() {
        return {
            name: ""
        }
    },
    template: `
        <h1>Name Test</h1>
        <p>Please enter your name:
        <input type="text" v-model="name"></p>
        <p v-if="name.toLowerCase() === 'seam'">Awesome name!</p>
        <p v-else>not my name</p>
    `
}

export default NameTest;