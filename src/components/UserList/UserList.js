import StyledList from "../StyledComponents/StyledList";
import Card from "../StyledComponents/UI/Card";
import User from "../User/User";

const UserList = (props) => {
  return (
    <Card>
      <StyledList>
        {props.listOfUsers.map((user) => {
          return (
            <li key={user.key}>
              <User name={user.name} age={user.age} />
            </li>
          );
        })}
      </StyledList>
    </Card>
  );
};

export default UserList;
