import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    increase(state, action) {
      //state변경함수에 파라미터 뚫는 법
      state.age += action.payload;
    },
  },
});

export let { changeName, increase } = user.actions

export default user;
