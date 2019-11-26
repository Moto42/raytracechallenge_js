import {equals} from '../M42Math';

export function Tuple(x,y,z,w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
  this.isPoint  = !!w;
  this.isVector = !w;
}

Tuple.equals = function (a,b){
  const x = equals(a.x, b.x);
  const y = equals(a.y, b.y);
  const z = equals(a.z, b.z);
  const w = equals(a.w, b.w);
  return (x && y && z && w);
}
Tuple.prototype.equals = function (b){
  return Tuple.equals(this, b);
}

Tuple.add = function (a,b){
  const x = a.x + b.x;
  const y = a.y + b.y;
  const z = a.z + b.z;
  const w = a.w + b.w;
  return new Tuple(x,y,z,w);
}
Tuple.prototype.add = function (b){
  return Tuple.add(this, b);
}

Tuple.subtract = function (a,b) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  const z = a.z - b.z;
  const w = a.w - b.w;
  return new Tuple(x,y,z,w);
}
Tuple.prototype.subtract = function (b) {
  return Tuple.subtract(this, b);
}

Tuple.negate = function (tuple) {
  const x = tuple.x * -1;
  const y = tuple.y * -1;
  const z = tuple.z * -1;
  const w = tuple.w * -1;
  return new Tuple(x,y,z,w);
}
Tuple.prototype.negate = function () {
  return Tuple.negate(this);
}

Tuple.multiply = function (tuple, number) {
  const x = tuple.x * number;
  const y = tuple.y * number;
  const z = tuple.z * number;
  const w = tuple.w * number;
  return new Tuple(x,y,z,w);
}
Tuple.prototype.multiply = function (number) {
  return Tuple.multiply(this,number)
}

Tuple.divide = function (tuple, number) {
  const x = tuple.x / number;
  const y = tuple.y / number;
  const z = tuple.z / number;
  const w = tuple.w / number;
  return new Tuple(x,y,z,w);
}
Tuple.prototype.divide = function (number) {
  return Tuple.divide(this,number)
}

Tuple.magnitude = function (tuple) {
  const x = tuple.x;
  const y = tuple.y;
  const z = tuple.z;
  const w = tuple.w;
  const sumOfSquares = x**2 + y**2 + z**2 + w**2;
  return Math.sqrt(sumOfSquares);
}
Tuple.prototype.magnitude = function () {
  return Tuple.magnitude(this)
}

Tuple.normalize = function (tuple) {
  const magnitude = tuple.magnitude();
  const x = tuple.x/magnitude;
  const y = tuple.y/magnitude;
  const z = tuple.z/magnitude;
  return new Vector(x,y,z)
}
Tuple.prototype.normalize = function () {
  return Tuple.normalize(this)
}

export function Point(x,y,z) {
  return new Tuple(x,y,z,1);
}
export function Vector(x,y,z) {
  return new Tuple(x,y,z,0);
}

export default Tuple;
