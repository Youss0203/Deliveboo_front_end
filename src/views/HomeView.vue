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
      <div class="card btn m-2 mb-5 d-flex align-items-center custom_bg pt-3 my-card" v-for="category in categories"
        @click="addFilter(category.id)">
        <img :src="category.img_url" class="card-img-top w-50" alt="..." />
        <p class="btn fs-5 pb-0">
          {{ category.name }}
        </p>
      </div>
    </div>
  </section>

  <section class="container custom_font py-5" v-if="restaurants != ''">
    <div class="row">
      <div class="col-4">
        <div class="row">
          <div class="col-12" v-for="category in categories">
            <div>
              <p @click="addFilter(category.id)" class="my_bord fs-5">
                {{ category.name }}
              </p>
            </div>
          </div>
          {{ filteredCategories }}
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div class=" col-12 " v-for="restaurant in restaurants">
            <!--card in verticale-->


            <!-- <div class="card mb-3" style="width: 18rem;"> 
              <div class="row g-0">
                <div class="col-12">
                  <img :src="restaurant.img_url" class="img-fluid rounded-start w-100" alt="restaurant image">
                </div>
                <div class=" col-12">
                  <div class="card-body">
                    <h5 class="card-title fs-2">{{ restaurant.company_name }}</h5>
                    <p class="fs-6">Indirizzo: {{ restaurant.address }}</p>
                  </div>
                </div>
              </div>
            </div> -->

            <!--card orizzontale-->

            <div class="card mb-3" style="max-width: 800px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="restaurant.img_url" class="img-fluid rounded-start w-100" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ restaurant.company_name }}</h5>
                    <p class="card-text">
                      {{ restaurant.address }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="my_sfondo">
    <!-- da qua in poi ci possiamo fare un elemento  -->
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <img src="../img/food sx.jpg" class="image-sx mt-4">
        <div class="col-xs-12 col-md-4 ps-4">
          <h2 class="title-sx mt-5 fw-bold">
            Sapore che viaggia fino a te.
          </h2>
          <p class="descrizione d-flex flex-row-reverse custom_font_size">
            Scegli tra una vasta selezione di piatti deliziosi da ristoranti locali e nazionali. Con Deliveboo, gusti
            eccezionali viaggiano direttamente fino a te, portando l'esperienza culinaria che meriti direttamente nella
            tua casa con un semplice clic!
          </p>
        </div>
        <div class="col-xs-12 col-md-8">

        </div>
        <!-- fine primo elemento -->
        <div class="container-fluid">
          <div class="row d-flex justify-content-center">
            <div class="col-xs-12 col-md-4 ps-4">
              <h2 class="title-dx mt-5 mb-2 text-end fw-bold">
                Porta il party direttamente a casa tua!
              </h2>
              <p class="descrizione-dx text-end custom_font_size">
                Scopri il gusto e la comodità di portare il party direttamente a casa tua con il nostro servizio di food
                delivery! Ordina con un semplice clic e lascia che la festa abbia inizio nella comodità del tuo salotto!
              </p>
            </div>
            <div class="col-xs-12 col-md-4 ">
              <img src="../img/food dx.jpg" class="image-sx mb-4">
            </div>
            <!-- fine secondo elemento -->
          </div>
        </div>
      </div>
    </div>

  </section>
  <!-- recensioni -->
  <!-- <section class="sfondo_orange">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-xs-12 col-md-3 ">
        <div class="card border-none mb-3 mt-3" style="max-width: 18rem;">
            <div class="card-header">
              <img src="../img/user food.png" class="image-user">
              <span class="star p-2">
                 Riccardo : &#9733; 4.5 eccellente
              </span>
            </div>
            <div class="card-body">
              <h5 class="card-title">Stupendo</h5>
              <p class="card-text">Un sito comodo da usare ed elegante.</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-3 ">
        <div class="card border-none mb-3 mt-3" style="max-width: 18rem;">
            <div class="card-header">
              <img src="../img/user food.png" class="image-user">
              <span class="star p-2">
                 Sofia : &#9733; 4 buono
              </span>
            </div>
            <div class="card-body">
              <h5 class="card-title">Essenziale</h5>
              <p class="card-text">Ne avevo proprio bisogno.</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-3 ">
        <div class="card border-none mb-3 mt-3" style="max-width: 18rem;">
            <div class="card-header">
              <img src="../img/user food.png" class="image-user">
              <span class="star p-2">
                 Carlo: &#9733; 4.8 eccellente
              </span>
            </div>
            <div class="card-body">
              <h5 class="card-title">Magia</h5>
              <p class="card-text">Dove puoi trovare tutto con un click.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
import axios from "axios";

export default {
  name: "AppMain",

  data() {
    return {
      categories: [],
      filteredCategories: [],
      restaurants: [],

    };
  },

  methods: {
    getRestaurants() {

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
        let index = this.filteredCategories.indexOf(category)
        //delete this.filteredCategories[index]
        this.filteredCategories.splice(index, 1)
        // this.filteredCategories.pop()
        // console.log('ciao')
      } else {
        this.filteredCategories.push(category)
      }

      this.getRestaurants()

    }

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

// section.container.custom_font{
//   background-image: url(../img/sfondo-food.jpg);

// }
.custom_bg {
  background-color: #ffc200;
  width: 12rem;
}

.sfondo_orange {
  background-image: url('../img/sfondo-food.jpg');
  object-fit: contain;
}

.custom_font_color {
  // color: #dd9117;
}

.custom_font_size {
  font-size: 15px;
}

.star {
  color: white;
}

.card-header {
  background-color: #27B8B2;
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
  width: 436px;
  border-radius: 20%;
  transition: all 0.5s ease;
}

.image-sx:hover {
  width: 445px;

}

.custom_bg:hover {
  background-color: #27B8B2;
}

// regole scss per l'ultimo elemento
.my_sfondo {
  background-color: #27b8b2;
}

.my_bord {
  border: 1px solid #EFEDEA;
  border-radius: 2rem;
  padding: 0.25rem 1rem;
  &:hover{
    background-color:#27B8B2
  }
}
</style>
