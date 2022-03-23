import axios from "axios";
const MONGO_URL = "https://ecommerce-pr.herokuapp.com/users";
class AuthService {
    async login(user) {
        console.log(user)
        console.log(MONGO_URL + "/login")
        return axios
            .post(MONGO_URL + "/login", {
                name: user.name,
                password: user.password,
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(user) {
        console.log(user)
        console.log(MONGO_URL + "/signup")

        return axios.post(MONGO_URL + "/signup", {
            name: user.name,
            email: user.email,
            password: user.password,
        });
    }
}
export default new AuthService();