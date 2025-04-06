new Vue({
    el: "#app",
    data: {
        posts: [],
    },
    mounted() {
        // Fetch data using jQuery
        $.getJSON("https://jsonplaceholder.typicode.com/posts", (data) => {
            // Update Vue data with fetched posts
            this.posts = data.map((post) => ({
                id: post.id,
                title: post.title,
            }));
        });
    },
});
