function convertNumberToWords(num) {
    console.time('>>> Time to do something is')
    if (num === 0) return "zero"
    if (num < 0) return "Negative number!!!"
    // Define an array of strings for number words
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ]
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ]
    const teens = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ]
    const thousands = ["", "thousand", "million", "billion"]

    // Convert the number to a string and pad with zeros if necessary
    const numStr = num.toString().padStart(9, "0")

    // Split the string into groups of three digits
    const numArr = numStr.match(/.{1,3}/g)

    // Initialize an empty array to hold the words for each group of digits
    const wordsArr = []

    // Loop through each group of digits and convert to words
    for (let i = 0; i < numArr.length; i++) {
        const groupNum = parseInt(numArr[i], 10)

        if (groupNum === 0) {
            continue
        }

        let groupWords = ""

        // Convert the hundreds digit to words if present
        const hundredsDigit = Math.floor(groupNum / 100)
        if (hundredsDigit > 0) {
            groupWords += ones[hundredsDigit] + " hundred "
        }

        // Convert the tens and ones digits to words
        const tensDigit = Math.floor((groupNum % 100) / 10)
        const onesDigit = groupNum % 10
        if (tensDigit === 1 && onesDigit > 0) {
            groupWords += teens[onesDigit - 1] + " "
        } else {
            if (tensDigit > 0) {
                groupWords += tens[tensDigit] + " "
            }
            if (onesDigit > 0) {
                groupWords += ones[onesDigit] + " "
            }
        }

        // Add the appropriate thousands word if the group is not zero
        if (groupWords !== "") {
            groupWords += thousands[numArr.length - i - 1] + " "
        }

        // Add the group words to the array
        wordsArr.push(groupWords)
    }

    // Join the words for each group and return as a single string

    wordsArr.join("").trim()
    console.timeEnd('>>> Time to do something is')
    return 
}

const convertNumberToWords2 = (number, currency = 'USD') => {
    console.time('>>> Time to do something is')
    let oneToTwenty = [
        '', 'one ', 'two ', 'three ', 'four ', 'five ',
        'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ',
        'twelve ', 'thirteen ', 'fourteen ', 'fifteen ',
        'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ',
    ]
    let tenth = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety',
    ]

    number = `${number}`

    let dot_index = number.indexOf('.')
    let remainder = ''
    let remainder_in_words = ''

    if (dot_index >= 0) {
        remainder = number.slice(dot_index + 1, number.length)
        remainder_in_words = tenth[remainder[0] * 1] + (oneToTwenty[remainder[1] * 1] ?
            oneToTwenty[remainder[1] * 1] : '')
        number = number.slice(0, dot_index)
    }

    if (number.length > 7) return 'over'

    let matcher = `0000000${number}`.slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/)
    if (!matcher) return null

    let words = ''

    words += matcher[1] * 1 !== 0 ? (oneToTwenty[matcher[1] * 1] ||
        `${tenth[matcher[1][0]]} ${oneToTwenty[matcher[1][1]]}`) + 'million ' : ''
    words += matcher[2] * 1 !== 0 ? (oneToTwenty[matcher[2] * 1] ||
        `${tenth[matcher[2][0]]} ${oneToTwenty[matcher[2][1]]}`) + 'hundred ' : ''
    words += matcher[3] * 1 !== 0 ? (oneToTwenty[matcher[3] * 1] ||
        `${tenth[matcher[3][0]]} ${oneToTwenty[matcher[3][1]]}`) + 'thousand ' : ''
    words += matcher[4] * 1 !== 0 ? (oneToTwenty[matcher[4] * 1] ||
        `${tenth[matcher[4][0]]} ${oneToTwenty[matcher[4][1]]}`) + 'hundred ' : ''
    words += matcher[5] * 1 !== 0 ? (oneToTwenty[matcher[5] * 1] ||
        `${tenth[matcher[5][0]]} ${oneToTwenty[matcher[5][1]]}`) : ''
    if (number * 1 === 0)
        words += 'zero'

    if (currency === 'USD') {
        words += number * 1 > 1 ? ' dollars' : ' dollar'
    }

    if (remainder.length > 0)
        words += ` and ${remainder_in_words} ${remainder * 1 > 1 ? ' cents' : ' cent'}`

    console.timeEnd('>>> Time to do something is')
    return words
}

convertNumberToWords(999999)