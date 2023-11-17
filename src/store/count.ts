import { createStore } from "pl-vue/lib/store";

const state = {
  count: 0,
}

const actions = {
  addCount() {
    state.count++;
  },
}

export default createStore(state, actions);
