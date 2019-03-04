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
        margin-bottom: 15px;
    }
    @media screen and (max-height:600px){
        .mainPage {
            max-width: calc(100% - 18px) !important;
            align-items: center !important;
            border-radius: 20px !important;
            margin-bottom: 25px !important
        }
    }
</style>
