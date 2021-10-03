import http from "../axios/http-common";

class UserService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    console.log(data);
    return http.post("/auth/register", {
      name: data.name,
      email: data.email,
      password: data.password
    });
  }

  update(data, id ) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  findByEmail(email) {
    return http.get(`/tutorials?title=${email}`);
  }
}

export default new UserService();