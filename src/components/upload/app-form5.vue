<template>
    <div>
    <input @change="changeLeftInput" class="formInput" type="file" name="uploadFiles[]" ref="leftButton" id="i5"/>
    <input @change="changeRightInput" class="formInput" type="file" name="uploadFiles[]" ref="rightButton" id="i6"/>
    <input @change="changeCenterInput" class="formInput" type="file" name="uploadFiles[]" ref="centerButton" id="i7"/>

    <input type="hidden" name="hiddenField5">
    <input type="hidden" name="hiddenField6">
    <input type="hidden" name="hiddenField7">

        <button class="formButtonLeft" @click="clickLeftButton">ПТС 1 сторона</button>
    <img class="iconLeft" :src="iconLeft" id="Form3UploadVisibleDoneLeft">

    <button class="formButtonRight" @click="clickRightButton">ПТС 2 сторона</button>
    <img class="iconRight" :src="iconRight" id="Form3UploadVisibleDoneRight">

    <button class="addDKP" @click="clickCenterButton">Договор Купли Продажи</button>
    <img class="iconCenter" :src="iconCenter" id="Form3UploadVisibleDoneCenter">

    <button @click="$emit('to4step')" class="doneButton" type="submit">Сохранить и вернуться</button>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                leftButtonId: 'id' + Math.floor(Math.random() * (1000)),
                rightButtonId: 'id' + Math.floor(Math.random() * (1000)),
                centerButtonId: 'id' + Math.floor(Math.random() * (1000)),
                iconLeft: '/images/wait.png',
                iconRight: '/images/wait.png',
                iconCenter: '/images/wait.png',
            }
        },
        methods: {
            clickLeftButton: function() {
                this.$refs.leftButton.click()
                this.$emit('change1', true)
            },
            clickRightButton: function() {
                this.$refs.rightButton.click()
                this.$emit('change2', true)
            },
            clickCenterButton: function() {
                this.$refs.centerButton.click()
                this.$emit('change3', true)
            },
            changeLeftInput: function () {
                this.iconLeft = '/images/done.png';
                this.putFileToHidden('i5', 'hiddenField5');
                document.getElementById('i5').setAttribute("name", "");
            },
            changeRightInput: function () {
                this.iconRight = '/images/done.png';
                this.putFileToHidden('i6', 'hiddenField6');
                document.getElementById('i6').setAttribute("name", "");
            },
            changeCenterInput: function () {
                this.iconCenter = '/images/done.png';
                this.putFileToHidden('i7', 'hiddenField7');
                document.getElementById('i7').setAttribute("name", "");
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
    .iconCenter {
        height: 30px;
        width: 30px;
    }
    .formButtonLeft {
        max-width: 258px !important;
        margin-right: 10px !important;
    }
    .formButtonRight {
        max-width: 258px !important;
        margin-right: 10px !important;
    }
    .formInput {
        position: absolute;
        display: block;
        overflow: hidden;
        width: 0;
        height: 0;
        border: 0;
        padding: 0;
    }
    .addDKP {
        background: #5b7eb8 !important;
        max-width: 573px !important;
        margin-right: 10px !important
    }

</style>