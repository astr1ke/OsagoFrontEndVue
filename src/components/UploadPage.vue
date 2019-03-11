<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <RightMenu style="margin-left: 0"></RightMenu>
                    <rightColumn></rightColumn>
                </div>

                <div class="col-md-8">
                    <div class="content_page">
                        <upload></upload>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import upload from './Upload'
    import rightColumn from './upload/rightColumn'
    import RightMenu from './layouts/RightMenu'

    export default {
        name: "UploadPage",
        components: {upload, rightColumn, RightMenu}
    }
</script>

<style scoped>
    @media screen and (max-width:780px){
        .col-md-4 {
            display: none !important;
        }
    }
</style>