<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid d-flex justify-content-between">
        <img src="../img/logo.jpeg" class="custom_logo" alt="logo" />
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
  color: white;
  background-color: #fe7e00;
  &:hover {
    background-color: #27B8B2
  }
}

.custom_logo {
  height: 2.5rem;
}

.navbar {

  background-color: #fe7e00;
}
</style>
