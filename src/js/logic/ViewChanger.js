import ListLogic from './ListLogic';

const ViewChanger = {

  openAppList() {
    ListLogic.setAppList().then(() => {
      $('.kv-bar').css('display', 'none');
      $('.kv-app-list').css('display', 'block');
      $('.kv-close').css('display', 'none');
      $('.kv-content').css('display', 'none');
    });
  },

  openViewer() {
    $('.kv-bar').css('display', 'none');
    $('.kv-app-list').css('display', 'none');
    $('.kv-close').css('display', 'block');
    $('.kv-content').css('display', 'block');
  },

  closeViewer() {
    $('.kv-bar').css('display', 'block');
    $('.kv-app-list').css('display', 'none');
    $('.kv-close').css('display', 'none');
    $('.kv-content').css('display', 'none');
  }
};

export default ViewChanger;