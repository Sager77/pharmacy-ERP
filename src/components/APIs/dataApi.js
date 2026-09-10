import axios from 'axios';
const baseURL = "http://localhost:3000/api"

const api = axios.create({
    baseURL
})

export const getItems = async () => {
    const response = await api.get('/items');
    return response.data;
};


export const addItem = async (itemData) => {
    const response = await api.post('/items', itemData, {
        headers: {
            'Content-Type': 'application/json', // Sending JSON
        },
    });
    return response.data;
};



export const getItembyId = async (singleItem) => {

    console.log("id from api file at frontend ---> ", singleItem)
    try {

        console.log('this is try');
        const response = await api.get(`/items/${singleItem}`);
        console.log("this is response data: ", response.data);
        return response.data;

    } catch (error) {
        console.log("the error message at frontend", error);
    }


}


export const updatebyId = async (id, data) => {
    console.log("id from updat function",id);
    try {
        const response = await api.put(`/items/update/${id}`, data);
        console.log("update item: ", response);
        return response.data;
        
    } catch (error) {
        console.log("Got error:", error);
    }

}

export const deleteById = async (id) => {
   
    const response = await api.delete(`/items/delete/${id}`);
    
}