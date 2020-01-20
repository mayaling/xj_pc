<template>
       
</template>

<script>
    export default {
        data() {
            return {
                id:"",

            }
        },
        created() {
            this.id = this.$route.query.id
            this.goback()
        },
        methods: {
            goback(){
                this.$router.push({path: '/readitem', query: {id:this.id}});
            }
        }
    }
</script>
      
      