import { useState } from "react";
import Button from "../StyledComponents/UI/Button";
import Card from "../StyledComponents/UI/Card";

const EMPTY_USER = {
  name: "",
  age: "",
  key: "",
};

const NewUser = (props) => {
  const [userInput, setUser] = useState(EMPTY_USER);

  /**
   * Change the state of username to input provided by user
   */
  function updateUserName(event) {
    setUser((prevUser) => {
      return { ...prevUser, name: event.target.value };
    });
  }

  /**
   * Change the state of user's age to input provided by user
   */
  function updateUserAge(event) {
    setUser((prevUser) => {
      return { ...prevUser, age: event.target.value };
    });
  }

  /**
   * Pass user input to parent compent to add the new user to display
   */
  function addNewUser(event) {
    event.preventDefault();
    userInput.key = Math.random();
    props.addNewUser(userInput, EMPTY_USER, setUser);
  }

  return (
    <Card>
      <form onSubmit={addNewUser}>
        <label>Username</label>
        <input type="text" value={userInput.name} onChange={updateUserName} />
        <label>Age (Years)</label>
        <input
          type="number"
          step="1"
          value={userInput.age}
          onChange={updateUserAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default NewUser;
