<template>
  <main :class="{ popup: this.$store.state.popupFlag }">
    <h2 class="hide">Recent POST</h2>
    <ol class="list">
      <!--boardList의 배열의 갯수 만큼 li요소를 추가 key값을 item의 id값으로 설정-->
      <li
        class="post-list"
        v-for="item in this.$store.state.boardList"
        :key="item.id"
      >
        <details>
          <summary>{{ item.message }}</summary>
          <p>{{ item.message }}</p>
        </details>
        <div class="post-info">
          <p>
            <span class="author">{{ item.id }}</span> |
            <span class="date">{{ item.date }}</span>
          </p>
        </div>
      </li>
    </ol>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main p {
  color: var(--text-color);
}
.post-list {
  box-shadow: 0.2rem 0.2rem;
  border: 0.1rem solid var(--text-color);
  border-radius: 1.1rem;
  padding: 1rem;
  background-color: var(--list-color);
  margin-bottom: 1rem;
}

.post-list > details > summary {
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.4rem;
}

.post-list > details > p {
  color: #fff;
  padding: 0.6rem;
  font-size: 1.2rem;
}

.post-list > .post-info {
  position: relative;
  margin-top: 0.6rem;
}

.post-list > .post-info > p {
  position: absolute;
  bottom: 0;
  right: 0;
  color: var(--accent-color);
}
</style>
