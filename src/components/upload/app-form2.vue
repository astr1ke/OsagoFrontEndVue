<template>
    <div>
        <input @change="changeLeftInput" class="formInput"  type="file" name="uploadFiles[]" ref="leftButton" id="i3"/>
        <input @change="changeRightInput" class="formInput"  type="file" name="uploadFiles[]" ref="rightButton" id="i4"/>

        <input type="hidden" name="hiddenField3">
        <input type="hidden" name="hiddenField4">

        <button class="ButtonLeft" @click="clickLeftButton">Лицевая сторона</button>
        <img class="iconLeft" :src="iconLeft" id="Form3UploadVisibleDoneLeft">

        <button class="ButtonRight" @click="clickRightButton">Обратная сторона </button>
        <img class="iconRight" :src="iconRight" id="Form3UploadVisibleDoneRight">
    </div>
</template>

<script>
    export default {
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
                this.$emit('change1', true)
            },
            clickRightButton: function() {
                this.$refs.rightButton.click()
                this.$emit('change2', true)
            },
            changeLeftInput: function () {
                this.iconLeft = '/images/done.png';
                this.putFileToHidden('i3', 'hiddenField3');
                document.getElementById('i3').setAttribute("name", "");
            },
            changeRightInput: function () {
                this.iconRight = '/images/done.png';
                this.putFileToHidden('i4', 'hiddenField4');
                document.getElementById('i4').setAttribute("name", "");
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
        margin-right: 10px !important;
        margin-bottom: 10px !important
    }
    .ButtonRight {
        max-width: 258px !important;
        margin-right: 10px !important;
        margin-bottom: 10px !important
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
</style>