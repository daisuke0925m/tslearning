export default function arraySample() {
    const colors: string[] = ['red', 'blue']
    colors.push('yellow')
    console.log(colors)

    const even: Array<number> = [2, 3, 4]
    even.push(1, 2)
    console.log(even)

    const generateSomeArray = () => {
        const _someArray = []
        _someArray.push(123)
        _someArray.push('string')
        // _someArray.push(true)
        return _someArray
    }
    const someArray = generateSomeArray()
    // someArray.push(false)
    console.log(someArray)
}
