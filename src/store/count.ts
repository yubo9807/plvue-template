import { createStore } from "pl-vue";

const state = {
  count: 0,
}

const actions = {
  addCount() {
    state.count++;
  },
}

export default createStore(state, actions);
