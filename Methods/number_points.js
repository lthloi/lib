(() => {
    const numberNeedToConvert = 123455

    const number_in_string =
        numberNeedToConvert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    console.log('>>> Result >>>', number_in_string)
})()