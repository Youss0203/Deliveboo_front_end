<template lang="">
<div class="container">
    <div class="row">
        <div class="col-8">
            <div class="col-12">
                <div v-for="dish in dishes">
                <div class="card mb-3 mt-5">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img :src="dish.img_url" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class=" col-12 col-md-6">
                            <div class="card-body">
                                <h5 class="card-title fw-bold fs-2">{{ dish.name }}</h5>
                                <p class="card-text fs-6">Ingredienti : {{ dish.ingredients }}</p>
                                <p class="card-text fs-6">Prezzo : {{ dish.price }} €</p>
                                <button class="btn btn-success">Aggiungi al carello</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        <div class="col-4">
            <!--qui ci deve andare il carrello-->

            
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'AppMain',

    data() {
        return {
            dishes: [],
        }
    },

    methods: {
        getDishes() {
            axios
                .get("http://127.0.0.1:8000/api/dishes", {
                    params: {
                        restaurant: this.$route.params.restaurant
                    },
                })
                .then((response) => {
                    console.log(response.data.results);
                    this.dishes = response.data.results;
                })
                .catch(function (error) {
                    console.warn(error);
                });
        },
    },

    created() {
        this.getDishes();

    }
}
</script>
<style lang="scss"></style>