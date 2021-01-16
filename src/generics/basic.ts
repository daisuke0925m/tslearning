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

    type Reduce = {
        (array: string[], initialValue: string): string
        (array: number[], initialValue: number): number
    }

    type GenericReduce<T> = {
        (array: T[], initialValue: T): T
    }

    const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    console.log(genericStringReduce(['1', '1'], '1'))
}
