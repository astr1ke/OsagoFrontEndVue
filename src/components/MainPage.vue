<template>

<div>
    <section id="main-slider" class="no-margin">
        <div class="carousel slide">
            <ol class="carousel-indicators">
                <li data-target="#main-slider" data-slide-to="0" class="active"></li>
                <li data-target="#main-slider" data-slide-to="1"></li>
                <li data-target="#main-slider" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">

                <div class="item active" style="background-image: url(images/slider/mers.jpg)">
                    <div class="container margin-top">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="carousel-content">
                                    <h1 class="animation animated-item-1 h1-font-size">{{zagolovok}}</h1>
                                    <div class="animation animated-item-2">
                                        {{zagolovokText}}
                                    </div>
                                    <router-link class="btn-slide animation animated-item-3 size-mobile margin-top1" :to="{name: 'download'}">Загрузить документы</router-link>
                                    <a class="btn-slide white animation animated-item-3 size-mobile margin-top2" href="tel:+79186321007"><span class="glyphicon glyphicon-earphone"></span>  Позвонить нам</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="item" style="background-image: url(images/slider/bmw2.jpg)">
                    <div class="container margin-top">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="carousel-content">
                                    <h1 class="animation animated-item-1 h1-font-size">{{zagolovok2}}</h1>
                                    <div class="animation animated-item-2">
                                        {{zagolovokText2}}
                                    </div>
                                    <router-link class="btn-slide animation animated-item-3 size-mobile margin-top1" :to="{name: 'download'}">Загрузить документы</router-link>
                                    <a class="btn-slide white animation animated-item-3 size-mobile margin-top2" href="tel:+79186321007"><span class="glyphicon glyphicon-earphone"></span>  Позвонить нам</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item" style="background-image: url(images/slider/audi.jpg)">
                    <div class="container margin-top">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="carousel-content">
                                    <h1 class="animation animated-item-1 h1-font-size">{{zagolovok2}}</h1>
                                    <div class="animation animated-item-2">
                                        {{zagolovokText2}}
                                    </div>
                                    <router-link class="btn-slide animation animated-item-3 size-mobile margin-top1" :to="{name: 'download'}">Загрузить документы</router-link>
                                    <a class="btn-slide white animation animated-item-3 size-mobile margin-top2" href="tel:+79186321007"><span class="glyphicon glyphicon-earphone"></span>  Позвонить нам</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <a class="prev hidden-xs hidden-sm" href="#main-slider" data-slide="prev">
            <i class="fa fa-chevron-left"></i>
        </a>
        <a class="next hidden-xs hidden-sm" href="#main-slider" data-slide="next">
            <i class="fa fa-chevron-right"></i>
        </a>
    </section>

    <section id="services" class="service-item" style="margin-top: 50px">
        <div class="container">
            <div class="center fadeInDown">
                <h2>Наши услуги</h2>
                <p class="lead">Мы предоставляем полный спектр услуг по страхованию, <br> и подготовки документов:</p>
            </div>
            <div class="row">

                <div class="col-sm-6 col-md-4 marg">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-responsive" src="images/services/ux.svg">
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Осаго</h3>
                            <p>Оформление как обычной так и электронной версии.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4 marg">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-responsive" src="images/services/web.svg">
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Техосмотр</h3>
                            <p>Техосмотр всего за 500 рублей!</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4 marg">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-responsive" src="images/services/motion.svg">
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Каско</h3>
                            <p>Доступны услуги по оформлению полиса каско.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4 marg">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-responsive" src="images/services/mobile-ui.svg">
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Помощь при ДТП</h3>
                            <p>Оформлние европротокола и подготовка полного пакета документов для СК.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4 marg">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-responsive" src="images/services/web-app.svg">
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Подгодка документов в ГАИ</h3>
                            <p>Пакет документов для постановки на учет и смену собственника ТС.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4 marg">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-responsive" src="images/services/mobile-ui.svg">
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Консультации</h3>
                            <p>Проконсультируйтесь с нами по любым вопросам связаным со страхованием.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <br>
    </section>

    <section id="recent-works">
        <div class="container">
            <div class="center fadeInDown">
                <a name="news"></a>
                <h2>Последние новости в мире страхования</h2>
                <p class="lead"></p>
            </div>

            <div class="row">

                <div v-for="article in articles" :key="article.id">
                    <div class="col-xs-12 col-sm-6 col-md-4 single-work news">
                        <div class="recent-work-wrap">
                            <router-link :to="{path: 'news/' + article.id} "> <img class="img-responsive news-img" :src="article.file" alt="" style="height: 320px; width: 400px; object-fit: cover"> </router-link>
                            <span>{{ article.title.substr(0, 50) + '...' }}</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>

    <section id="middle" class="skill-area" style="background-image: url(images/skill-bg.png)">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 fadeInDown">
                    <div class="skill">
                        <h2>Текущий уровень лояльности:</h2>
                        <p>Большинство наших клиентов довольны нашей работой, обращаются к нам снова <br> и рекомендуют знакомым воспользоваться нашими услугами.</p>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="progress-wrap">
                        <h3>Скорость оформления</h3>
                        <div class="progress">
                            <div class="progress-bar  color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 99%">
                                <span class="bar-width">99%</span>
                            </div>

                        </div>
                    </div>

                    <div class="progress-wrap">
                        <h3>Качество обслуживания</h3>
                        <div class="progress">
                            <div class="progress-bar color2" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                                <span class="bar-width">100%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="progress-wrap">
                        <h3>Спектр услуг</h3>
                        <div class="progress">
                            <div class="progress-bar color3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                <span class="bar-width">80%</span>
                            </div>
                        </div>
                    </div>

                    <div class="progress-wrap">
                        <h3>Цена на услуги</h3>
                        <div class="progress">
                            <div class="progress-bar color4" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                                <span class="bar-width">15%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section>
        <div class="container" style="margin-bottom: 50px">
            <div class="center">
                <a name="contacts"></a>
                <h2 style="margin-top: 15px">Контакты</h2>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p class="lead"><span class="glyphicon glyphicon-home"></span> Мы находимся по адресу:</p>
                    <p class="lead" style="margin-bottom: 10px">с. Успенское ул.Крупской 36, </p>
                    <p class="lead">напротив ЦРБ </p>
                </div>
                <div class="col-md-6">
                    <p class="lead"><span class="glyphicon glyphicon-phone-alt"></span> Телефоны для связи:</p>
                    <p class="lead" style="margin-bottom: 10px"><i class="fa fa-phone-square"></i>  Основной: <a class="phone-link" href="tel:+79186321007">+7 (918) 63 21 007</a></p>
                    <p class="lead"><i class="fa fa-phone-square"></i>  Доп. номер: <a class="phone-link" href="tel:+79186321007">+7 (918) 43 55 402</a></p>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.5781569572514!2d41.37519644791012!3d44.830157929271685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f9cf56ee8c86c1%3A0xa525a357f432d94f!2z0J7QodCQ0JPQniDQkNCy0YLQvtGB0YLRgNCw0YXQvtCy0LDQvdC40LU!5e0!3m2!1sru!2sru!4v1549455194264"  width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </section>
