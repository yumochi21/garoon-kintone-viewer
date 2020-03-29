import App from '../middleware/App';
import EventSetter from './EventSetter';

const ListLogic = {

  setAppList() {
    return App.getAppList('【Gr⇔kin連携】').then(response => {
      $('.kv-app-list').html('');
      
      const apps = response.apps;
      const $list = $('<div>');
      
      const $listTitle = $('<div class="kv-app-list-title">');
      const $listTitleIcon = $('<img>').attr('src', 'https://static.cybozu.com/contents/k/image/argo/uiparts/widget/apps_56.png');
      const $listTitleText = $('<span>').html('アプリ');
      $listTitle.append($listTitleIcon);
      $listTitle.append($listTitleText);
      $('.kv-app-list').append($listTitle);

      apps.forEach(app => {
        const $appIcon = $('<img>').attr('src', 'https://static.cybozu.com/contents/k/image/icon/app/appTableBlue.png');
        const $appName = $('<span>').html(app.name);
        const $item = $('<div class="kv-app-item">');
        $item.append($appIcon);
        $item.append($appName);

        EventSetter.setListClickEvent($item, app.appId);
        $list.append($item);
      });

      $('.kv-app-list').append($list);
    });
  }
};

export default ListLogic;