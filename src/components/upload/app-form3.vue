<template>
    <div>
        <h5 v-if="currentButtonGroupCount===0">Если Вам нужна ограниченая страховка, добавьте водителей!</h5>
        <appAddDriverButton :style="visibleButtonsGroup.visibleButtons1" number="1"></appAddDriverButton>
        <appAddDriverButton :style="visibleButtonsGroup.visibleButtons2" number="2"></appAddDriverButton>
        <appAddDriverButton :style="visibleButtonsGroup.visibleButtons3" number="3"></appAddDriverButton>
        <appAddDriverButton :style="visibleButtonsGroup.visibleButtons4" number="4"></appAddDriverButton>

        <button @click="addButtonGroup" :style="visibleButtonAddDriver" class="addDriverButton">Добавить водителя</button>
        <button class="doneButton" @click="this.$parent.nextPage">К последнему шагу</button>
    </div>
</template>

<script>
    import appAddDriverButton from './app-add-driver-button.vue'
    export default {
        data () {
            return {
                currentButtonGroupCount: 0,
                visibleButtonAddDriver: {display: 'initial'},
                visibleButtonsGroup: {
                    visibleButtons1: {display: 'none'},
                    visibleButtons2: {display: 'none'},
                    visibleButtons3: {display: 'none'},
                    visibleButtons4: {display: 'none'}
                }
            }
        },
        methods: {
            addButtonGroup: function () {
                this.currentButtonGroupCount++;
                if (this.currentButtonGroupCount > 3) {
                    this.visibleButtonAddDriver = {display: 'none'}
                }
                this.visibleButtonsGroup['visibleButtons' + this.currentButtonGroupCount] = {display: 'initial'}
            }
        },
        components: {
            appAddDriverButton
        }
    }
</script>


<style scoped>
    .addDriverButton {
        max-width: 613px !important;
        background: #5b7eb8 !important;
        margin-top: 10px !important
    }
    .doneButton {
        max-width: 613px !important;
        background: #d22f2f !important
    }
    @media screen and (max-width:780px){
        .doneButton,
        .addDriverButton {
            max-width: calc(100% - 15px) !important;
        }
    }
</style>
