<template>
    <div>
        <input @input="$emit('input1', $event.target.value)" class="inputNumber" type="text" name="number" placeholder="Номер телефона для связи..."/>
        <input @input="$emit('input2', $event.target.value)" class="inputComment" type="text" name="comment" placeholder="Так же можете оставить коментарий"/>

        <br>
        <h5>Все готово! Теперь мы можем отправить документы!</h5>

        <button @click="$emit('submit-button')" class="doneButton" type="submit">Отправить заявку!</button>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .doneButton {
        max-width: 613px !important;
        background: #d22f2f !important
    }
    .addInfo{
        max-width: 613px !important;
        background: #5b7eb8 !important
    }
    .inputNumber {
        max-width: 288px !important;
        margin-right: 36px !important;
        margin-bottom: 20px !important;
        margin-top: 20px
    }
    .inputComment {
        max-width: 288px !important;
        margin-bottom: 20px !important;
        margin-top: 20px !important
    }
    @media screen and (max-width:780px){
        .doneButton,
        .addInfo {
            max-width: calc(100% - 15px) !important;
        }
        .inputNumber,
        .inputComment {
            border-radius: 5px !important;
            max-width: calc(100% - 15px) !important;
            margin-top: 2px !important;
        }
    }
</style>

