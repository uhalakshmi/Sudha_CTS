import axios from 'axios'

class EmployeesServices{
    url = "http://localhost:5005/employees";
    getEmployees() {
        return axios.get(this.url);
    }
    addEmployee(employee) {
        return axios.post(this.url, employee)
    }
    updateEmployee(employee) {
        const url = `${this.url}/${employee.id}`
        console.log("updatatin testing");
        return axios.put(url, employee)
    }
    deleteEmployee(id) {
        const url = `${this.url}/${id}`;
        return axios.delete(url)
    }
}

export default new EmployeesServices();