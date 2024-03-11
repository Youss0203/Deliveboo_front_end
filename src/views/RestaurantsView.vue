<template >
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>


                            <!-- checkbox -->
                            <div class="modal-body">
                                <p>Filtro categorie:</p>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        amuni
                                    </label>
                                </div>
                            </div>

                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6" v-for="restaurant in restaurants">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="restaurant.img_url" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ restaurant.company_name }}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional
                                    content. This content is a little bit longer.</p>
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
        }
    },

    methods: {
        getRestaurants() {
            axios.get('http://127.0.0.1:8000/api/restaurants', {
                params: {
                    category: this.$route.params.category

                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.restaurants = response.data.results;

                })
                .catch(function (error) {
                    console.warn(error);
                })
        }
    },

    created() {
        this.getRestaurants();
        console.log(this.restaurants)
    }
}


</script>
<style lang="scss"></style>