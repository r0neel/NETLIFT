import React from "react";
import Form from "../../../components/Form";
import { useDispatch, useSelector} from "react-redux";
import { updateUser} from "../../../actions/userActions";

const SettingsUsername = () => {
  const dispatch = useDispatch();
  const loggedOut = useSelector( state=> state.logout);
  const inputs = [
    {
      text: "username",
      message: "Must be between five and twenty characters",
      pattern: ".{5,20}",
    },
  ];

  const change = (e) => {
    // TODO submit data to server and add error handling
    e.preventDefault();
    const data = {"username": e.target.username.value};
    dispatch(updateUser(data));
    if (loggedOut === true){
      alert("username has been changed please signin with new username");
    }
  };
  return (
    <div className="pt-8">
      <Form text="Change" inputs={inputs} handleSubmit={change} />
    </div>
  );
};

export default SettingsUsername;
