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

type Booktype = {
    page: number
    title: string
}

interface Handbook extends Booktype {
    theme: string
}

const cotrip: Handbook = {
    page: 120,
    title: 'ことリップ',
    theme: '旅行',
}

class Comic implements Book {
    page: number
    title: string

    constructor(page: number, title: string, private publishYear: string) {
        this.page = page
        this.title = title
    }

    getPublishYear() {
        return this.title + 'が発売されたのは' + this.publishYear + '年です'
    }
}

const popularComic = new Comic(200, '毀滅のヤイバ', '2016')
