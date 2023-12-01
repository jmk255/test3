<template>
  <!--state의 popupFlag값이 true면 popup클래스가 추가됨-->
  <header :class="{ popup: this.$store.state.popupFlag }">
    <a href="#">
      <i class="fas fa-4x fa-envelope"></i>
      <h1>Welcome to VUE-POST BOX.</h1>
      <strong>write your message.</strong>
    </a>
    <!--버튼을 클릭하면 togglePopup메서드 호출-->
    <button type="button" @click="togglePopup">Write</button>
  </header>
</template>

<script>
export default {
  methods: {
    togglePopup() {
      //store.js의 onPopup을 호출
      this.$store.commit("onPopup");
    },
  },
};
</script>

<style scoped>
header {
  padding-bottom: 1rem;
  position: relative;
  border-bottom: 0.2rem solid var(--button-color);
}

header > a > h1 {
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--text-color);
}

header > a > strong {
  font-size: 1.6rem;
  color: var(--text-color);
}

header > a > i {
  color: var(--accent-color);
}

header > button {
  position: absolute;
  bottom: 1rem;
  right: 0;
}
</style>
