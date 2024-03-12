<template>
  <div class="position-relative">
    <img class="my_jumbo" src="../../src/img/bg_jumbo-1.jpeg" alt="jumbo_image" />
    <!-- titolo con button per cercare ristoranti e piatti (???) -->
    <div class="col-8 offset-2 custom_font custom_position d-none d-lg-block">
      <h2 class="text-center mb-4">Ordina cibo comodamente da casa</h2>
      <h4 class="text-center custom_font d-xs-none d-md-block">
        Ristoranti, Osterie, Pizzerie, Fast food e molto altro, tutto a portata di un
        click!
      </h4>
    </div>

  </div>
  <section class="container custom_font py-5">
    
    <div class="row d-flex justify-content-center">
      <!-- <h1 class="text-center mb-4">Categorie</h1> -->
      
      <div class="card btn m-2 mb-5 d-flex align-items-center custom_bg pt-3 my-card"
        v-for="category in categories"

        @click="$router.push({ name: 'restaurants', params: { category: category.id } })">
      
        <img :src="category.img_url" class="card-img-top w-50" alt="..." />

        <p class="btn fs-5 pb-0">
          {{ category.name }}
        </p>

      </div>
    </div>
  </section>

  <section class="my_sfondo">

      <!-- da qua in poi ci possiamo fare un elemento  -->
    <div class="container-fluid">
      <div class="row">
        <!-- primo elemento -->
        <div class="col-xs-12 col-md-4">
          
        </div>
        <div class="col-xs-12 col-md-8">
      
        </div>
        <!-- fine primo elemento -->

        <!-- secondo elemento -->
        <div class="col-xs-12 col-md-8">
          
        </div>
        <div class="col-xs-12 col-md-4 ">
      
        </div>
        <!-- fine secondo elemento -->
      </div>
    </div>
      
      <!-- da inserire fino a qua -->

  </section>    


</template>

<script>
import axios from "axios";

export default {
  name: "AppMain",

  data() {
    return {
      categories: [],
    };
  },

  methods: {
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
  },

  created() {
    this.getCategories();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/app.scss";

.custom_font {
  @extend .montserrat;
}

.custom_bg {
  background-color: #ffc200;
  width: 12rem;
}

.my_jumbo {
  width: 100%;
}

.custom_position {
  bottom: 0;
  right: 50;
  position: absolute;
  padding-bottom: 20px;
  // display: none;
}

.custom_bg:hover {
  background-color: #27B8B2;
}

// regole scss per l'ultimo elemento
.custom_blue{
  background-color: #27b8b2;
}


</style>
