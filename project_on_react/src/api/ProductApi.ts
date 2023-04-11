export const ProductApi=async()=>{
    
    let data= await fetch('https://fakestoreapi.com/products')
    return await(await data).json()


}