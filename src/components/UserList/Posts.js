import React, { useState } from "react";
import "./Post.css";
import { Button } from "react-bootstrap";
//modal
import MyModal from "../Modal/Modal";
import { deleteUserSuccess } from "../../redux/Action";
const Posts = ({ users, view, dispatch }) => {
  const [modalShow, setModalShow] = useState(false);
  const [whichmodal, setWhichmodal] = useState();
  const [currentuser, setCurrentUser] = useState("");
  const deleteItem = value => dispatch(deleteUserSuccess(value));
  const handlaUpdate = item => {
    setCurrentUser(item);
    setModalShow(true);
    setWhichmodal("update");
  };
  const handleDelete = item => {
    deleteItem(item);
  };
  const handleAdd = () => {
    setModalShow(true);
    setWhichmodal("add");
  };
  return (
    <ul>
      <Button onClick={handleAdd}>Yeni Kayıt Ekle</Button>
      {view ? (
        users &&
        users.map(item => {
          return (
            <div
              style={{
                margin: 20,
                border: "1px solid #ddd",
                boxShadow: "3px 6px #888888",
                padding: "5px",
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              key={item.phone}
            >
              <img style={{ borderRadius: 100 }} src={item.picture.large} />
              <p>
                {item.name.title}
                &nbsp;
                {item.name.first}
                &nbsp;
                {item.name.last}
              </p>

              <p>{item.gender}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <button
                style={{
                  width: 100,
                  height: 30,
                  padding: 5,
                  background: "none"
                }}
                onClick={() => handleDelete(item)}
              >
                sil
              </button>
              <button
                style={{
                  width: 100,
                  height: 30,
                  padding: 5,
                  color: "red",
                  background: "none",
                  outline: 0
                }}
                onClick={() => handlaUpdate(item)}
              >
                güncelle
              </button>
            </div>
          );
        })
      ) : (
        <div>
          <table id="table">
            <thead>
              <tr>
                <td>Name-Surname</td>
                <td>Gender</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
            </thead>

            {users &&
              users.map(item => {
                return (
                  <tbody>
                    <tr>
                      <td>{item.name.first}</td>
                      <td>{item.gender}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      )}
      <MyModal
        user={currentuser}
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModal={whichmodal}
      />
    </ul>
  );
};

export default Posts;
