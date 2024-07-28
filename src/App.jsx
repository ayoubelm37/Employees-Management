import './App.css';
import { useState } from 'react';
import Header from './component/Header';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    job: '',
    sexe: '',
    exp_year: '',
  });
  const handleChangeEmployee = (event) => {
    setCurrentEmployee({
      ...currentEmployee,
      [event.target.name]: event.target.value,
    });
  };
  const handleAddEmployee = (event) => {
    event.preventDefault();
    let newEmp = { ...currentEmployee, id: employees.length + 1 };
    setEmployees([...employees, newEmp]);
    setCurrentEmployee({
      id: '',
      name: '',
      email: '',
      phone: '',
      job: '',
      sexe: '',
      exp_year: '0',
    });
  };
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="roz">
          <div className="col-md-7">
            <h1 className="text text-primary">Add New Employee:</h1>
            <form onSubmit={handleAddEmployee}>
              <div className="form-group mt-2">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={currentEmployee.name}
                  onChange={handleChangeEmployee}
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={currentEmployee.email}
                  onChange={handleChangeEmployee}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  value={currentEmployee.phone}
                  onChange={handleChangeEmployee}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="job">Job</label>
                <select
                  name="job"
                  id="job"
                  className="form-control "
                  value={currentEmployee.job}
                  onChange={handleChangeEmployee}
                >
                  <option value="">Select a Job</option>
                  <option value="business development">
                    Business Development
                  </option>
                  <option value="coo">COO</option>
                  <option value="project manager">Project Manager</option>
                  <option value="doctor">Doctor</option>
                  <option value="engineer">Engineer</option>
                </select>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="sexe">Sexe</label>
                <br />
                <input
                  type="radio"
                  name="sexe"
                  id="male"
                  value="male"
                  onChange={handleChangeEmployee}
                />
                Male
                <input
                  type="radio"
                  name="sexe"
                  id="female"
                  value="female"
                  onChange={handleChangeEmployee}
                />
                Female
              </div>
              <div className="form-group mt-2">
                <label htmlFor="exp_year">Experience Years</label>
                <input
                  type="number"
                  max={20}
                  min={10}
                  name="exp_year"
                  id="exp_year"
                  className="form-control"
                  value={currentEmployee.exp_year}
                  onChange={handleChangeEmployee}
                />
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleAddEmployee}
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text text-primary">Employees List</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Job</th>
                  <th>Sexe</th>
                  <th>Experience Years</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {employees &&
                  employees.map((item) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <>
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.job}</td>
                          <td>{item.sexe}</td>
                          <td>{item.exp_year}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteEmployee(item.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
