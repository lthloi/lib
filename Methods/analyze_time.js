(() => {
    //enter time in miliseconds
    const timeNeedToConvert = 86580070 + 61 * 60 * 1000

    function getRemainderAfterPoint(number) {
        let number_in_string = number.toFixed(3)
        let remainder =
            number_in_string.slice(number_in_string.indexOf('.') + 1, number_in_string.length)
        return remainder
    }

    function rounder(number) {
        let number_in_string = number.toFixed(3)
        let rounded_number =
            number_in_string.slice(0, number_in_string.indexOf('.')) * 1
        return rounded_number
    }

    const Seconds = rounder(timeNeedToConvert / 1000)
    console.log('>>> Seconds >>>', Seconds)
    console.log('>>> Miliseconds Remainder >>>', timeNeedToConvert % 1000)
    console.log('')

    const Minutes = rounder(Seconds / 60)
    console.log('>>> Minutes >>>', Minutes)
    console.log('>>> Seconds Remainder >>>', Seconds % 60)
    console.log('')

    const Hours = rounder(Minutes / 60)
    console.log('>>> Hours >>>', Hours)
    console.log('>>> Minutes Remainder >>>', Minutes % 60)
    console.log('')

    const Days = rounder(Hours / 24)
    console.log('>>> Days >>>', Days)
    console.log('>>> Hours Remainder >>>', Hours % 24)
    console.log('')
})()