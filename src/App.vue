<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style>
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
    /*@import "../static/css/main.css";*/
</style>
<script>
export default{
   data(){
       return{

       }
   },
   // 使用watch 监听$router的变化,
    watch: {
        '$route': function(to,from){
    　    document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        }
    },
   methods: {

   },
}
</script>
