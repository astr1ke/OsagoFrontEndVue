<template>
    <div>
        <header id="header">
            <div class="top-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <div class="top-number">
                                <p><i class="fa fa-phone-square"></i> +0123 456 70 90</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="social">
                                <ul class="social-share">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i class="fa fa-skype"></i></a></li>
                                </ul>
                                <div class="search">
                                    <form role="form">
                                        <input type="text" class="search-form" autocomplete="off" placeholder="Search">
                                        <i class="fa fa-search"></i>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/.container-->
            </div>
            <!--/.top-bar-->

            <nav class="navbar navbar-inverse" role="banner">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"></a>
                    </div>

                    <div class="collapse navbar-collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li :class="{ 'active': $route.name === 'main' }"><router-link :to="{name: 'main'}">Главная</router-link></li>
                            <li :class="{ 'active': $route.name === 'about' }"><router-link :to="{name: 'about'}">О нас</router-link></li>
                            <li :class="{ 'active': $route.name === 'news' }"><router-link :to="{name: 'news'}">Новости</router-link></li>
                            <li :class="{ 'active': $route.name === 'download' }"><router-link :to="{name: 'download'}">Отправить документы</router-link></li>
                            <li :class="{ 'active': $route.name === 'contacts' }"><router-link :to="{name: 'contacts'}">Контакты</router-link></li>
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