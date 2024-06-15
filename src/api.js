import axios from "axios";

const users = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
});

const getNames = async () => {
    try {
        const response = await users.get('/');
        const userDetails = response.data.map(user => ({
            id: user.id,
            name: user.name
        }));
        return userDetails;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const getUserById = async (id) => {
    try{
        const response = await users.get(`/${id}`);
        return response.data;
    } catch(error){
        console.error(error);
        throw error;
    }
}
const createNewUser = async (user) => {
    try{
        const response = await users.post('/', user);
        console.log(user)
        return  response.data;
    } catch(error){
        console.error(error);
        throw error;
    }
}
export { getNames, getUserById, createNewUser };