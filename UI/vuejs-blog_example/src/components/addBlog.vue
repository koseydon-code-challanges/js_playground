<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!this.blog.submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories"/>
                <label>Wizard</label>
                <input type="checkbox" value="wizard" v-model="blog.categories"/>
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories"/>
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories"/>
            </div>
            <label>Author:</label>
            <select v-model="blog.author" >
                <option v-for="(author, index) in blog.authors" v-bind:key="index">{{ author }}</option>
            </select>
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="blog.submitted">
            <h3>Thank for adding your post</h3>
        </div>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="(categorie, index) in blog.categories" v-bind:key="index">{{ categorie }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
// Imports
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                authors: ["Net Ninja", "The Angular Avenger", "The Vue Vindicator"],
                submitted: false,
            }
        }
    },
    methods: {
        post: function() {
          const data = { title: this.blog.title , content: this.blog.content, categories: this.blog.categories, author: this.blog.author };
              this.$http.post("http://localhost:3000/add", data).then(res => {
              this.blog.submitted = true;
        });
        } 
    }  
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px; 
}
#checkboxes label{
    display: inline-block;
}
</style>