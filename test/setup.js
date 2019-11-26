import {equals} from '../code/modules/M42Math';

expect.extend({
  toFloatingPointEqual(recieved, value) {
    const pass = equals(recieved, value);
    return {
      pass: pass,
    };
  }
});
