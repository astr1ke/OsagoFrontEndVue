<template>
    <div>

        <section class="blog-content-area section-padding-0-100">
            <div class="container">
                <div class="row justify-content-center">
                    <!-- Blog Posts Area -->
                    <div class="col-12 col-lg-8">
                        <div class="blog-posts-area">

                            <!-- Post Details Area -->
                            <div class="single-post-details-area">
                                <div class="post-thumbnail mb-30 margin-top-img">
                                    <img :src="article.file" alt="" class="img-size">
                                </div>
                                <div class="post-content">
                                    <p class="post-date">{{article.data.date.substr(0, 10)}}</p>
                                    <h4 class="post-title size-title">{{article.title}}</h4>
                                    <div class="post-meta">
                                        <a href="#"><span>Автор: </span> Александр</a>
                                        <a href="#"><i class="fa fa-eye"></i> </a>
                                    </div>
                                    <p v-html="article.text"></p>
                                </div>
                            </div>

                            <!-- Related Post Area -->
                            <div class="related-posts clearfix">
                                <!-- Line -->
                                <div class="curve-line bg-img mb-50" style="background-image: url(img/core-img/breadcrumb-line.png);"></div>

                                <!-- Headline -->
                                <h4 class="headline">Последние новости</h4>

                                <div class="row">

                                    <!-- Single Blog Post -->
                                    <div class="col-12 col-md-6" v-for="(oneNews, index) in newsData" v-bind:key="oneNews.id">
                                        <div class="single-blog-post related-post" v-if="index < 2">
                                            <!-- Thumbnail -->
                                            <div class="post-thumbnail mb-50">
                                                <router-link :to="'/news/' + oneNews.id">
                                                    <img :src="oneNews.file" alt="">
                                                </router-link>
                                            </div>
                                            <!-- Content -->
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

                    <!-- Blog Sidebar Area -->
                    <div class="col-12 col-sm-9 col-md-6 col-lg-4 hide-column">
                        <div class="post-sidebar-area">

                            <!-- ##### Single Widget Area ##### -->
                            <div class="single-widget-area">
                                <!-- Title -->
                                <div class="widget-title">
                                    <h2>Последнние новости</h2>
                                </div>

                                <!-- Single Latest Posts -->
                                <div v-bind:key="news.id" class="single-latest-post d-flex" v-for="(news, index) in newsData">
                                    <div class="post-content" v-if="index < 4">
                                        <router-link class="post-title" :to="{path: '/news/' + news.id}">
                                            <img :src="news.file" alt="">
                                            <h4>{{news.title}}</h4>
                                        </router-link>
                                    </div>
                                </div>

                                <div class='sidebar_wrapper'>
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

    export default {
        name: "News",
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
    h1, h2, h3, h4, h5, h6 {
        color: #191919;
        line-height: 1.3;
        font-weight: 400;
        font-family: "Merriweather", serif;
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