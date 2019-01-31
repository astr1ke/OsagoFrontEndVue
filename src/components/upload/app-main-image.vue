<template>
    <img class="mainPage" :src="src" >
</template>

<script>
    export default {
        props: ['src']
    }
</script>

<style scoped>
    .mainPage {
        border-radius: 20px !important;
    }
    @media screen and (max-width:780px){
        .mainPage {
            max-width: calc(100% - 18px) !important;
            align-items: center !important;
            border-radius: 20px !important;
            margin-bottom: 25px !important
        }
    }
</style>
