<template lang="">
    <section>
        <div class="image-container">
            <img src="../img/orange_check.png" class="d-flex justify-content-center" style="width: 150px">
            </img>
        </div>
        <h1 class="text-center fw-bolder">
            Grazie per aver acquistato da DeliveBoo!<br>Stiamo elaborando il tuo ordine! 
        </h1>
    </section>
    <h2 class="px-5 fw-bold">
        Riepilogo ordine:
    </h2>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    section{
        flex-wrap: wrap;
        color: #fd7f00;
        margin-top: 250px;
        margin-bottom: 100px;
    }

    .image-container{
        display: flex;
        justify-content: center;
    }

</style>