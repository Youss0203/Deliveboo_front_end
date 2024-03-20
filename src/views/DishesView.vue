<template lang="">
  
  <div class="container container-md w-100">
    <div class="row">

      <div class="col-12 text-end mt-3 my-total-position">

        <button type="button" class="btn cart-bg my-cart text-white d-lg-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="fa fa-shopping-cart" style="font-size:24px"></i>
        </button>
        <span class="total-item-style d-lg-none">
            {{ getTotalQuantity() }}
        </span>
      </div>

      <!-- Modal -->
      <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      
      >
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="col-12">

            <!-- CARRELLO MODALE -->
            <div class="">
              <div class="card-body">
                <h5 class="pb-3 fw-bold">Carrello</h5>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Piatto</th>
                      <th scope="col">Quantità</th>
                      <th scope="col">Prezzo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="dish in cart">
                      <td>
                        {{ dish.name }}
                      </td>
                      <td>
                        <div class="cart-item">
                          <button
                            @click="removeFromCart(dish.id)"
                            class="btn btn-red text-white p-1 m-1"
                          >
                            -
                          </button>
                          <span>{{ dish.quantity }}</span>
                          <button
                            @click="increaseQuantity(dish.id)"
                            class="btn btn-green text-white p-1 m-1"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{{ calculateTotalForDish(dish) }} €</td>
                    </tr>
                  </tbody>
                </table>

                <table class="table">
                  <thead>
                    <tr>
                      <!-- <th scope="col">Quantità totale</th> -->
                      <th scope="col">Totale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <!-- <td> {{ getTotalQuantity() }} </td> -->
                      <td>{{ getTotalPrice().toFixed(2) }} €</td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-between">


                  <button @click="goToPayment" class="btn btn-green text-white" data-bs-dismiss="modal">

                    Vai al pagamento
                  </button>
                  <button @click="clearCart" class="btn btn-red text-white">
                    Svuota carrello
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>


      <div class="col-12 col-lg-8">
        <div class="col-12">
          <div v-for="dish in dishes">
            <div class="card border-0 mb-3 mt-5">
              <div class="row g-0">
                <div class="col-md-6">
                  <img
                    :src="dish.img_url"
                    class="img-fluid rounded-3"
                    alt="..."
                  />
                </div>
                <div class="col-12 col-md-6">
                  <div class="card-body">
                    <h5 class="card-title fw-bold fs-2">{{ dish.name }}</h5>
                    <p class="card-text fs-6">
                      Ingredienti : {{ dish.ingredients }}
                    </p>
                    <p class="card-text fs-6">Prezzo : {{ dish.price }} €</p>
                    <button class="btn my-bg-tasto" @click="addDish(dish)">
                      Aggiungi al carrello
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="col-12 col-md-4 col-lg-4 d-none d-lg-block">
        <!-- CARRELLO NORMALE -->
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title text-center fw-bold">Carrello</h5>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Piatto</th>
                  <th scope="col">Quantità</th>
                  <th scope="col">Prezzo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="dish in cart">
                  <td>
                    {{ dish.name }}
                  </td>
                  <td>
                    <div class="cart-item">
                      <button
                        @click="removeFromCart(dish.id)"
                        class="btn btn-red text-white p-1 m-1"
                      >
                        -
                      </button>
                      <span>{{ dish.quantity }}</span>
                      <button
                        @click="increaseQuantity(dish.id)"
                        class="btn btn-green text-white p-1 m-1"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{{ calculateTotalForDish(dish) }} €</td>
                </tr>
              </tbody>
            </table>

            <table class="table">
              <thead>
                <tr>
                  <!-- <th scope="col">Quantità totale</th> -->
                  <th scope="col">Totale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <!-- <td> {{ getTotalQuantity() }} </td> -->
                  <td>{{ getTotalPrice().toFixed(2) }} €</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between">
              <button @click="$router.push({ name: 'payment'})" class="btn btn-success my-btn">
                Vai al pagamento
              </button>
              <button @click="clearCart" class="btn btn-red text-white my-btn">
                Svuota carrello
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AppMain",
  props: {
    initialQuantity: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      dishes: [],
      quantity: this.initialQuantity,
      cart: [],
    };
  },

  methods: {
    addDish(dish) {
      // Cerca se il piatto è già nel carrello
      const index = this.cart.findIndex((item) => item.id === dish.id);

      // Se il piatto è già nel carrello, incrementa la quantità
      if (index !== -1) {
        this.cart[index].quantity++;
      } else {
        // Altrimenti, aggiungi il piatto al carrello con quantità 1
        this.cart.push({
          id: dish.id,
          name: dish.name,
          price: dish.price,
          quantity: 1,
        });
      }

      // Aggiorna il carrello nel localStorage
      localStorage.setItem("cart", JSON.stringify(this.cart));
      console.log(localStorage.getItem("cart"));
    },
    increaseQuantity(id) {
      // Cerca l'indice del piatto nel carrello
      const index = this.cart.findIndex((item) => item.id === id);

      // Se l'elemento è stato trovato
      if (index !== -1) {
        // Incrementa la quantità del piatto
        this.cart[index].quantity++;

        // Aggiorna il carrello nel localStorage
        localStorage.setItem("cart", JSON.stringify(this.cart));
        console.log("Quantità aumentata per il piatto:", id);
      } else {
        console.warn("Impossibile trovare il piatto nel carrello:", id);
      }
    },

    removeFromCart(id) {
      // Cerca l'indice del piatto nel carrello
      const index = this.cart.findIndex((item) => item.id === id);

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
        localStorage.setItem("cart", JSON.stringify(this.cart));
        console.log("Piatto rimosso dal carrello:", id);
      } else {
        console.warn("Impossibile trovare il piatto nel carrello:", id);
      }
    },
    getDishes() {
      axios
        .get("http://127.0.0.1:8000/api/dishes", {
          params: {
            restaurant: this.$route.params.restaurant,
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

    clearCart() {
      // Rimuovi tutti gli elementi dal carrello
      this.cart = [];

      // Aggiorna il carrello nel localStorage
      localStorage.removeItem("cart");
      console.log("Carrello svuotato");
    },

    // totale quantita dei piatti
    getTotalQuantity() {
      return this.cart.reduce((total, dish) => total + dish.quantity, 0);
    },
    // prezzo totale del carrello
    getTotalPrice() {
      return this.cart.reduce(
        (total, dish) => total + dish.quantity * dish.price,
        0
      );
    },
    // prezzo totale di un piatto singolo X quantità
    calculateTotalForDish(dish) {
      return (dish.price * dish.quantity).toFixed(2);
    },
    // route per checkout
    // goToPayment() {
    //   this.$router.push({ name: "payment" });
    // },
  },
  created() {
    this.getDishes();

    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      this.cart = cart;
    }
  },

  // Svuota il carrello cambiando pagina
  beforeRouteLeave(to, from, next) {
    this.clearCart();
    next();
  },
};
</script>
<style lang="scss">

.my-cart {

  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.total-item-style {
  background-color: #A61C3C;
  color: white;
  padding: 0px 6px 0px 6px;
  border-radius: 50%;
  position: absolute;
  right: 6px;
  top: 38px;
 
}

.my-total-position {

  position: relative;
}

.btn-green {
  background-color: #157F1F;
}

.btn-red {
  background-color: #A61C3C;
}

.cart-bg {

  background-color: #27B8B2;
}

</style>
