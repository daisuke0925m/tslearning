export default function tupleSample() {
    const response: [number, string] = [200, 'ok']
    console.log(response)

    const girlfriends: [string, ...string[]] = ['kana', 'miku', 'keiko']
    girlfriends.push('aya')
    console.log(girlfriends)
}
