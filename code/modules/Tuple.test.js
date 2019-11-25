import {Tuple, Point, Vector} from './Tuple';

let tuple;

describe('A tuple with w=1.0 is a point', () => {
  beforeAll(() => { tuple = new Tuple(4.3, -4.2, 3.1, 1.0) });
  test('Values passed in are assigned correctly', () => {
    expect(tuple.x).toBe(4.3);
    expect(tuple.y).toBe(-4.2);
    expect(tuple.z).toBe(3.1);
    expect(tuple.w).toBe(1.0);
  });
  test('the tuple is a point', () => {
    expect(tuple.point).toBe(true);
  });
  test('The tuple is not a vector', () => {
    expect(tuple.vector).toBe(false);
  });
});

describe('A tuple with w=0 is a vector', () => {
  beforeAll(() => { tuple = new Tuple(4.3, -4.2, 3.1, 0.0) });
  test('Values passed in are assigned correctly', () => {
    expect(tuple.x).toBe(4.3);
    expect(tuple.y).toBe(-4.2);
    expect(tuple.z).toBe(3.1);
    expect(tuple.w).toBe(0.0);
  });
  test('the tuple is not a point', () => {
    expect(tuple.point).toBe(false);
  });
  test('The tuple is a vector', () => {
    expect(tuple.vector).toBe(true);
  });
});

test('Point() creates a Tuple with w=1', () => {
  let point = new Point(4,-4,3);
  let tuple = new Tuple(4,-4,3,1);
  expect(point).toEqual(tuple)
});

test('Vector() creates a Tuple with w=0', () => {
  let vector = new Vector(4,-4,3);
  let tuple  = new Tuple(4,-4,3,0);
  expect(vector).toEqual(tuple)
});
