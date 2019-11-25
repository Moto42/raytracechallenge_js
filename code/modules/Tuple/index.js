

export function Tuple(x,y,z,w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
  this.isPoint  = !!w;
  this.isVector = !w;
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

export function Point(x,y,z) {
  return new Tuple(x,y,z,1);
}
export function Vector(x,y,z) {
  return new Tuple(x,y,z,0);
}

export default Tuple;
