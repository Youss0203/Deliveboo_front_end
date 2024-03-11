<template>
  <div>
    <img class="my_jumbo" src="../../src/img/bg_jumbo-1.jpeg" alt="jumbo_image" />
  </div>
  <section class="container-fluid custom_font">
    <div class="row py-4">
      <!-- titolo con button per cercare ristoranti e piatti (???) -->
      <div class="col-8 offset-2 custom_font">
        <h2 class="text-center mb-4">Ordina cibo comodamente da casa</h2>
        <h4 class="text-center custom_font">
          Ristoranti, Osterie, Pizzerie, Fast food e molto altro, tutto a portata di un
          click!
        </h4>
      </div>
    </div>
    <!-- carosello con img di piatti  -->
    <!-- <div class="mb-5">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../img/food_1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../img/food_2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../img/food_3.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../img/food_4.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../img/food_5.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div> -->
    <div>
      <div class="row d-flex justify-content-center col-8 offset-2">
        <!-- <h1 class="text-center mb-4">Categorie</h1> -->
        <div
          class="card btn col-5 m-2 mb-5 d-flex align-items-center custom_bg pt-3"
          style="width: 12rem"
          v-for="category in categories"
          @click="$router.push({ name: 'restaurants', params: { category: category.id } })"
        >
          <img :src="category.img_url" class="card-img-top" style="width: 4.5rem;" alt="..." />
            <p class="btn fs-5 pb-0">
              {{ category.name }}
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

.carousel-inner {
  max-height: 22rem;
}

.custom_bg{
  background-color: #ffc200;
}

.my_jumbo {
  width: 100%;
}
</style>
