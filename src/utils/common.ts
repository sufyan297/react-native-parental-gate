export const getRandomNumbers = (length: number) => {
    var result           = '';
    var characters       = '123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (doesHaveDuplicateNumber(result)) {
        result = getRandomNumbers(3); //recursion
    } //result
    return result;
}
const doesHaveDuplicateNumber = (result: string): boolean => {
    let check = false;
    result.split('').map((num, index) => {
        const no = result.split('').find((item, idx) => (item == num) && index != idx);
        if (no) {
            check = true;
        }
    })
    return check;
}