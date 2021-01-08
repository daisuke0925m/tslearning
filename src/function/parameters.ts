export const isUserSignedIn = (userId: string, username?: string): boolean => {
    if (userId === 'ABC') {
        console.log('Function parameters sample 1: User is signed in! UserName is', username)
        return true
    } else {
        console.log('Function parameters sample 2: User is not signed in .')
        return false
    }
}

export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
    if (userId === 'ABC') {
        console.log('Function parameters sample 1: User is signed in! UserName is', username)
        return true
    } else {
        console.log('Function parameters sample 2: User is not signed in .')
        return false
    }
}

export const sumProductsPrice = (...productsPrice: number[]): number => {
    return productsPrice.reduce((prevTotal: number, productPrice: number) => {
        return prevTotal + productPrice
    }, 0)
}
