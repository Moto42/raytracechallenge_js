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
let passedForEquality = false;
describe('comparing Tuples for equality', () => {
  const testCases = [
    {
      tuple1: new Vector(1,2,3),
      tuple2: new Vector(1,2,3),
      correct: true,
    },
    {
      tuple1: new Vector(1,2,3),
      tuple2: new Vector(3,2,1),
      correct: false,
    },
    {
      tuple1: new Vector(
        1/Math.sqrt(14),
        2/Math.sqrt(14),
        3/Math.sqrt(14),
      ),
      tuple2: new Vector(0.26726, 0.53452, 0.80178),
      correct: true,
    },
  ]
  for (let item of testCases){
    const {tuple1, tuple2, correct} = item;
    describe(
      `Tuple(${tuple1.x},${tuple1.y},${tuple1.z},${tuple1.w}) vs Tuple(${tuple2.x},${tuple2.y},${tuple2.z},${tuple2.w})`,
      () => {
      test('with Tuple.equals()', () => {
        expect(Tuple.equals(tuple1, tuple2)).toEqual(correct);
      });
      test('with instance.equals()', () => {
        expect(tuple1.equals(tuple2)).toEqual(correct);
      });
    });
  }
  passedForEquality = true;
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
describe('Negating Tuples', () => {
  test('Subtracting a vector from the zero vector', () => {
    const zero = new Vector(0,0,0);
    const vector = new Vector(1,-2,3);
    const target = new Vector(-1,2,-3);
    const result = Tuple.subtract(zero, vector);
    expect(result).toEqual(target);
  });
  test('with Tuple.negate()', () => {
    const tuple = new Tuple(1,-2,3,-4);
    const target = new Tuple(-1,2,-3, 4);
    const result = Tuple.negate(tuple);
    expect(result).toEqual(target);
  });
  test('with instance.negate()', () => {
    const tuple = new Tuple(1,-2,3,-4);
    const target = new Tuple(-1,2,-3, 4);
    const result = tuple.negate();
    expect(result).toEqual(target);
  });
});
describe('Scalar Multiplication', () => {
  describe('Multiplying a tuple by a scalar', () => {
    test('with Tuple.multiply', () => {
      const tuple  = new Tuple(  1,-2,   3, -4);
      const result = Tuple.multiply(tuple, 3.5);
      const target = new Tuple(3.5,-7,10.5,-14);
      expect(result).toEqual(target);
    });
    test('with instance.multiply', () => {
      const tuple  = new Tuple(  1,-2,   3, -4);
      const result = tuple.multiply(3.5);
      const target = new Tuple(3.5,-7,10.5,-14);
      expect(result).toEqual(target);
    });
  });
  describe('Multiplying a tuple by a fraction', () => {
    test('with Tuple.multiply', () => {
      const tuple  = new Tuple(  1,-2,   3, -4);
      const target = new Tuple(0.5, -1, 1.5, -2);
      const result = Tuple.multiply(tuple, .5);
      expect(result).toEqual(target);
    });
    test('with instance.multiply', () => {
      const tuple  = new Tuple(  1,-2,   3, -4);
      const target = new Tuple(0.5, -1, 1.5, -2);
      const result = tuple.multiply(.5);
      expect(result).toEqual(target);
    });
  });
});
describe('Scalar Division', () => {
  test('with Tuple.divide', () => {
    const tuple  = new Tuple(1,-2,3,-4);
    const target = new Tuple(0.5,-1,1.5,-2);
    const result = Tuple.divide(tuple, 2);
    expect(result).toEqual(target);
  });
  test('with instance.divide', () => {
    const tuple  = new Tuple(1,-2,3,-4);
    const target = new Tuple(0.5,-1,1.5,-2);
    const result = tuple.divide(2);
    expect(result).toEqual(target);
  });
});
describe('Computing Magnitude', () => {
  // each item is an array [Vector to test, correct Magnitude]
  let testCases = [
    [new Vector(1,0,0), 1],
    [new Vector(0,1,0), 1],
    [new Vector(0,0,1), 1],
    [new Vector(-1,-2,-3), Math.sqrt(14)],
  ]
  for(let item of testCases){
    const vector = item[0];
    const correct = item[1];
    describe(`of Vector(${vector.x},${vector.y},${vector.z})`, () => {
      test('with Tuple.Magnitude', () => {
        const magnitude = Tuple.magnitude(vector);
        expect(magnitude).toFloatingPointEqual(correct);
      });
      test('with instance.magnitude', () => {
        const magnitude = vector.magnitude();
        expect(magnitude).toFloatingPointEqual(correct);
      });
    });
  }
});
describe('Normalizing', () => {
  if(!passedForEquality) return;
  //an array of test cases, each case being [Vector to normalize, correct answer]
  const testCases = [
    [new Vector(4,0,0), new Vector(1,0,0)],
    // correct below is Vector(1√14, 2√14 3/√14) value used is aproximate
    [new Vector(1,2,3), new Vector(0.26726, 0.53452, 0.80178)],
  ];
  for(let item of testCases){

    const vector = item[0];
    const correct= item[1];

    describe(`Vector(${vector.x},${vector.y},${vector.z})`, () => {
      test('with Tuple.normalize', () => {
        const normalized = Tuple.normalize(vector);
        const isCorrect = correct.equals(normalized);
        expect(isCorrect).toEqual(true);
        expect(normalized.magnitude()).toEqual(1);
      });
      test('with instance.normalize', () => {
        const normalized = vector.normalize();
        const isCorrect = correct.equals(normalized);
        expect(isCorrect).toEqual(true);
        expect(normalized.magnitude()).toEqual(1);
      });
    });

  }
  test('the Zero Vector', () => {
    const zero = Vector(0,0,0);
    const normalized = zero.normalize();
    const isCorrect = zero.equals(normalized);
    expect(isCorrect).toEqual(true);
    expect(normalized.magnitude()).toBe(0);
  });
});
describe('Dot product', () => {
  test('Tuple.dot()', () => {
    const vector1 = new Vector(1,2,3);
    const vector2 = new Vector(2,3,4);
    expect(Tuple.dot(vector1,vector2)).toBe(20);
  });
  test('instance.dot()', () => {
    const vector1 = new Vector(1,2,3);
    const vector2 = new Vector(2,3,4);
    expect(vector1.dot(vector2)).toBe(20);
  });
});
describe('Cross product of two vectors', () => {
  const vector1 = new Vector(1,2,3)
  const vector2 = new Vector(2,3,4);
  const correct1x2 = new Vector(-1,2,-1);
  const correct2x1 = new Vector(1,-2,1);
  test('Tuple.cross()', () => {
    expect(Tuple.cross(vector1,vector2)).toEqualTuple(correct1x2);
    expect(Tuple.cross(vector2,vector1)).toEqualTuple(correct2x1);
  });
  test('instance.cross()', () => {
    expect(vector1.cross(vector2)).toEqualTuple(correct1x2);
    expect(vector2.cross(vector1)).toEqualTuple(correct2x1);
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
