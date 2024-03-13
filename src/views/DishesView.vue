<template lang="">
            <div class="col-6" v-for="dish in dishes">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img :src="dish.img_url" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class=" col-6">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">{{ dish.name }}</h5>
                                <p class="card-text">Ingredienti : {{ dish.ingredients }}</p>
                                <p class="card-text">Prezzo : {{ dish.price }} €</p>
                            </div>
                        </div>
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