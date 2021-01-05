export default function unknownSample() {
    const maybeNumber: unknown = 10
    console.log(typeof maybeNumber, maybeNumber)

    const isFoo = maybeNumber === 'foo'
    console.log(typeof isFoo, isFoo)

    // const sum = maybeNumber + 10

    if (typeof maybeNumber === 'number') {
        const sum = maybeNumber + 10
        console.log(typeof sum, sum)
    }
}
