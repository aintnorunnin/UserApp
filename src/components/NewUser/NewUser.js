import { useRef } from "react";
import Button from "../StyledComponents/UI/Button";
import Card from "../StyledComponents/UI/Card";

const NewUser = (props) => {
  const userNameRef = useRef("");
  const userAgeRef = useRef("");

  /**
   * Pass user input to parent compent to add the new user to display
   */
  function addNewUser(event) {
    event.preventDefault();
    const newUser = {
      name: userNameRef.current.value,
      age: userAgeRef.current.value,
      key: Math.random(),
    };

    if (props.addNewUser(newUser)) {
      userAgeRef.current.value = "";
      userNameRef.current.value = "";
    }
  }

  return (
    <Card>
      <form onSubmit={addNewUser}>
        <label>Username</label>
        <input type="text" ref={userNameRef} />
        <label>Age (Years)</label>
        <input type="number" step="1" ref={userAgeRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default NewUser;
