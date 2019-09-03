import Axios from "../util/axios";
interface LoginParams {
    username: string;
    password: string;
}


class LoginApi extends Axios {
    login(data: LoginParams) {
        return this.axios.post("/user/login", data);
      }
}
export default new LoginApi();
