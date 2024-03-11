<template>
  <div class="position-relative">
    <img class="my_jumbo" src="../../src/img/bg_jumbo-1.jpeg" alt="jumbo_image" />
    <!-- titolo con button per cercare ristoranti e piatti (???) -->
    <div class="col-8 offset-2 custom_font custom_position">
      <h2 class="text-center mb-4">Ordina cibo comodamente da casa</h2>
      <h4 class="text-center custom_font d-xs-none d-md-block">
        Ristoranti, Osterie, Pizzerie, Fast food e molto altro, tutto a portata di un
        click!
      </h4>
    </div>
  </div>
  <section class="container-fluid custom_font py-5">
    <div>
      <div class="row d-flex justify-content-center offset-1 col-10 offset-lg-2 col-lg-8">
        <!-- <h1 class="text-center mb-4">Categorie</h1> -->
        <div
          class="card btn m-2 mb-5 d-flex align-items-center custom_bg pt-3"
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

.custom_position{
  bottom: 0;
  right: 50;
  position: absolute;
  padding-bottom: 20px;
}
</style>
