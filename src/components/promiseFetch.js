export const promiseFetch = (productos) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(productos)
        },2500)
    })
}