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
                                <button class="btn btn-success " @click="addDish(dish)">Aggiungi al carello</button>
                                {{cart}}
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
        <tr v-for="dish in cart">
            <th scope="row"></th>
            <td>
                {{dish.name}}
            </td>
            <td>
                <div class="cart-item">
                    <button @click="removeFromCart(dish.id)">-</button>
                    <span>{{dish.quantity}}</span>
                    <button @click="addDish(dish.id)">+</button>
                </div>
            </td>
            <td>
                {{dish.price}}
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
            cart: [

            ],
        }
    },


    methods: {
        addDish(dish) {
            let isDishInCart = false;

            //Se il carrello è vuoto, aggiungi il piatto
            if (this.cart.length === 0) {
                this.cart.push({
                    id: dish.id,
                    name: dish.name,
                    price: dish.price,
                    quantity: 0,
                    
                });
                isDishInCart = true;
                
            }

            for (let i = 0; i < this.cart.length; i++) {
                if (!isDishInCart) {
                    this.cart.push({
                        id: dish.id,
                        name: dish.name,
                        price: dish.price,
                        quantity: 1,
                        
                    });
                } else if (this.cart[i].id === dish.id) {
                    this.cart[i].quantity++;
                    isDishInCart = true;
                    break;
                }
            }

            localStorage.setItem('cart', JSON.stringify(this.cart));
            console.log(localStorage.getItem('cart'));
        },

        removeFromCart(id) {
            // Cerca l'indice del piatto nel carrello
            const index = this.cart.findIndex(item => item.id === id);

            // Se l'elemento è stato trovato
            if (index !== -1) {
                // Se la quantità è maggiore di 1, decrementa la quantità
                if (this.cart[index].quantity > 1) {
                    this.cart[index].quantity--;
                } else {
                    // Altrimenti, rimuovi il piatto completamente
                    this.cart.splice(index, 1);
                }

                // Aggiorna il carrello nel localStorage
                localStorage.setItem('cart', JSON.stringify(this.cart));
                console.log('Piatto rimosso dal carrello:', id);
            } else {
                console.warn('Impossibile trovare il piatto nel carrello:', id);
            }
        },
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

    },

};


</script>
<style lang="scss"></style>