<template>
  <div>
    <nav class="navbar navbar-expand-lg positionFixed">
      <div class="container-fluid">
        <p class="navbar-brand title">Partho's Info.</p>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Project</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
div {
  background-color: gray;
}
.title {
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 0.3ex;
}
p {
  color: rgb(255, 255, 255);
}
a {
  color: rgb(255, 255, 255) !important;
  margin: 0 10px;
}
</style>
