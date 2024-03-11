<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid d-flex justify-content-between">
        <img src="../img/deliveboo_logo.png" class="custom_logo" alt="logo" />
        <div>
          <a
            href="http://127.0.0.1:8000"
            class="btn btn-dark border-0 fw-bold custom_font"
            >Area Ristoratore</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/app.scss";

.custom_font {
  @extend .montserrat;
}

a {
  text-decoration: none;
  color: black;
  background-color: #fe7e00;
  &:hover {
    color: white;
  }
}

.custom_logo {
  height: 2.5rem;
}
</style>
