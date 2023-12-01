<template>
  <!--store.js의 popupFlag값이 true면 hide클래스가 제거(화면표시), false면 추가(화면에서 제거)-->
  <section class="write-wrap" :class="{ hide: !this.$store.state.popupFlag }">
    <div class="article-info">
      <i class="fas fa-user"></i>
      <!--input에 입력하는 값을 id에 저장-->
      <input
        type="text"
        name="author"
        id="userId"
        placeholder="your id"
        v-model="id"
      />
      <label for="userId" class="hide">User Id</label>
      <i class="fas fa-key"></i>
      <input
        type="password"
        name="author"
        id="userPassword"
        placeholder="your password.."
      />
      <label for="userPassword" class="hide">User Password</label>
    </div>
    <!--textarea에 입력하는 값을 message에 저장-->
    <textarea
      name="review"
      id="review-area"
      cols="15"
      rows="10"
      v-model="message"
    >
    </textarea>
    <div class="article-button">
      <button type="button" class="write" @click="constructMessage">
        send
      </button>
      <button type="button" class="cancel" @click="togglePopup">cancel</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      message: "",
      date: "",
    };
  },
  methods: {
    togglePopup() {
      //state.popupFlag값을 false로 변경
      this.$store.commit("offPopup");
    },
    constructMessage() {
      //현재 date정보를 IOS형식으로 변경하고 앞에서 10글자만 반환 후 (-)을 (.)로 변경
      //2023-12-01 = 2023.12.01
      this.date = new Date().toISOString().substr(0, 10).replace(/-/g, ".");
      //console.log(this.id, this.message, this.date);
      //store.js의 setBoardList메서드 호출하여 입력한 데이터를 전달
      this.$store.commit({
        type: "setBoardList",
        date: this.date,
        id: this.id,
        message: this.message,
      });
    },
  },
};
</script>

<style scoped>
.write-wrap {
  z-index: 0;
  background-color: var(--deep-color);
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 0.1rem solid var(--border-color);
  border-radius: 1rem;
  width: 72.083333333333336%;
  height: 50%;
}

.write-wrap > textarea {
  color: var(--font-color);
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-color: var(--text-color);
  border-radius: 1rem;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none; /*remove the resize handle on the bottom right*/
  padding: 0.5rem 1rem;
}

.article-info input {
  border: 0.1rem solid var(--text-color);
  border-radius: 1rem;
  margin-left: 0.7rem;
  padding: 0.5rem 1rem;
}

.article-info > .fas {
  color: var(--main-color);
  margin-left: 1rem;
}
.article-info,
textarea {
  margin-bottom: 1rem;
}

.article-info,
.article-button {
  margin-top: 0.6rem;
  margin-right: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.article-button > button {
  margin-right: 1.2rem;
}
</style>
