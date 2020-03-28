const KintoneRenkei = {

  getKintoneToken() {
    return garoon.connect.kintone.getRequestToken();
  }
};

export default KintoneRenkei;