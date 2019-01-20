import Vue from 'vue';
import Vuex from 'vuex';
import { Message } from 'element-ui';
import request from '@/utils/request';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fields: {
      email: 'john@smith.com',
      password: 'mypassword',
    },
    isLoggedIn: localStorage.getItem('isLoggedIn') === '1',
  },
  mutations: {
    setLoginResult (state, payload) {
      if (payload) {
        Message.success('Login success');
        state.isLoggedIn = true;
        state.fields = {
          email: '',
          password: '',
        };
        localStorage.setItem('isLoggedIn', '1');
      } else {
        Message.error('Wrong email or password');
      }
    },
    setLogout (state) {
      state.isLoggedIn = false
      localStorage.removeItem('isLoggedIn');
    },
  },
  actions: {
    fetchLogin ({ commit, state }) {
      request({
        url: '/login',
        method: 'post',
        data: {
          ...state.fields
        },
      }).then(res => {
        commit('setLoginResult', res.data.match);
      });
    },
    logout ({ commit }) {
      commit('setLogout');
    }
  },
});
