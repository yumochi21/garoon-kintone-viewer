import ViewChanger from './ViewChanger';
import PageChanger from './PageChanger';

const EventSetter = {

  setBarClickEvent() {
    $('.kv-bar').on('click', () => {
      ViewChanger.openAppList();
    });
  },

  setListClickEvent($listElement, appId) {
    $listElement.on('click', () => {
      ViewChanger.openViewer();
      PageChanger.changeKintonePage(appId);
    });
  },

  setCloseClickEvent() {
    $('.kv-close').on('click', () => {
      ViewChanger.closeViewer();
    });
  }
};

export default EventSetter;