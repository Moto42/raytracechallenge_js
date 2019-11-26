import {equals} from '../M42Math';

/**
 * An ordered list of parameters defining either a vector or a point.
 * x,y,z are self-explanitory.
 * Remember that the coordinate system is Left Handed with thumb
 * facing back to you.
 *
 * w determines if this is a Vector (w=0) or Point (w=1)
 * @param       {Number} x a point in the coordinate system or a distance
 * @param       {Number} y a point in the coordinate system or a distance
 * @param       {Number} z a point in the coordinate system or a distance
 * @param       {Number} w determines if this is a Point (1) or a Vector(0)
 * @constructor
 */
export function Tuple(x,y,z,w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
  this.isPoint  = !!w;
  this.isVector = !w;
}

//check to see if two tuples are "equal" using the 'close enough'
//floating point check from M42Math
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

/**
 * Adds two tuples together
 *
 * Note that this may not always make sense in all cases.
 * - Adding a vector to a point will give you a new point (w=1)
 * - Adding a Vector to a Vector returns a new vector (w=1)
 * - However, adding two points gives you... what? (w=2)
 *
 * @param  {Tuple} a Tupple to be added.
 * @param  {Tuple} b Tupple to be added.
 * @return {Tuple} the sum of Tuples a and b.
 */
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

/**
 * Returns Difference between two tuples
 *
 * - Point-Point = Vector between the two points.
 * - Point-Vector = New Point. Move backwards along the given
 *   vector from first Point
 * - Vector - Vector = new Vector. 'change in direction between the two'
 * - Vector - Point = nonsense(?) w=-1. It's not a point or a Vector.
 * @param  {Tuple} a Tuple to be suptracted from.
 * @param  {Tuple} b Tuple to subtract by/with.
 * @return {Tuple}   Difference between the two Tuples provided
 */
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

/**
 * Reverse direction of a vector.
 * @param  {Tuple} tuple Vector to be negated.
 * @return {Tuple}       Negated vector (moving in opposite direction)
 */
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

/**
 * Multiply a Vector by a given amount
 *
 * "Extend this vector <number> times"
 * @param  {Tuple} tuple  Vector to be multiplied
 * @param  {Number} number Scalar toe multiply by
 * @return {Tuple}        New Tuple, scaled by the appropirate factor
 */
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

/**
 * divide a vector by a given factor
 * @param  {Tuple} tuple  Tuple to be divided.
 * @param  {Number} number The divisor
 * @return {Tuple}        [description]
 */
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

/**
 * Find the 'straight line' distance a vector travels.
 * @param  {Tuple} tuple Vector to be measured.
 * @return {Number}       the magnitude of the vector
 */
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

/**
 * Convert vectors into a Unit Vector of magnitude 1, preserving direction.
 *
 * Vectors can have any random magnitude, and you will want to scale them
 * down to a 'Unit Vector' of length/magnitude 1, while preserving their direction.
 *
 * This does that.
 * @param  {Tuple} tuple An arbitrary vector
 * @return {Tuple}       A Unit vector of the same direction.
 */
Tuple.normalize = function (tuple) {
  const magnitude = tuple.magnitude();
  if(magnitude === 0) return new Vector(0,0,0);
  const x = tuple.x/magnitude;
  const y = tuple.y/magnitude;
  const z = tuple.z/magnitude;
  return new Vector(x,y,z)
}
Tuple.prototype.normalize = function () {
  return Tuple.normalize(this)
}

/**
 * Returns dot-product of two Tuples, (a scalar)
 *
 * I dunno how to explain it. Something to do with intersecting rays with spheres.
 * Go here https://betterexplained.com/articles/vector-calculus-understanding-the-dot-product/ to get started
 *
 * @param  {Tuple} a Vector to be dotted
 * @param  {Tuple} b Vector to be dotted
 * @return {Number}   Dot product
 */
Tuple.dot = function (a,b){
  const x = a.x * b.x;
  const y = a.y * b.y;
  const z = a.z * b.z;
  const w = a.w * b.w;
  return (x+y+z+w);
}
Tuple.prototype.dot = function (b){
  return Tuple.dot(this, b);
}

/**
 * Find the Cross Product of two Vectors
 *
 * The new vector returned is perpenticular to the plane defined
 * by the two given vectors.
 *
 * Keep in mind that axb != bxa
 * in fact, one will be the negation of the other.
 * @param  {Tuple} a First vector to cross
 * @param  {Tuple} b Second vector to cross
 * @return {Tuple} The 3D cross product of the given vectors
 */
Tuple.cross = function (a,b){
  const x = (a.y * b.z)-(a.z * b.y);
  const y = (a.z * b.x)-(a.x * b.z);
  const z = (a.x * b.y)-(a.y * b.x);
  return new Vector(x,y,z);
}
Tuple.prototype.cross = function (b){
  return Tuple.cross(this, b);
}

/**
 * shorthand to get a Tuple with w=1. ie: A point.
 * @param       {Number} x x position of the point.
 * @param       {Number} y y position of the point.
 * @param       {Number} z z position of the point.
 * @constructor
 */
export function Point(x,y,z) {
  return new Tuple(x,y,z,1);
}
/**
 * Shorthand to get a Tuple with w=0. ie: a Vector
 * @param       {Number} x x velocity of the vector
 * @param       {Number} y y velocity of the vector
 * @param       {Number} z z velocity of the vector
 * @constructor
 */
export function Vector(x,y,z) {
  return new Tuple(x,y,z,0);
}

export default Tuple;
