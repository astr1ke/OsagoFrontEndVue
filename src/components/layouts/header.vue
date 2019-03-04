<template>
    <div>
        <header id="header">
            <a id="ancor-header"></a>
            <nav class="navbar navbar-inverse" role="banner">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Меню</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/"><img src="/images/logo.png" alt="logo"></a>
                    </div>

                    <div class="collapse navbar-collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li :class="{ 'active': $route.name === 'main' }"><router-link :to="{name: 'main'}">Главная</router-link></li>
                            <li><a href="/#news">Новости Страхования</a></li>
                            <li :class="{ 'active': $route.name === 'download' }"><router-link :to="{name: 'download'}">Отправить документы</router-link></li>
                            <li><a href="/#contacts">Контакты</a></li>
                        </ul>
                    </div>
                </div>
                <!--/.container-->
            </nav>
            <!--/nav-->

        </header>
        <!--/header-->
    </div>
</template>

<script>
    export default {
        name: "headerComponent"
    }
</script>

<style scoped>

</style>