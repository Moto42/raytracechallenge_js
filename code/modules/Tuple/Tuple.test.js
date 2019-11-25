import {Tuple, Point, Vector} from './index.js';

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
    expect(tuple.isPoint).toBe(true);
  });
  test('The tuple is not a vector', () => {
    expect(tuple.isVector).toBe(false);
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
    expect(tuple.isPoint).toBe(false);
  });
  test('The tuple is a vector', () => {
    expect(tuple.isVector).toBe(true);
  });
});

describe('Adding Tuples', () => {
  test('...with Tuple.add(a,b)', () => {
    const tupleA = new Tuple(3,-2,5,1);
    const tupleB = new Tuple(-2,3,1,0);
    const target = new Tuple(1,1,6,1);
    const result = Tuple.add(tupleA, tupleB);
    expect(result).toEqual(target);
  });
  test('...with <instance>.add(a)', () => {
    const tupleA = new Tuple(3,-2,5,1);
    const tupleB = new Tuple(-2,3,1,0);
    const target = new Tuple(1,1,6,1);
    const result = tupleA.add(tupleB);
    expect(result).toEqual(target);
  });
});

describe('Subtracting two points', () => {
  test('...with Tuple.subtract()', () => {
    const point1 = new Point(3,2,1);
    const point2 = new Point(5,6,7);
    const target = new Vector(-2,-4,-6)
    const result = Tuple.subtract(point1, point2);
    expect(result).toEqual(target);
  });
  test('... with instance.subtract', () => {
    const point1 = new Point(3,2,1);
    const point2 = new Point(5,6,7);
    const target = new Vector(-2,-4,-6)
    const result = point1.subtract(point2);
    expect(result).toEqual(target);
  });
});

describe('Subtracting a vector from a point', () => {
  test('...with Tuple.subtract', () => {
    const point  = new Point(3,2,1);
    const vector = new Vector(5,6,7);
    const target = new Point(-2,-4-6);
    const result = Tuple.subtract(point, vector);
  });
  test('...with instance.subtract', () => {
    const point  = new Point(3,2,1);
    const vector = new Vector(5,6,7);
    const target = new Point(-2,-4-6);
    const result = point.subtract(vector);
  });
});

describe('Subtracting a Vector from a Vector', () => {
  test('...with Tuple.subtract', () => {
    const vector1 = new Vector(3,2,1);
    const vector2 = new Vector(5,6,7);
    const target  = new Vector(-2,-4-6);
    const result  = Tuple.subtract(vector1, vector2);
  });
  test('...with instance.subtract', () => {
    const vector1 = new Vector(3,2,1);
    const vector2 = new Vector(5,6,7);
    const target  = new Vector(-2,-4-6);
    const result  = vector1.subtract(vector2);
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
