<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <!-- Usa la imagen importada como src -->
        <img
          src="@/assets/images/logo.png"
          alt="imagen-logo"
          style="width: 5%"
        />

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="'/'"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="'/create'"
                >Create</router-link
              >
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Oficio</a
              >
              <ul class="dropdown-menu">
                <li v-for="ofi in oficios" :key="ofi">
                  <router-link
                    class="dropdown-item"
                    :to="'/empleadosoficio/' + ofi"
                    >{{ ofi }}</router-link
                  >
                </li>
              </ul>
            </li> -->
          </ul>
          <form role="search">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "MenuCoches",
};
</script>