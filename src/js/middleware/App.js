import $ from 'jquery';

import KintoneRenkei from './KintoneRenkei';

const App = {

  getAppList(keyword) {
    return new Promise((resolve, reject) => {
      KintoneRenkei.getKintoneToken().then(token => {
        this.getAppListRequest(null, keyword, 0, token, resolve, reject);
      });
    });
  },

  getAppListRequest(response, keyword, offset, token, resolve, reject) {
    const params = {
      limit: 100,
      offset: offset
    };

    if (keyword && keyword !== '') {
      params.name = keyword;
    }

    let queryString = '';
    for (var prop in params) {
      queryString += '&' + prop + '=' + String(params[prop]);
    }

    $.ajax({
      url: '/k/v1/apps.json?__REQUEST_TOKEN__=' + token + queryString,
      type: 'GET'
    }).done(result => {
      if (result.apps.length === 0) {
        resolve(response);
        return;
      }
      
      if (!response) {
        this.getAppListRequest(result, keyword, offset + 100, token, resolve, reject);
        return;
      }

      response.apps = response.apps.concat(result.apps);
      this.getAppListRequest(response, keyword, offset + 100, token, resolve, reject);
    });
  }
};

export default App;