export default function notExistSample() {
    let name = null
    console.log(typeof name, name)

    name = '名前'
    if (!name) {
        console.log(name)
    } else {
        console.log(name)
    }
}
