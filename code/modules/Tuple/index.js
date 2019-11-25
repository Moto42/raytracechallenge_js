

export function Tuple(x,y,z,w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
  this.point  = !!w;
  this.vector = !w;
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

export function Point(x,y,z) {
  Tuple.call(this,x,y,z,1);
}
export function Vector(x,y,z) {
  Tuple.call(this,x,y,z,0);
}

export default Tuple;
