import moment from 'moment';
import request from '@/utils/request';

export default {
  namespaced: true,
  state: {
    dateRange: [null, null],
    chartData: null
  },
  mutations: {
    setDataRangeAndChartData(state, payload) {
      state.dateRange = payload.dateRange;
      state.chartData = payload.chartData;
    }
  },
  actions: {
    setDateRangeAndFetchChartData ({ commit }, dateRange) {
      const beginDate = moment(dateRange[0]).format('YYYY-MM-DD');
      const endDate = moment(dateRange[1]).format('YYYY-MM-DD');

      request({
        url: `/statscards/capacity?beginDate=${beginDate}&endDate=${endDate}`,
        method: 'get'
      }).then(res => {
        commit('setDataRangeAndChartData', {
          dateRange,
          chartData: res.data,
        });
      });
    }
  }
}
