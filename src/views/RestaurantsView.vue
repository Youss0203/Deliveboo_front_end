<template >
    <div class="container">
        <div class="row">
            <div class="col-12 my-3 d-flex justify-content-end">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal">Filtri</button>

                <!-- Modal -->
                <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="modalLabel">Filtri</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <!-- checkbox -->
                            <div class="modal-body">
                                <p>Filtro categorie:</p>

                                <div class="row">
                                    <div class="col-6" v-for="category in categories">
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="checkbox" v-model="filteredCategories" :value="category.id" id="checkbox">
                                            <label class="form-check-label" for="checkbox">
                                                {{ category.name }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="getRestaurants">Mostra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-12 col-md-4 col-lg-3" v-for="restaurant in restaurants">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-12">
                            <img :src="restaurant.img_url" class="img-fluid rounded-3" alt="...">
                        </div>

                        <div class="col-12">

                            <div class="card-body my-border-none">
                                <h5 class="card-title fs-2">{{ restaurant.company_name }}</h5>
                                <p class="fs-6">Indirizzo: {{ restaurant.address }}</p>
                            </div>
                        </div>
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
            restaurants: [],
            categories: [],
            filteredCategories: []
        }
    },

    methods: {
        getRestaurants() {

            this.filteredCategories.push(this.$route.params.category);
            // console.log(this.filteredCategories);
            axios.get('http://127.0.0.1:8000/api/restaurants', {
                params: {
                    category: this.filteredCategories
                }
            })
                .then((response) => {
                    console.log(response);
                    this.restaurants = response.data.results;

                })
                .catch(function (error) {
                    console.warn(error);
                })
        },
        getCategories() {
        axios.get("http://127.0.0.1:8000/api/categories", {
            params: {},
            })
            .then((response) => {
            // console.log(response.data.results);
            this.categories = response.data.results;
            })
            .catch(function (error) {
            console.warn(error);
            });
        },
    },

    created() {
        this.getRestaurants();
        this.getCategories();
    }
}


</script>
<style lang="scss">

.my-border-none {
    border: none;
}

</style>