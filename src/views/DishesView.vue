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
            <div class="card mt-5" >
                <div class="card-body">
                    <h5 class="card-title text-center">Carrello</h5>
                    <table class="table table-hover">
    <thead>
        <tr>
            <th scope="col">Piatto</th>
            <th scope="col">Prezzo</th>
            <th scope="col">Quantità</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Piatto 1</th>
            <td>19.99</td>
            <td>
                <div class="cart-item">
                    <button @click="decreaseQuantity">-</button>
                    <span>{{ quantity }}</span>
                    <button @click="increaseQuantity">+</button>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row">Piatto 2</th>
            <td>19.99</td>
            <td>
                <div class="cart-item">
                    <button @click="decreaseQuantity">-</button>
                    <span>{{ quantity }}</span>
                    <button @click="increaseQuantity">+</button>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row">Piatto 3</th>
            <td>100k</td>
            <td>
                <div class="cart-item">
                    <button @click="decreaseQuantity">-</button>
                    <span>{{ quantity }}</span>
                    <button @click="increaseQuantity">+</button>
                </div>
            </td>
        </tr>
    </tbody>
</table>

                    <!-- <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                    <p class="card-text"></p>
                    <a href="#" class="card-link"></a>
                    <a href="#" class="card-link"></a> -->
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
    props: {
        initialQuantity: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            dishes: [],
            quantity: this.initialQuantity,
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
        decreaseQuantity() {
            if (this.quantity > 0) {
                this.quantity--;
            }
        },
        increaseQuantity() {
            this.quantity++;
        },
    },
    created(){
    this.getDishes();
},

};


</script>
<style lang="scss"></style>