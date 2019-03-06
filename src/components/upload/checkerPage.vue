<template>
    <div>

        <label> Выберите тип страховки:</label><br>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label @click="$emit('checkerDriver', 'yes')" class="btn btn-secondary active checkbox-btn">
                <input v-model="checkerDriver" type="radio" value="yes" autocomplete="off" checked> Ограниченая
            </label>
            <label @click="$emit('checkerDriver', 'no')" class="btn btn-secondary checkbox-btn">
                <input v-model="checkerDriver" type="radio" value="no" autocomplete="off"> Неограниченая
            </label>
        </div>


        <label> Нужно ли менять собственника ТС (оформление страховки перед постановкой на учет в ГАИ):</label><br>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label @click="$emit('checkerDocument', 'yes')" class="btn btn-secondary active checkbox-btn2">
                <input v-model="checkerDocument" type="radio" value="yes" autocomplete="off" checked> Да, буду переоформлять
            </label>
            <label @click="$emit('checkerDocument', 'no')" class="btn btn-secondary checkbox-btn2">
                <input v-model="checkerDocument" type="radio" value="no" autocomplete="off"> Нет, ТС уже оформлено
            </label>
        </div>

    </div>
</template>

<script>
    export default {
        name: "checkerPage",
        data () {
            return {
                checkerDriver: 'yes',
                checkerDocument: 'yes'
            }
        },
    }
</script>

<style scoped>
    .checkbox-btn {
        width: 150px;
        height: 50px;
        padding: 14px;
        margin-bottom: 25px;
    }
    .checkbox-btn2 {
        width: 200px;
        height: 50px;
        padding: 14px;
        margin-bottom: 20px;
    }
</style>