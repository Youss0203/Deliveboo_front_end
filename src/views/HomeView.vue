<template>
    <div class="position-relative">
        <img class="my_jumbo" src="../../src/img/bg_jumbo-1.jpeg" alt="jumbo_image" />
        <!-- titolo con button per cercare ristoranti e piatti (???) -->
        <div class="col-8 offset-2 custom_font custom_position d-none d-lg-block">
            <h2 class="text-center mb-4">Ordina cibo comodamente da casa</h2>
            <h4 class="text-center custom_font d-xs-none d-md-block">
                Ristoranti, Osterie, Pizzerie, Fast food e molto altro, tutto a portata
                di un click!
            </h4>
        </div>
    </div>
    <section class="container custom_font pt-5 pb-3 ">

        <div class="row d-flex justify-content-center">
            <!-- <h1 class="text-center mb-4">Categorie</h1> -->


            <div class="card btn m-2 mb-5 d-flex align-items-center custom_bg pt-3 my-card"
                v-for="category in categories" @click="addFilter(category.id)">

                <img :src="category.img_url" class="card-img-top w-50" alt="..." />
                <p class="btn fs-5 pb-0">
                    {{ category.name }}
                </p>

            </div>
        </div>

    </section>

    <section class="container custom_font py-5" v-if="restaurants">
        <div class="row">
            <div class="col-4 ">
                <div class="">
                    <div class="" v-for="category in categories">
                        <div>
                            <p @click="addFilter(category.id)" class="my_bord fs-6 fs-md-5 "
                                :class="filteredCategories.includes(category.id) ? 'active' : ''">
                                {{ category.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="row">

                    <div class="col-12 py-1" v-for="restaurant in restaurants">
                        <!--card orizzontale-->
                        <div class="card border-0 mb-3" style="max-width: 800px;"
                            @click="$router.push({ name: 'dishes', params: { restaurant: restaurant.id } })">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img :src="restaurant.img_url" class="img-fluid rounded-3 w-100" alt="...">
                                </div>
                                <div class="col-md-8" id="1">
                                    <div class="card-body">
                                        <h5 class="card-title fs-3">{{ restaurant.company_name }}</h5>
                                        <p class="card-text fs-6">
                                            {{ restaurant.address }}
                                        </p>
                                        <p class="card-text fs-6" v-for="category in restaurant.categories">
                                            {{ category.name }}
                                        </p>

                                        <!-- Iterazione sulle categorie del ristorante -->

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="my_sfondo ">
        <!-- Inizio primo elemento  -->


        <div class="container mb-4 my-container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
                    <img src="../img/food sx.jpg" class="image-sx mt-4 w-100" />
                </div>
                <div class="col-12 col-md-6 col-lg-7 pt-md-5 px-5">
                    <h2 class="my-2 fw-bold text-white">Sapore che viaggia fino a te.</h2>
                    <p class="descrizione custom_font_size">
                        Scegli tra una vasta selezione di piatti deliziosi da ristoranti
                        locali e nazionali. Con Deliveboo, gusti eccezionali viaggiano
                        direttamente fino a te, portando l'esperienza culinaria che meriti
                        direttamente nella tua casa con un semplice clic!
                    </p>
                </div>
            </div>
        </div>

        <!-- Inizio secondo Elemento -->

        <div class="container pb-4 my-container">
            <div class="row flex-md-row-reverse">
                <div class="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
                    <img src="../img/food dx.jpg" class="image-sx mt-4 w-100" />
                </div>
                <div class="col-12 col-md-6 col-lg-7 pt-md-5 px-5">
                    <h2 class="title-sx my-2 fw-bold text-white">Porta il party direttamente a casa tua!</h2>
                    <p class="descrizione d-flex custom_font_size">
                        Scopri il gusto e la comodità di portare il party direttamente a
                        casa tua con il nostro servizio di food delivery! Ordina con un
                        semplice clic e lascia che la festa abbia inizio nella comodità del
                        tuo salotto!
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "AppMain",

    data() {
        return {
            categories: [],
            filteredCategories: [],
            restaurants: null,

        };
    },

    methods: {
        getRestaurants() {
            axios
                .get("http://127.0.0.1:8000/api/restaurants", {
                    params: {
                        category: this.filteredCategories,
                    },
                })
                .then((response) => {
                    console.log(response);
                    this.restaurants = response.data.results;
                })
                .catch(function (error) {
                    console.warn(error);
                });
        },
        getCategories() {
            axios
                .get("http://127.0.0.1:8000/api/categories", {
                    params: {},
                })
                .then((response) => {
                    console.log(response.data.results);
                    this.categories = response.data.results;
                })
                .catch(function (error) {
                    console.warn(error);
                });
        },
        addFilter(category) {
            if (this.filteredCategories.includes(category)) {
                let index = this.filteredCategories.indexOf(category);

                //delete this.filteredCategories[index]
                this.filteredCategories.splice(index, 1);
                // this.filteredCategories.pop()
                // console.log('ciao')
            } else {

                this.filteredCategories.push(category);
            }
            this.getRestaurants();

            // window.scrollTo({   top: 1150,   left:0,   behavior: "auto", });
            setTimeout(() => {
                window.scrollTo({ top: 1150, left: 0, behavior: "auto", });
            }, 300)
        },
    },

    created() {
        this.getCategories();
        this.cart = [];
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/app.scss";

.custom_font {
    @extend .montserrat;
}

.custom_bg {
    background-color: #fe7e00;
    width: 12rem;
}

.sfondo_orange {
    background-image: url("../img/sfondo-food.jpg");
    object-fit: contain;
}

.custom_font_size {
    font-size: 15px;
}

.star {
    color: white;
}

.card-header {
    background-color: #27b8b2;
}

.my_jumbo {
    width: 100%;
}

.image-user {
    height: 35px;
}

.custom_position {
    bottom: 0;
    right: 50;
    position: absolute;
    padding-bottom: 20px;
    // display: none;
}

.image-sx {
    width: 350px;
    border-radius: 30px;
    margin-bottom: 10px;

    transition: all 0.5s ease;
}

.image-sx:hover {
    width: 450px;

}

.custom_bg:hover {
    background-color: #ffd8b1;
}

// regole scss per l'ultimo elemento
.my_sfondo {
    background-color: #27b8b2;
    position: relative;
}

.my-card-flex {

    display: flex;
    justify-content: center;
    flex-direction: column;
}

.my_bord {
    border: 1px solid #EFEDEA;
    border-radius: 2rem;
    padding: 0.25rem 1rem;

    &:hover {
        background-color: #27b8b2;
    }
}

.active {
    background-color: #27b8b2;

}

.my-position {
    position: absolute;
    top: -300px;
    z-index: -1;

}
</style>
