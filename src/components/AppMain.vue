<template>
  <section class="container-fluid">
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
    <div class="mb-5">
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
    </div>
    <div>
      <h1>next element</h1>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
@import "../assets/scss/app.scss";

.custom_font {
  @extend .shantell-sans;
}

.carousel-inner {
  max-height: 22rem;
}
</style>
