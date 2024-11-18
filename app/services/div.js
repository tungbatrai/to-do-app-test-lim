export default div = (a, b) => {
    if (b == 0) {
        throw Error('div 0')
    }
    return a / b
}