<template>
  <div id="home" class="slide">
    <img id="leaves" src="@/assets/images/plants.png" />
    <img id="name" src="@/assets/images/név.png" />
    <div id="date">2021. 08. 21.</div>
    <nav>
      <!-- <a href="#story">Történet</a> -->
      <a href="#church">Esküvő</a>
      <a href="#party">Lakodalom</a>
      <a href="#photos">Fényképek</a>
      <a href="#countdown">Visszaszámlálás</a>
      <a href="#stream">Közvetítés</a>
    </nav>
  </div>
</template>

<style scoped>
#home {
  display: grid;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  align-items: center;
  justify-items: center;
  grid-template-rows: 1.25fr 1fr 0.5fr 0.75fr;

  padding: 0;

  background-color: rgb(230,231,226);
  text-align: center;
}

#leaves {
  width: 100%;
  /* height: 20%; */

  min-width: 0px;
  min-height: 0px;

  object-fit: cover;
  object-position: bottom;

  align-self: start;
}

#name {
  width: 50%;

  min-width: 0px;
  min-height: 0px;

  object-fit: contain;
}

#date {
  font-size: 50px;
}

@media (max-width: 800px) {
  nav {
    flex-direction: column;
  }

  #leaves {
    width: 200%;
  }

  #name {
    width: 90%;

    align-self: start;
  }
}

nav {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  margin: 5px 20px;
}

.map {
  width: 90%;
  height: 70%;

  margin-top: 3%;
}
</style>
