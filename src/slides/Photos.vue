<template>
  <div id="photos" class="slide">
    <a href="https://photos.google.com/share/AF1QipMhk9D_OCjbiDrHBwh55saHYiGkiYKS1AWroFGgW848QoFIE31Xdi5xQ63OlG1opg?key=TWtDVzV3eTJFQll2Z3A2N3hWUzc3c0w0U3F6OTVR" target="_blank">
      <span>"Az esküvő képeit itt fogod megtalálni!"</span>
      <img id="right" src="@/assets/images/right.svg" />
    </a>
    <img id="p1" src="@/assets/images/photos/skiing.jpg" />
    <img id="p2" src="@/assets/images/photos/civilwedding2.jpg" />
    <img id="p3" src="@/assets/images/photos/hill.jpg" />
    <img id="p4" src="@/assets/images/photos/brussels.jpg" />
    <img id="p5" src="@/assets/images/photos/maths.jpg" />
    <img id="p6" src="@/assets/images/photos/cave.jpg" />
  </div>
</template>

<script>
export default {
  name: 'Story'
}
</script>

<style scoped>
#photos {
  background-color: rgb(196, 203, 185);
  padding: 50px;

  display: grid;
  /* grid-template-columns: 24% 24% 24% 24%; */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 30% 30% 30%;
  /* grid-template-rows:  1fr 1fr 1fr; */
  grid-gap: 50px;
  grid-template-areas:
    "p1 p2 p2 p3"
    "p4 p4 p5 p3"
    "p4 p4 p6 p7";
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#p1 {
  grid-area: p1;
}

#p2 {
  grid-area: p2;
}

#p3 {
  grid-area: p3;
}

#p4 {
  grid-area: p4;
}

#p5 {
  grid-area: p5;
}

#p6 {
  grid-area: p6;
}

a {
  grid-area: p7;
  display: inline-block;
}

#right {
  width: 40%;
  height: 70%;

  /* min-width: 0;
  min-height: 0;

  object-fit: contain; */
}
</style>
