<template>
    <div id="single-blog">
        <h1>{{ this.blog.title }}</h1>
        <article>{{ this.blog.content }}</article>
        <p>Categorie(s): {{ this.blog.categories }}</p>
        <p>Author: {{ this.blog.author }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created(){  
        this.$http.get('http://localhost:3000/single-item/' + this.id).then(function(data){
            //console.log(data.body)
            this.blog = data.body
            /*var count;
            //console.log(data.body);
            for (count=0; count < data.body.length; count++){
                if (data.body[count]._id == this.id){
                    this.blog = data.body[count]
                    break;
                }
            }*/
        });
    }
}
</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>