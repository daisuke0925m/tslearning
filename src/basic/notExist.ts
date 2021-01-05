export default function notExistSample() {
    let name = null
    console.log(typeof name, name)

    name = '名前'
    if (!name) {
        console.log(name)
    } else {
        console.log(name)
    }

    let age = undefined
    console.log(typeof age, age)

    age = 28
    if (!age) {
        console.log(age)
    } else {
        console.log(age)
    }
}
