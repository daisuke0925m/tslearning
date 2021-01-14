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
}
