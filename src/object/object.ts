export default function objectSample() {
    // const a: object = {
    //     name: 'name',
    //     age: 28
    // }

    let country: {
        language: string
        name: string
    } = {
        language: 'japanese',
        name: 'Japan',
    }
    console.log(country)

    country = {
        language: 'English',
        name: 'USA',
    }
    console.log(country)

    const Human: {
        age: number
        lastName: string
        readonly firstName: string
        gender?: string
    } = {
        age: 28,
        lastName: 'Yamada',
        firstName: 'Taro',
    }

    Human.gender = 'male'
    Human.lastName = 'tana'
    console.log(Human)
}
