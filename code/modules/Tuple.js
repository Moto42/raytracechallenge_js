export function Tuple(x,y,z,w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
  this.point  = !!w;
  this.vector = !w;
}

export function Point(x,y,z) {
  Tuple.call(this,x,y,z,1);
}

export function Vector(x,y,z) {
  Tuple.call(this,x,y,z,0);
}

export default Tuple;
