export default function typeAliasSample() {
    type Country = {
        capital: string
        language: string
        name: string
    }

    const japan: Country = {
        capital: 'Tokyo',
        language: 'japanese',
        name: 'Japan',
    }
    console.log(japan)

    const usa: Country = {
        capital: 'wdc',
        language: 'english',
        name: 'usa',
    }
    console.log(usa)
}
