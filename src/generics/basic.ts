export default function genericsBasicsSample() {
    const stringReduce = (array: string[], initialValue: string): string => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    console.log(stringReduce(['one ', 'two '], 'type'))
}
