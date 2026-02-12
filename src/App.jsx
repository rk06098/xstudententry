import { useState } from "react";
import "./styles.css";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    grade: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addStudent = () => {
    if (!form.name || !form.age || !form.grade) return;
    setStudents([...students, form]);
    setForm({ name: "", age: "", grade: "" });
  };

  const clearForm = () => {
    setForm({ name: "", age: "", grade: "" });
  };

  const removeStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Student Entry Form</h1>
        <p className="subtitle">Add students and review the list below.</p>

        <div className="form-row">
          <div>
            <label>Name</label>
            <input
              name="name"
              placeholder="e.g. MS Dhoni"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Age</label>
            <input
              name="age"
              placeholder="e.g. 14"
              value={form.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Grade</label>
            <select
              name="grade"
              value={form.grade}
              onChange={handleChange}
            >
              <option value="">Select grade</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
            </select>
          </div>
        </div>

        <div className="buttons">
          <button className="add" onClick={addStudent}>Add Student</button>
          <button className="clear" onClick={clearForm}>Clear</button>
        </div>

        {students.length === 0 ? (
          <div className="empty">No students added yet.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Grade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.age}</td>
                  <td>{s.grade}</td>
                  <td>
                    <button
                      className="remove"
                      onClick={() => removeStudent(i)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;