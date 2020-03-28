const PageChanger = {

  changeKintonePage(appId) {
    $('.kv-frame').attr('src', '/k/' + String(appId) + '/');
  }
};

export default PageChanger;