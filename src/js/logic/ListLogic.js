import App from '../middleware/App';
import EventSetter from './EventSetter';

const ListLogic = {

  setAppList() {
    return App.getAppList().then(response => {
      const apps = response.apps;
      const $list = $('<div>');
      apps.forEach(app => {
        const $item = $('<div class="kv-app-item">').html(app.name);
        EventSetter.setListClickEvent($item, app.appId);
        $list.append($item);
      });

      $('.kv-app-list').append($list);
    });
  }
};

export default ListLogic;