export default function callbackSample() {
    const url = 'https://api.github.com/users/xfpng345'

    const fetchProfile = () => {
        return fetch(url)
            .then((res) => {
                res.json()
                    .then((json) => {
                        console.log('1', json)
                        return json
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const pf = fetchProfile()
    console.log('2', pf)
}
