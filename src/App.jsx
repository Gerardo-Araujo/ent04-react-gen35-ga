import { useEffect, useState } from "react";
import "./App.css";
import useCrud from "./hooks/UseCrud.js";
import FormUser from "./assets/components/FormUser";
import UserCard from "./hooks/UserCard";

function App() {
  const [userEdit, setUserEdit] = useState();
  const [formIsClose, setformIsClose] = useState(true);

  const BASEURL = "https://users-crud.academlo.tech";
  const [users, getUsers, createUser, deleteUser, updateUser] =
    useCrud(BASEURL);

  useEffect(() => {
    getUsers("/users/");
  }, []);

  const handleOpenForm = () => {
    setformIsClose(false);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="form__title">User CRUD</h1>
        <button onClick={handleOpenForm} className="form__btn">
          Create New User
        </button>
      </header>
      <div className="div__h2">
       
        <h2 className="form__title__h2">CREACION DE USUARIOS</h2>
      </div>
      <FormUser
        createUser={createUser}
        userEdit={userEdit}
        updateUser={updateUser}
        setUserEdit={setUserEdit}
        formIsClose={formIsClose}
        setformIsClose={setformIsClose}
      />
      <div className="tempo">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserEdit={setUserEdit}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
