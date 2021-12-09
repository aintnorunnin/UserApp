import StyledModal from "../StyledComponents/StyledModal";
import Button from "../StyledComponents/UI/Button";
import Card from "../StyledComponents/UI/Card";

const ErrorModal = (props) => {
  const resetValidationState = () => {
    props.resetValidationState(props.initialValidationState);
  };

  return (
    <StyledModal>
      <div className="backdrop" />
      <div className="modal">
        <Card>
          {props.content}
          <Button type="button" onClick={resetValidationState}>
            Okay
          </Button>
        </Card>
      </div>
    </StyledModal>
  );
};

export default ErrorModal;
