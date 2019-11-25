import {equals} from '../code/modules/M42Math';

expect.extends({
  toFloatingPointEqual(recieved, value) {
    return equals(recieved, value);
  }
});
