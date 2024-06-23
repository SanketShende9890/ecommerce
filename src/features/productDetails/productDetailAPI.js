import axios from "axios"

export const getSingleProductDetails = (id)=>{
    return new Promise((resolve, reject)=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(response=>{
            resolve({data: response.data})
        })
        .catch(err=>{
            reject(err)
        })
    })
}