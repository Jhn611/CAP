import axios from "axios";
const BASE_URL = "http://localhost:5000";
export async function register(email, password, role) {
    try {
        const response = await axios.post(BASE_URL + '/api/auth/register', {
            params:{
                "user-email": email,
                "user-password": password,
                "user-role": role
            }
        });
        const data = await response.data; 
        if(data.userId){
            return login(email, password)
        }

    } catch (error) {
        console.error('Ошибка при получении данных:', error.message);
        throw error; 
    }
}

export async function login(email, password) {
    try {
        const response = await axios.post(BASE_URL + '/api/auth/login', {
            params:{
                "user-email": email,
                "user-password": password,
            }
        });
        const data = await response.data; 
        if(data.token){
            return data; 
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error.message);
        throw error;  
    }
}