</div>

</template>

<script>
    import config from '../config.json'
    import axios from 'axios'

    export default {
        name: "MainPage",
        data() {
            return {
                articles: [],

                zagolovok: config.info.firstPage.zagolovok,
                zagolovokText: config.info.firstPage.zagolovokText,

                zagolovok2: config.info.firstPage.zagolovok2,
                zagolovokText2: config.info.firstPage.zagolovokText2,

                apiUrl: config.apiUrl,
            }
        },
        mounted() {
            axios
                .get(this.apiUrl + '/api/articles/all/1')
                .then(response => {
                    this.articles = response.data
                    this.$store.state.newsData = response.data
                })
        }
    }
</script>

<style scoped>
    .news {
        display:inline-block;
        position:relative;

    }
    .news span {
        display:inline-block;
        position:absolute;
        bottom:0px;
        left:0px;

        /* Оформление текста */
        color:#FFF;
        font-family:Arial, Helvetica, sans-serif;
        font-size:18px;

        /* Фон */
        background-color:rgba(0,0,0,.4);
        padding:10px 30px;
    }
    .phone-link {
        all: unset;
        color: #fa483c;
    }
    .phone-link:hover {
        all: unset;
        color: #000000;
    }
    @media screen and (max-width:780px){
        .services-wrap {
            padding: 0px;
            background: #fff;
            border-radius: 4px;
            margin: 0 0 30px;
            -webkit-transition: .4s;
            transition: .4s;
            color: #707070;
            font-size: 14px;
            line-height: 26px;
        }
        .news-img {
            width: 100% !important;
        }
        .services-wrap h3 {
            font-size: 18px;
            margin: 0 0 3px;
            color: #333333;
            font-weight: 700;
        }
        .size-mobile {
            width:  100%;
            height: 58px;
            text-align: center;
            font-size: 18px !important;
            padding: 0px !important;
        }
        .margin-top1 {
            margin-top: 50px !important;
        }
        .margin-top2 {
            margin-top: 20px !important;
        }
        .h1-font-size {
            font-size: 36px !important;
        }
        .margin-top {
            margin-top: -70px;
        }
    }

</style>