import { classNames, prefixData } from './index'

describe('classNames', ()=>{
	test('keeps object keys wtesth truthy values', ()=>{
    expect(classNames({a: true,b: false,c: 0,d: null,e: undefined,f: 1})).toBe('a f');
  });

	test('joins arrays of class names and ignore falsy values', ()=>{
		expect(classNames('a', 0, null, undefined, true, 1, 'b')).toBe('a 1 b');
	});

	test('supports heterogenous arguments', ()=>{
		expect(classNames({a: true}, 'b', 0)).toBe('a b');
	});

	test('should be trimmed', ()=>{
		expect(classNames('', 'b', {}, '')).toBe('b');
	});

	test('returns an empty string for an empty configuration', ()=>{
		expect(classNames({})).toBe('');
	});

	test('supports an array of class names', ()=>{
		expect(classNames(['a', 'b'])).toBe('a b');
	});

	test('joins array arguments wtesth string arguments', ()=>{
		expect(classNames(['a', 'b'], 'c')).toBe('a b c');
		expect(classNames('c', ['a', 'b'])).toBe('c a b');
	});

	test('handles multiple array arguments', ()=>{
		expect(classNames(['a', 'b'], ['c', 'd'])).toBe('a b c d');
	});

	test('handles arrays that include falsy and true values', ()=>{
		expect(classNames(['a', 0, null, undefined, false, true, 'b'])).toBe('a b');
	});

	test('handles arrays that include arrays', ()=>{
		expect(classNames(['a', ['b', 'c']])).toBe('a b c');
	});

	test('handles arrays that include objects', ()=>{
		expect(classNames(['a', {b: true, c: false}])).toBe('a b');
	});

	test('handles deep array recursion', ()=>{
		expect(classNames(['a', ['b', ['c', {d: true}]]])).toBe('a b c d');
	});

	test('handles arrays that are empty', ()=>{
		expect(classNames('a', [])).toBe('a');
	});

	test('handles nested arrays that have empty nested arrays', ()=>{
		expect(classNames('a', [[]])).toBe('a');
	});

	test('handles all types of truthy and falsy property values as expected', ()=>{
		expect(classNames({
			// falsy:
			null: null,
			emptyString: "",
			noNumber: NaN,
			zero: 0,
			negativeZero: -0,
			false: false,
			undefined: undefined,

			// truthy (ltesterally anything else):
			nonEmptyString: "foobar",
			whtestespace: ' ',
			function: Object.prototype.toString,
			emptyObject: {},
			nonEmptyObject: {a: 1, b: 2},
			emptyList: [],
			nonEmptyList: [1, 2, 3],
			greaterZero: 1
		})).toBe('nonEmptyString whtestespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero');
	});

	// test('handles toString() method defined on object', ()=>{
	// 	expect(classNames({
	// 		toString: ()=>{ return 'classFromMethod'; }
	// 	})).toBe('classFromMethod');
	// });

	// test('handles toString() method defined inhertested in object', ()=>{
	// 	var Class1 = function() {};
	// 	var Class2 = function() {};
	// 	Class1.prototype.toString = function() { return 'classFromMethod'; }
	// 	Class2.prototype = Object.create(Class1.prototype);

	// 	expect(classNames(new Class2())).toBe('classFromMethod');
  // });
  test('handles nested arrays that have empty nested arrays', ()=>{
		expect(prefixData("prefixCls", 'a', 0, null,undefined, false, true, 'b', {f: true})).toBe('prefixCls-a prefixCls-b prefixCls-f');
	});
  
});