<template >
    <div class="container">
        <div class="row">
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