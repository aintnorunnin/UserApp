import React from "react";
import ReactDOM from "react-dom";
import StyledBackdrop from "../StyledComponents/StyledBackdrop";
import StyledModal from "../StyledComponents/StyledModal";
import Button from "../StyledComponents/UI/Button";
import Card from "../StyledComponents/UI/Card";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <StyledBackdrop />,
        document.getElementById("modal-backdrop")
      )}
      {ReactDOM.createPortal(
        <StyledModal>
          <Card>
            {props.content}
            <Button type="button" onClick={props.resetValidationState}>
              Okay
            </Button>
          </Card>
        </StyledModal>,
        document.getElementById("modal-overlay")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
