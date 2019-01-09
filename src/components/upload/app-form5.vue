<template>
    <div>
    <input @change="changeLeftInput" class="formInput" type="file" name="uploadFiles[]" ref="leftButton" />
    <input @change="changeRightInput" class="formInput" type="file" name="uploadFiles[]" ref="rightButton" />
    <input @change="changeCenterInput" class="formInput" type="file" name="uploadFiles[]" ref="centerButton" />

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
            },
            changeRightInput: function () {
                this.iconRight = '/images/done.png';
            },
            changeCenterInput: function () {
                this.iconCenter = '/images/done.png';
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