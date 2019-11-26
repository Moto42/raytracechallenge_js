export const EPSILON = .00001

export function equals(a,b){
  return Math.abs(a-b) < EPSILON;
}
