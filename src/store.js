import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      boardList: [], //게시글 배열
      popupFlag: false, //true : 팝업창 열림
    };
  },
  getters: {
    /* 사용안함*/
  },
  //데이터 삽입
  mutations: {
    setBoardList(state, item) {
      state.popupFlag = false; //팝업 닫음
      return state.boardList.push(item); //외부 컴포넌트에서 전달받은 item(데이터)를 boardList배열에 넣어줌
    },
    onPopup(state) {
      //팝업창 열림
      return (state.popupFlag = true);
    },
    offPopup(state) {
      //팝업창 닫힘
      return (state.popupFlag = false);
    },
  },
  actions: {
    /*사용안함 */
  },
});

export default store;
