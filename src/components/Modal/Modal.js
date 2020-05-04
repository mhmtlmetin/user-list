import React, { Fragment, useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
//redux
import { useDispatch } from "react-redux";
import { updateUserSuccess } from "../../redux/Action";
function MyModal(props) {
  const [name, SetName] = useState("");
  const [surname, SetSurname] = useState("");
  const [gender, SetGender] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  //redux
  const dispatch = useDispatch();
  const update = value => dispatch(updateUserSuccess(value));
  const handleNameChange = e => {
    console.log(e.target.value);
    SetName(e.target.value);
    console.log(props.user);
  };
  const handleSunnameChange = e => {
    SetSurname(e.target.value);
  };
  const handleGenderChange = e => {
    SetGender(e.target.value);
  };
  const handleEmailChange = e => {
    SetEmail(e.target.value);
  };
  const handlePhoneChange = e => {
    SetPhone(e.target.value);
  };
  const handleSubmit = () => {
    const { user } = props;

    update({
      user,
      name,
      surname,
      gender,
      email,
      phone
    });
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleNameChange}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Surname
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleSunnameChange}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Gender
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleGenderChange}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Email
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleEmailChange}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Phone
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={handlePhoneChange}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Kaydet</Button>
          <Button onClick={props.onHide}>Kapat</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MyModal;
