const app = Vue.createApp({})

app.component('app-mypost', {
    data() {
        return {
            statPosts: [],
            strStatus: ''
        }
    },
    template: '#mypost-template',
    methods: {
        addStatus() {
            if (this.strStatus.trim() !== '') {
                this.statPosts.unshift(this.strStatus);
                this.strStatus = '';
            }
        },
        removeStatus(index) {
            this.statPosts.splice(index, 1);
        }
    }
});

app.mount('#app');
