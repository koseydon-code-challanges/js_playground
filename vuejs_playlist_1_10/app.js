new Vue({
    el: '#vue-app',
    data: {
        name: "Deniz",
        job: "keskose",
        website: "http://www.google.com",
        age: 31,
        x:0,
        y:0,
        logName: "",
        logAge: "",
        a: 0,
        b:0,
        available: true,
        nearby: false
    },
    methods: {
        greet: function(time){
            this.name
            return 'Good ' + time + " " +this.name;
        },
        add: function(inc){
            this.age += inc;
        },
        sub: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY; 
        },
        click: function(){
            alert("You clicked me!!")
        },
        /*
        addToA: function(){
            return this.age + this.a
        },
        addToB: function(){
            return this.age + this.b 
        }
        */
    }, 
    computed: {
        addToA: function(){
            console.log("addToA");
            return this.age + this.a;
        },
        addToB: function(){
            console.log("addToB");
            return this.age + this.b; 
        }

    }

});
