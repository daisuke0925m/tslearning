export default function genericsBasicsSample() {
    const stringReduce = (array: string[], initialValue: string): string => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    console.log(stringReduce(['one ', 'two '], 'type'))

    const numberReduce = (array: number[], initialValue: number): number => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    console.log(numberReduce([1, 1], 1))
}
