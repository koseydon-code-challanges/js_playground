<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h3>List Blog Titles</h3>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="(blog, index) in filteredBlogs" class="single-blog" v-bind:key="index">
            <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>

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
        this.$http.get('').then(function(data){
            this.blogs = data.body.slice(0,10);
        })
    },
    filters: {
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    directives: {
        'rainbow':{
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString().slice(2,8);
           }
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