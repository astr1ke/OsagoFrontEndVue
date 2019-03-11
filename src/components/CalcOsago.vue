<template>
    <div>
        <section class="blog-content-area section-padding-0-100">
            <div class="container">
                <div class="row justify-content-center">
                    <!-- Blog Posts Area -->
                    <div class="col-12 col-lg-8">
                        <div class="blog-posts-area content_page">
                            <h1 class="center" style="font-size: 36px; margin-top: 30px">Калькулятор Осаго</h1>

                            <div class="mb-3 center">
                                <div id="calc-demo" style="border:1px solid #ecf0f1; overflow: hidden">
                                    <iframe id="calc-iframe" width="100%" height="300" style="width: 1%; min-width: 100%; vertical-align: top;" scrolling="no" src="https://calcus.ru/kalkulyator-osago?embed=1" frameborder="0"></iframe>
                                </div>
                            </div>

                            <div class="related-posts clearfix">
                                <!-- Line -->
                                <div class="curve-line bg-img mb-50" style="background-image: url(img/core-img/breadcrumb-line.png);"></div>

                                <h2 class="headline">Последние новости</h2>
                                <div class="row">
                                    <div class="col-12 col-md-6" v-for="(oneNews, index) in newsData" v-bind:key="oneNews.id">
                                        <div class="single-blog-post related-post" v-if="index < 2">
                                            <div class="post-thumbnail mb-50">
                                                <router-link :to="'/news/' + oneNews.id">
                                                    <img :src="oneNews.file" alt="" style="width: 300px; height: 200px; object-fit: cover">
                                                </router-link>
                                            </div>
                                            <div class="post-content mb-50">
                                                <p class="post-date">{{oneNews.data.date.substr(0, 10)}}</p>
                                                <router-link class="post-title" :to="{path: '/news/' + oneNews.id}">
                                                    <h4>{{oneNews.title}}</h4>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Line -->
                                <div class="curve-line bg-img" style="background-image: url(img/core-img/breadcrumb-line.png);"></div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-sm-9 col-md-6 col-lg-4 hide-column">
                        <div class="post-sidebar-area">

                            <RightMenu></RightMenu>

                            <div class="single-widget-area">
                                <div class='sidebar_wrapper center margin-top'>
                                    <iframe class="sidebar_inst" src="//widget.instagramm.ru/?imageW=2&imageH=2&thumbnail_size=117&type=0&typetext=osago_aleksandr&head_show=1&profile_show=1&shadow_show=1&bg=255,255,255,1&opacity=true&head_bg=46729b&subscribe_bg=ad4141&border_color=c3c3c3&head_title=" allowtransparency="true" frameborder="0" scrolling="no" style="border:none;overflow:hidden;width:260px;height:399px;"></iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    import config from '../config.json'
    import RightMenu from './layouts/RightMenu'

    export default {
        name: "CalcOsago",
        components: {RightMenu},
        props: ['idNews'],
        data() {
            return {
                newsData: [],
                article: [],
                apiUrl: config.apiUrl
            }
        },
        watch: {
            '$route' () {
                for (let i = 0; i < this.newsData.length; i++) {
                    console.log('в воче')
                    if (this.newsData[i].id == this.idNews) {
                        this.article = this.newsData[i]
                    }
                }
            }
        },
        mounted() {
            if (this.$store.state.newsData.length > 0) {
                console.log('были статьи')
                this.newsData = this.$store.state.newsData
                this.article = takeArticle(this.idNews, this.newsData)
            } else {
                console.log('не было статей')
                axios
                    .get(this.apiUrl + '/api/articles/all/1')
                    .then(response => {
                        this.newsData = response.data
                        console.log(this.newsData)
                        this.$store.state.newsData = response.data
                        this.article = takeArticle(this.idNews, this.newsData)
                    })
            }
            console.log('после получения')
            function takeArticle(idNews, newsData) {
                for (let i = 0; i < newsData.length; i++) {
                    if (newsData[i].id == idNews) {
                        console.log(newsData[i])
                        return newsData[i]

                    } else {
                        console.log('статьи не найдено!!!')
                    }
                }
            }

        }
    }
</script>

<style scoped>
    p {
        font-family: "Poppins", sans-serif;
        color: #595959;
        font-size: 16px;
        line-height: 2;
        font-weight: 400;
    }
    body {
        font-family: "Poppins", sans-serif;
        font-size: 14px;
    }
    .margin-top {
        margin-top: 50px;
    }
    .single-post-details-area .post-content .post-date {
        font-weight: 500;
        font-size: 13px;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #e59f80;
    }
    .margin-top-img {
        margin-top: 50px;
    }
    .size-title {
        font-size: 36px;
    }
    .img-size {
        width: 100% !important;
        padding: 0px 30px 0px 0px;
    }
    @media screen and (max-width: 758px){
        .margin-top-img {
            margin-top: 5px;
        }
        .hide-column {
            display: none;
        }
        .img-size {
            width: 100% !important;
            padding: 0px ;
        }
    }
</style>