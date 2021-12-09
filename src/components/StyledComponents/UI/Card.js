import Styled from "styled-components";

const Card = Styled.div`
  background: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 50%;
  height: 10%;
  display: flex;
  margin: 10px auto;
  justify-content: center;
  align-content: center;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  font: inherit;
  display: block;
  width: 80%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
}
`;

export default Card;
