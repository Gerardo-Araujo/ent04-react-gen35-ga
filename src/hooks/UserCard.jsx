import React from "react";
import "../assets/components/styles/UserCard.css";

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUser("/users/", user.id);
  };

  const handleEdit = () => {
    setUserEdit(user);
    handleOpenForm();

  };

   const birthday = new Date(user.birthday).toLocaleDateString('es-ES')
  return (
    <div className="container">
    <article className="card__container">
      <div className="card">
        <h2 className="card__title">{`${user.first_name} ${user.last_name}`}</h2>
        <ul className="card__list">
          <li className="card__list__item">
            <span>Email: </span>
            <span>{user.email}</span>
          </li>
          <li className="card__list__item">
            <span>Birthday: </span>
            <span>{birthday}</span>
          </li>
        </ul>
        <button className="card__btn" onClick={handleDelete}>
          Delete
        </button>
        <button className="card_btn" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </article>
    </div>
  );
};

export default UserCard;
