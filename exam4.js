// 3진법 뒤집기 - Level 1

function solution(n) {
    const base3 = n.toString(3)
    console.log(base3)

    const arrayBase3 = base3.split('')
    console.log(arrayBase3)

    const reverseArray3 = arrayBase3.reverse()
    console.log(reverseArray3)

    const strBase3 = reverseArray3.join('')
    console.log(strBase3)

    const intBase3 = parseInt(strBase3, 3)
    console.log("intBase3", intBase3)

    return intBase3
}

const value = solution(45)
console.log("return : ", value)


