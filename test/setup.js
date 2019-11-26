import {equals} from '../code/modules/M42Math';
import {Tuple} from  '../code/modules/Tuple';

//Passes if the given values are 'close enough'
expect.extend({
  toFloatingPointEqual(recieved, value) {
    const pass = equals(recieved, value);
    return {
      pass: pass,
    };
  }
});

//Passes if the recieved Tuple is equal to the value Tuple
expect.extend({
  toEqualTuple(recieved, value) {
    const pass = Tuple.equals(recieved, value);
    return {
      pass: pass,
    };
  }
});
