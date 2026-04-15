import React, { useState, useEffect } from "react";

function App() {
  // Initial student list
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", course: "Math", status: "Active" },
    { id: 2, name: "Bob", course: "Science", status: "Inactive" },
    { id: 3, name: "Charlie", course: "History", status: "Active" },
    { id: 4, name: "Diana", course: "English", status: "Active" },
    { id: 5, name: "Ethan", course: "Computer Science", status: "Inactive" },
  ]);

  const [newName, setNewName] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [apiStudents, setApiStudents] = useState([]);

  // Exercise 4 — Fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setApiStudents(data.slice(0, 5)); // show first 5 users
      });
  }, []);

  // Exercise 3 — Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: students.length + 1,
      name: newName,
      course: newCourse,
      status: "Pending",
    };
    setStudents([...students, newStudent]);
    setNewName("");
    setNewCourse("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Exercise 1 & 2 — Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> — {student.course} ({student.status})
          </li>
        ))}
      </ul>

      <h2>Exercise 3 — Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>

      <h2>Exercise 4 — Fetch API Students</h2>
      <ul>
        {apiStudents.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;