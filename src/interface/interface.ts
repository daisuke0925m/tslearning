interface Bread {
    calories: number
}

interface Bread {
    type: string
}

const francePan: Bread = {
    calories: 300,
    type: 'hard',
}

type MaboDofu = {
    calories: number
    spicyLevel: number
}

type Rice = {
    calories: number
    gram: number
}

type MaboDon = MaboDofu & Rice

const maboDon: MaboDon = {
    calories: 500,
    spicyLevel: 10,
    gram: 350,
}

interface Book {
    page: number
    title: string
}

interface Magazine extends Book {
    cycle: 'daily' | 'weekly'
}

const jum: Magazine = {
    cycle: 'weekly',
    page: 300,
    title: 'ジャンプ',
}
