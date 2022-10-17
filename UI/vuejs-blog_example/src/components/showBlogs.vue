<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h3>All Blog Articles</h3>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="(blog, index) in blogs" class="single-blog" v-bind:key="index">
            <router-link v-bind:to="'/' + blog._id"><h2>{{ blog.title | toUppercase }}</h2></router-link>
            <article>{{ blog.content | snipped }}</article>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {

    data () {
       return{
           blogs: [],
           search: ""
       }
    },
    methods: {  
        
    },
    created() {
        this.$http.get('http://localhost:3000/item').then(function(data){
            this.blogs = data.body
        })
    },
    filters: {
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    mixins: [searchMixin]
}
</script>

<style>
 #show-blogs {
     max-width: 800px;
     margin: 0 auto;
 }
 .single-blog{
     padding: 20px;
     margin: 20px 0;
     box-sizing: border-box;
     background: #eee;
 }
</style>