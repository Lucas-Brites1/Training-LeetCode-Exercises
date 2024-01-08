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


function removeTrailingZeros(n: string): string {
    let array: string[] = [...n]
    let returnedNumber: string = ""

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == "0" && array[i - 1] === "0" || i === array.length - 1 && array[i] === "0") {
            array.slice(0, 3)
        }

        if (array[i]) {
            returnedNumber += array[i]
        }
    }

    console.log(returnedNumber)
    return ``
}

removeTrailingZeros(`13304420`)