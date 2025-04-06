const Post = {
    data() {
        return {
            status: "",
            posts: []
        }
    },
    methods: {
        add: function(status){
            this.posts.push(status);
            this.status = '';
        },
        remove: function(index){
            this.posts.splice(index, 1);
        }
    },
    template: `
        <h1>Post</h1>
        <br/>
        <form @submit.prevent="add(status)">
            <label for="postContents">Status</label>
            <input type="text" name="postContents" id="postContents" v-model="status"><br>
            <button type="submit">Post</button>
            <div v-for="(p, i) in posts">
                <span>{{ p }}</span><button v-on:click="remove(i)" type="button">Delete</button>
            </div>
        </form>
    `
}

export default Post;