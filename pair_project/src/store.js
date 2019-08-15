import createStore from "unistore";

export const store = createStore({
  email: "",
  full_name: "",
  is_login: false,
  api_key: "",
  keyword: "",
  values: []
});

export const actions = store => ({
  setEmail(state, value) {
    return { email: value };
  },
  setName(state, value) {
    return { full_name: value };
  },
  setLogin: (state, value) => {
    return { is_login: value };
  },
  setKeyword: (state, value) => {
    return { keyword: value };
  },
  setValue: (state, value) => {
    return { values: value };
  },
  setApiKey: (state, value) => {
    return { api_key: value };
  }
});
