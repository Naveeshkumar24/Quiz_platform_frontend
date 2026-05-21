import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",

  initialState: {
    score: 0,
  },

  reducers: {

    // Set Score
    setScore: (state, action) => {
      state.score = action.payload;
    },

    // Reset Score
    resetScore: (state) => {
      state.score = 0;
    },

  },
});

export const {
  setScore,
  resetScore,
} = quizSlice.actions;

export default quizSlice.reducer;