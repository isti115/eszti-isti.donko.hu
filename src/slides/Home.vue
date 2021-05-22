<template>
  <div id="home" class="slide">
    <img src="@/assets/images/top.png" />
    <div>Eszti & Isti</div>
    <nav>
      <a href="#home">Kezdőlap</a>
      <a href="#story">Történet</a>
      <a href="#church">Esküvő</a>
      <a href="#party">Lakodalom</a>
      <a href="#countdown">Visszaszámlálás</a>
    </nav>
  </div>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;

  justify-content: space-around;

  background-color: rgb(190, 230, 180);
  /* object-fit: cover; */
}

#home img {
  width: 100%;
  height: 20%;
}

nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  margin: 20px;
}

.map {
  width: 90%;
  height: 70%;

  margin-top: 3%;
}
</style>
