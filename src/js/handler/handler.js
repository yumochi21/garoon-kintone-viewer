import $ from 'jquery';

import template from '../component/template';
import EventSetter from '../logic/EventSetter';

const handler = {
  
  handleDisplayShow() {

    $('body').append(template);

    EventSetter.setBarClickEvent();
    EventSetter.setCloseClickEvent();
  }
};

export default handler;