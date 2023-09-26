import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  const handleAddUser = (user) => {
    axios.post("http://localhost:3000/users", user).then((response) => {
      setUsers([...users, response.data]);
    });
  };
  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };
  const handleUpdateUser = (user) => {
    axios.put(`http://localhost:3000/users/${user.id}`, user).then((response) => {
      setUsers(users.map((user) => (user.id === response.data.id ? response.data : user)));
    });
  };
  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => handleAddUser({ name: "Novo usuário" })}>Adicionar usuário</button>
    </div>
  );
};
export default App;