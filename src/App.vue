<template>
  <div>
    <img src="./assets/logo.png" alt="Vue logo" />
    <PBHeader />
    <PBMain />
    <PBPopup />
  </div>
</template>

<script>
import PBHeader from "./components/PBHeader.vue";
import PBMain from "./components/PBMain.vue";
import PBPopup from "./components/PBPopup.vue";
export default {
  name: "App",
  components: { PBHeader, PBMain, PBPopup },
};
</script>

<style>
@import "./assets/style.css";
body {
  margin: auto;
  width: 90%;
  max-width: 960px;
  height: 100vh;
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
}

header,
main,
footer {
  margin-top: 2rem;
}

.popup {
  opacity: 0.3;
  z-index: -1;
}

button {
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: var(--button-color);
  border: 0.1rem solid var(--text-color);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
</style>
