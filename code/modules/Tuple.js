export function Tuple(x,y,z,w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
  this.point  = !!w;
  this.vector = !w;
}

export default Tuple;
