export const EPSILON = .000001

export function equals(a,b){
  return Math.abs(a-b) < EPSILON;
}
