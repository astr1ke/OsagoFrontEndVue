<template>
    <div>
        <input @change="changeLeftInput" class="formInput" type="file" name="uploadFiles[]" ref="leftButton" v-bind:id="number*10"/>
        <input @change="changeRightInput" class="formInput" type="file" name="uploadFiles[]" ref="rightButton" v-bind:id="number*10+1"/>

        <input type="hidden" v-bind:name="'hiddenField'+this.number*10" >
        <input type="hidden" v-bind:name="'hiddenField'+this.number*10+1">

        <button class="ButtonLeft" @click="clickLeftButton">А</button>
        <img class="iconLeft" :src="iconLeft" id="Form3UploadVisibleDoneLeft">

        <button class="ButtonRight" @click="clickRightButton">Б</button>
        <img class="iconRight" :src="iconRight" id="Form3UploadVisibleDoneRight">
        <br/>
    </div>
</template>

<script>
    export default {
        props: ['number'],
        data () {
            return {
                leftButtonId: 'id' + Math.floor(Math.random() * (1000)),
                rightButtonId: 'id' + Math.floor(Math.random() * (1000)),
                iconLeft: '/images/wait.png',
                iconRight: '/images/wait.png',
            }
        },
        methods: {
            clickLeftButton: function() {
                this.$refs.leftButton.click()
            },
            clickRightButton: function() {
                this.$refs.rightButton.click()
            },
            changeLeftInput: function () {
                this.iconLeft = '/images/done.png';
                this.putFileToHidden(this.number*10, 'hiddenField'+this.number*10);
                document.getElementById(this.number*10).setAttribute("name", "");
            },
            changeRightInput: function () {
                this.iconRight = '/images/done.png';
                this.putFileToHidden(this.number*10+1, 'hiddenField'+this.number*10+1);
                document.getElementById(this.number*10+1).setAttribute("name", "");
            },

            putFileToHidden: function (idField, hiddenFieldName) {
                let files = document.getElementById(idField).files;
                for(let i = 0; i < files.length; i++) {
                    this.resizeAndUpload(files[i], hiddenFieldName);
                }
            },

            resizeAndUpload: function (file, name) {
                var reader = new FileReader();
                reader.onloadend = function() {

                    var tempImg = new Image();
                    tempImg.src = reader.result;
                    tempImg.onload = function() {

                        var MAX_WIDTH = 1920;
                        var MAX_HEIGHT = 1080;
                        var tempW = tempImg.width;
                        var tempH = tempImg.height;
                        if (tempW > tempH) {
                            if (tempW > MAX_WIDTH) {
                                tempH *= MAX_WIDTH / tempW;
                                tempW = MAX_WIDTH;
                            }
                        } else {
                            if (tempH > MAX_HEIGHT) {
                                tempW *= MAX_HEIGHT / tempH;
                                tempH = MAX_HEIGHT;
                            }
                        }

                        var canvas = document.createElement('canvas');
                        canvas.width = tempW;
                        canvas.height = tempH;
                        var ctx = canvas.getContext("2d");
                        ctx.drawImage(this, 0, 0, tempW, tempH);

                        var imageData = canvas.toDataURL('image/jpeg', 0.3);
                        document.getElementsByName(name)[0].setAttribute("value", imageData);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    }
</script>

<style scoped>
    .iconLeft {
        height: 30px;
        width: 30px;
        margin-right: 17px
    }
    .iconRight {
        height: 30px;
        width: 30px;
    }
    .ButtonLeft {
        max-width: 258px !important;
        height: 45px;
        margin-right: 10px !important;
        margin-bottom: 10px !important
    }
    .ButtonRight {
        max-width: 258px !important;
        height: 45px;
        margin-right: 10px !important;
        margin-bottom: 10px !important
    }
    .formInput {
        display: none;
    }
    @media screen and (max-width:780px){
        .ButtonLeft,
        .ButtonRight {
            max-width: calc(100% / 2 - 60px) !important;
        }
    }
</style>