import { Injectable } from '@angular/core';


@Injectable()
export class CommonService {

  constructor() { }

  getReadableString(key: string) {
    return key.split(/(?=[A-Z])/).join(' ');
  }

  isListType(data, key: string) {
    if (typeof (data[key]) !== 'object') {
      return true;
    } else {
      return false;
    }
  }

  isArray(data) {
    if (Array.isArray(data)) {
      return true;
    } else {
      return false;
    }
  }

}
