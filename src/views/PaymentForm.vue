<template>
  <section class="container-fluid p-5">
    <!-- Aggiunta del nuovo form -->
    <form @submit.prevent="submitOrder">
      <div class="form-group">
        <label for="name">Nome</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="orderInfo.customer_name"
          required
        />
      </div>
      <div class="form-group">
        <label for="surname">Cognome</label>
        <input
          type="text"
          class="form-control"
          id="surname"
          v-model="orderInfo.customer_lastname"
          required
        />
      </div>
      <div class="form-group">
        <label for="address">Indirizzo</label>
        <input
          type="text"
          class="form-control"
          id="address"
          v-model="orderInfo.customer_address"
          required
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Numero di telefono</label>
        <input
          type="tel"
          class="form-control"
          id="phoneNumber"
          v-model="orderInfo.customer_phone"
          required
        />
      </div>
      <!-- Fine del nuovo form -->

      <div id="dropin-container"></div>
      <button
        type="submit"
        id="submit-button"
        class="button button--small button--green">
        Paga
      </button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
      return {
          orderInfo: {
              customer_name: "",
              customer_lastname: "",
              customer_address: "",
              customer_phone: "",
              paymentNonce: "",
          },
      };
  },
  mounted() {
      let button = document.querySelector("#submit-button");

      braintree.dropin.create(
          {
              authorization: "sandbox_g42y39zw_348pk9cgf3bgyw2b",
              selector: "#dropin-container",
          },
          
          (err, instance) => {
              button.addEventListener("click", () => {
                  instance.requestPaymentMethod((err, payload) => {
                      if (err) {
                          console.error(err);
                          return;
                      }
                      // Assegna il nonce del pagamento alla proprietà paymentNonce
                      this.orderInfo.paymentNonce = payload.nonce;
                      // Chiamata al metodo submitOrder
                      this.submitOrder();
                      this.$router.push({ name: 'thankspage', })
                  });
              });
          }
      );
  },
  methods: {
      submitOrder() {
          axios
              .post("http://127.0.0.1:8000/api/orders", this.orderInfo)
              .then((response) => {
                  console.log(response);
              })
              .catch(function (error) {
                  console.warn(error);
              });
      },
  },
};
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}
</style>