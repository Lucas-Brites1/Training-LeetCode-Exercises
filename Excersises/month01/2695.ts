/*

!Exercise: 2695. Array Wrapper

? Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

? 1. When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements 
?    in both arrays.

? 2. When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. 
?    For example, [1,2,3].
 
! Example 1:

! Input: nums = [[1,2],[3,4]], operation = "Add"
! Output: 10
! Explanation:
! const obj1 = new ArrayWrapper([1,2]);
! const obj2 = new ArrayWrapper([3,4]);
! obj1 + obj2; // 10

* Example 2:

* Input: nums = [[23,98,42,70]], operation = "String"
* Output: "[23,98,42,70]"
* Explanation:
* const obj = new ArrayWrapper([23,98,42,70]);
* String(obj); // "[23,98,42,70]"

? Example 3:

? Input: nums = [[],[]], operation = "Add"
? Output: 0
? Explanation:
? const obj1 = new ArrayWrapper([]);
? const obj2 = new ArrayWrapper([]);
? obj1 + obj2; // 0?
*/

class ArrayWrapper {

    arrayNumber: number[];

    constructor(arrayNumber: number[]) {
        this.arrayNumber = arrayNumber;
    }

    valueOf(): number {
        return this.arrayNumber.reduce((accumulator, number) => accumulator + number, 0)
    }

    toString(): string {
        return `[${this.arrayNumber.join(`,`)}]`
    }

    [Symbol.toPrimitive](hint: string) {
        if (hint === "number") {
            return this.valueOf()
        } else if (hint === "string") {
            return this.toString()
        }
        return this.valueOf()
    }

    static add(a: ArrayWrapper, b: ArrayWrapper) {
        return a.valueOf() + b.valueOf();
    }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);