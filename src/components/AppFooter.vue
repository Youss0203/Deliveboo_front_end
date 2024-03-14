<template>
    <footer class="my_bg pt-3">

        <div class="container px-0 px-md-5">
           
            <div class="row justify-content-between m-0">
                
                <div class="col-4">
                    <p class="footer-title-font fw-bold">Servizio clienti</p>
                    
                    <ul class="">
                        <li class="footer_font">
                            FAQ
                        </li>
                        <li class="footer_font">
                            Area ristoratore
                        </li>
                        <!-- <li class="footer_font">
                            Miglior prezzo garantino
                        </li> -->
                        <li class="footer_font">
                            Contatti
                        </li>
                        <!-- <li class="footer_font">
                            Domande frequenti
                        </li> -->
                    </ul>
                </div>

                <div class="col-4 d-flex align-items-center flex-column">
                    <p class="footer-title-font middle-title fw-bold">Cucine</p>
                    <ul class="lista-centrale">
                        <li v-for="category in categories" @click="$router.push({ name: 'restaurants', params: { category: category.id } })" class="footer_font">
                            {{ category.name }}
                        </li>
                    </ul>
                </div>

                <div class="col-4 d-flex align-items-end flex-column">
                    <!-- <p class="footer-title-font pe-5 fw-bold">Chi siamo</p> -->

                    <ul class="traslate">
                        <li class="footer_font fw-bold custom-first-li">
                            Informazioni su DeliveBoo
                        </li>
                        <li class="footer_font">
                            Lavora con Noi  
                        </li>
                        <li class="footer_font">
                            Media e press 
                        </li>
                        <li class="footer_font">
                            Privacy
                        </li>
                        <li class="footer_font">
                            Sostenibilità
                        </li>
                        <li class="footer_font">
                            Termini e condizioni
                        </li>
                        <li class="footer_font">
                            Codice Etico
                        </li>
                        <li class="pt-3">
                            <img src="../img/gplay.png" alt="" class="">
                        </li>
                        <li>
                            <img src="../img/appstore-1.png" alt="" class="">
                        </li>
                    </ul>                        
                </div>
            </div>
        </div>
   </footer>
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

<style lang="scss">
    .my_bg {
        background-color: #fd7f00;
    }

    li {
        list-style: none;
        line-height: 1.9rem;
    }

    li:hover {
        text-decoration: underline;
    }

    ul {
        padding: 0px 0px 0px 0px;
    }

    p {
        font-size: 1.8rem;
        font-weight: 500;
    }

    .footer-title-font {
        font-size: 17px;
        transition: transform 0.5s;
        &:hover {
        transform: scale(1.1);
        }
    }

    li img{
        width: 100px;        
        transition: transform 0.5s;
        &:hover {
        transform: scale(1.2);
        }
    }

    .footer_font{
        font-size: 13px;
        transition: transform 0.5s;
        &:hover {
        transform: scale(1.2);
        color: white;
        }
    }

    .middle-title{
        padding-right: 17px;
    }

    .custom-first-li{
        font-size: 17px;
        transition: transform 0.5s;
        &:hover {
        transform: scale(1.1);
        color: black;
        text-decoration: none;
        }
    }
</style>
