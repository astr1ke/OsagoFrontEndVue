<template>
    <div>
        <input @change="changeLeftInput" class="formInput"  type="file" name="uploadFiles[]" ref="leftButton"/>
        <input @change="changeRightInput" class="formInput"  type="file" name="uploadFiles[]" ref="rightButton"/>

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
            },
            changeRightInput: function () {
                this.iconRight = '/images/done.png';
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