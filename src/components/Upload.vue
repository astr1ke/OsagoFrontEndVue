<template>
  <div>
    <appTitle class="mainTitle" :text="mainTitle"></appTitle>
    <appMainImage  :src = "mainImage" ></appMainImage>

    <form name=inputFormName class="tools osago" @submit.prevent="onSubmit" method="post" action="http://osagoback.loc:8888/api/client/files/send" enctype="multipart/form-data" id="my-form">
      <input type="hidden" name="secret" :value="secretField">

      <appForm1 @change1="checker.form1.check1=$event" @change2="checker.form1.check2=$event" :style="{display: form1display}"></appForm1>
      <appForm2 @change1="checker.form2.check1=$event" @change2="checker.form2.check2=$event" :style="{display: form2display}"></appForm2>
      <appForm3 :style="{display: form3display}"></appForm3>
      <appForm4 @submit-button="submitMethod" @input1="phone=$event" @input2="comment=$event" :style="{display: form4display}"></appForm4>
      <appForm5 @to4step="toFourStep" @change1="checker.form5.check1=$event" @change2="checker.form5.check2=$event" @change3="checker.form5.check3=$event" :style="{display: form5display}"></appForm5>

      <button class="doneButton" :style="{display: mainButton}" @click="nextPage">Следующий шаг</button><br>
    </form>

  </div>
</template>

<script>
import appTitle from './upload/app-title.vue'
import appMainImage from './upload/app-main-image.vue'
import appForm1 from './upload/app-form1.vue'
import appForm2 from './upload/app-form2.vue'
import appForm3 from './upload/app-form3.vue'
import appForm4 from './upload/app-form4.vue'
import appForm5 from './upload/app-form5.vue'
import axios from 'axios'

export default {
  name: 'upload',
  components: {
      appForm1, appForm2, appForm3, appForm4, appForm5, appMainImage, appTitle
  },
  data() {
      return {
          checker: {
              form1: {
                  check1: false,
                  check2: false
              },
              form2: {
                  check1: false,
                  check2: false
              },
              form5: {
                  check1: false,
                  check2: false,
                  check3: false
              }
          },
          currentSetting: 1,
          pageSetting: {
              page1: {
                  mainTitle: 'Загрузите фото паспорта собственника:',
                  mainImage: '/images/passport.jpg',
                  mainButton: 'initial',
                  form1display: 'initial',
                  form2display: 'none',
                  form3display: 'none',
                  form4display: 'none',
                  form5display: 'none'
              },
              page2: {
                  mainTitle: 'Загрузите Свидетельство о регистрации ТС:',
                  mainImage: '/images/sts.jpg',
                  mainButton: 'initial',
                  form1display: 'none',
                  form2display: 'initial',
                  form3display: 'none',
                  form4display: 'none',
                  form5display: 'none'
              },
              page3: {
                  mainTitle: 'Загрузите Водительские удостоверения:',
                  mainImage: '/images/prava.jpg',
                  mainButton: 'none',
                  form1display: 'none',
                  form2display: 'none',
                  form3display: 'initial',
                  form4display: 'none',
                  form5display: 'none'
              },
              page4: {
                  mainTitle: 'Все документы загружены!!!',
                  mainImage: '/images/osago.jpg',
                  mainButton: 'none',
                  form1display: 'none',
                  form2display: 'none',
                  form3display: 'none',
                  form4display: 'initial',
                  form5display: 'none'
              },
              page5: {
                  mainTitle: 'Загрузите Паспорт ТС (ПТС) и договор купли-продажи:',
                  mainImage: '/images/pts.jpg',
                  mainButton: 'none',
                  form1display: 'none',
                  form2display: 'none',
                  form3display: 'none',
                  form4display: 'none',
                  form5display: 'initial'
              }
          }
      }
  },
  computed: {
      mainTitle: function () {
          return this.pageSetting['page' + this.currentSetting]['mainTitle']
      },
      mainImage: function () {
          return this.pageSetting['page' + this.currentSetting]['mainImage']
      },
      mainButton: function () {
          return this.pageSetting['page' + this.currentSetting]['mainButton']
      },
      form1display: function () {
          return this.pageSetting['page' + this.currentSetting]['form1display']
      },
      form2display: function () {
          return this.pageSetting['page' + this.currentSetting]['form2display']
      },
      form3display: function () {
          return this.pageSetting['page' + this.currentSetting]['form3display']
      },
      form4display: function () {
          return this.pageSetting['page' + this.currentSetting]['form4display']
      },
      form5display: function () {
          return this.pageSetting['page' + this.currentSetting]['form5display']
      },
      secretField: function () {
          let newDate = new Date();
          return newDate.getDate();

      }
  },

  methods: {
      submitMethod: function () {

          var data = new FormData(document.forms.inputFormName);
          axios.post('http://localhost/api/client/files/send', data, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              }
          })
              .then(function (response) {
                  console.log(response);
                  if (response.status === 200) {
                      alert('Отправлено отлично!!!')
                  }
              })
              .catch(function (error) {
                  console.log(error);
              });

      },
      toFourStep: function() {
          this.currentSetting = 4
      },
      nextPage: function () {
          var currentForm = 'form' + this.currentSetting;
          var m = this.checker[currentForm];
          var result = true;

          for (var i in m ){
              if (m[i] === false) {
                  alert('Заполните все документы');
                  return false
              }else{
                  result = true;
              }
          }

          if (result === true) {
              if (this.currentSetting < 5) {
                  this.currentSetting++
              }
          }
      }
  }
}
</script>

<style>
  .doneButton {
    max-width: 613px !important;
    background: #d22f2f !important
  }
  @media screen and (max-width:780px){
    .doneButton {
      max-width: calc(100% - 15px) !important;
    }
    .mainTitle {
      font-size: 28px;
    }
  }
</style>
