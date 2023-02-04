import axios from "axios";
const ApiService = {
    getAllData  : async()=>{
        const data = await axios.get('https://fakestoreapi.com/products')
        return data.data
    },
    getAllCatogries : async()=>{
        const data = await axios.get(`https://fakestoreapi.com/products/categories`)
        return data.data
    },
    getDataBycat : async(cat)=>{
        const data = await axios.get(`https://fakestoreapi.com/products/category/${cat}`)
        return data.data
    },
}
export default ApiService