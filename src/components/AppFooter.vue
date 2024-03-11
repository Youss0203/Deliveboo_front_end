<template>
    <footer class="my_bg pt-3">
        <div class="container w-100">
           
            <div class="row w-100 justify-content-between m-0">

                <div class="col-3">
                    <p>Servizio clienti</p>
                    <ul class="">
                        
                        <li>
                            Domande frequenti
                        </li>
                        <li>
                            Accedi come ristoratore
                        </li>
                        <li>
                            Miglior prezzo garantino
                        </li>
                        <li>
                            Scarica l'app DeliveBoo
                        </li>
                    </ul>

                </div>

                <div class="col-3">
                    <p>Cucine</p>
                    <ul class="lista-centrale">
                        <li v-for="category in categories" @click="$router.push({ name: 'restaurants', params: { category: category.id } })">
                       
                            {{ category.name }}
                        </li>
                        <li>
                            Domande frequenti
                        </li>
                    </ul>
                        
                </div>
                <div class="col-3">
                    <p>Chi siamo</p>
                    <ul class="">
                        <li>
                            Informazioni su DeliveBoo
                        </li>
                        <li>
                            Lavora con Noi  
                        </li>
                        <li>
                            Media e press 
                        </li>
                        <li>
                            Informazioni sulla Privacy
                        </li>
                        <li>
                            Sostenibilità
                        </li>
                        <li>
                            Termini e condizioni
                        </li>
                        <li>
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
        font-weight: 700;
    }

    .lista-centrale {


    }

    li img{

    width: 100px;
    }

</style>
