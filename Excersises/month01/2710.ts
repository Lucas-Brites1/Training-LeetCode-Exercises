/*
!Exercise: 2710.Remove-Trailing-Zeros-From-a-String

Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

Example 1:

Input: num = "51230100"
Output: "512301"
Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".
Example 2:

Input: num = "123"
Output: "123"
Explanation: Integer "123" has no trailing zeros, we return integer "123".
*/

//!1. First method to resolve, bad runtime 
function removeTrailingZeros(n: string): string {
    let array: string[] = [...n]
    let returnedNumber: string | string[] = ""

    for (let i = array.length - 1; i >= 0; i--) {

        if (array[i - 1] == "0" && array[i] === "0" || i === array.length - 1 && array[i] === "0") {
            if (returnedNumber) {
                returnedNumber += array[i]
            }
        } else {
            if (returnedNumber.length === 0 && array[i] === "0") {
                console.log("")
            } else {
                returnedNumber += array[i]
            }
        }

    }

    returnedNumber = returnedNumber.split("").reverse().join("")

    return returnedNumber
}

console.log(removeTrailingZeros("632000006015557606443347519427749601596558478450834618045759063013967150904200300000000"))

//! Good Runtime, bad memory
//! Method 2
function removeTrailingZeros2(n: string): string {
    while (n.endsWith("0")) {
        //Removing the last digit while its equal = "0"
        n = n.slice(0, -1)
    }
    return n
}

console.log(removeTrailingZeros2("632000006015557606443347519427749601596558478450834618045759063013967150904200300000000"))