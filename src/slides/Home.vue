<template>
  <div id="home" class="slide">
    <img id="leaves" src="@/assets/images/plants.png" />
    <img id="name" src="@/assets/images/név.png" />
    <nav>
      <a href="#story">Történet</a>
      <a href="#church">Esküvő</a>
      <a href="#party">Lakodalom</a>
      <a href="#photos">Fényképek</a>
      <a href="#countdown">Visszaszámlálás</a>
    </nav>
  </div>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;

  justify-content: space-around;

  background-color: rgb(230,231,226);
  /* object-fit: cover; */
  display: block;
  text-align: center;
}

#leaves {
  width: 100%;
  /* height: 20%; */
}

#name {
margin-top: 30px;
margin-bottom: 110px;
}

img {
  width: 50%;

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
