import { useState } from "react";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";
import "./app.css";

const INITIAL_VALIDATION_STATE = {
  hasError: false,
  errorMessage: "",
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [userValidationState, setUserValidation] = useState(
    INITIAL_VALIDATION_STATE
  );

  /**
   * Add a newly created user to list of users. Perform validation before adding to list of users
   */
  function addNewUser(newUser) {
    if (userInputIsValid(newUser, setUserValidation)) {
      setUsers((prevUsers) => [newUser, ...prevUsers]);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Reset the user input validation state.
   */
  function resetValidationState() {
    setUserValidation(INITIAL_VALIDATION_STATE);
  }

  return (
    <div className="App">
      <NewUser addNewUser={addNewUser} />
      {users.length > 0 && <UserList listOfUsers={users} />}
      {userValidationState.hasError && (
        <ErrorModal
          content={userValidationState.errorMessage}
          resetValidationState={resetValidationState}
        />
      )}
    </div>
  );
};

/**
 * Validate user input. If input is not set validation state.
 */
function userInputIsValid(user, setUserValidation) {
  if (user.name.trim().length === 0 || user.age === "") {
    setUserValidation((prevState) => {
      return {
        ...prevState,
        hasError: true,
        errorMessage:
          "Please provide a valid input. No empty values allowed for name and age",
      };
    });
    return false;
  }

  if (user.age < 0) {
    setUserValidation((prevState) => {
      return {
        ...prevState,
        hasError: true,
        errorMessage: "User's age must not be greater than or equal to 0",
      };
    });
    return false;
  }
  return true;
}

export default App;
