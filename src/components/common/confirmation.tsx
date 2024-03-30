import { Button, Modal } from "react-bootstrap";
import "./styles.scss";

const Confirmation = ({
  show = false,
  onHide = () => null,
  title = "Confirmation",
  description = "Are you sure",
  actionBtnName = "Okay",
  actionBtnColor = "white",
  actionBtnBgColor = "#00b8c2",
  onConfirmation = () => null,
  disabled = false,
  status = false,
  showToggle = false,
  updateToggleValue = () => null,
  toggleText = "",
}: any) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {description}
          {!!showToggle && (
            <div className="d-flex mt-2 gap-4">
              <span className="mt-1">{toggleText}</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input text-center toggle-size"
                  type="checkbox"
                  role="switch"
                  checked={status}
                  onChange={(event) =>
                    updateToggleValue(event?.target?.checked)
                  }
                />
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onHide()}>
            Cancel
          </Button>
          <Button
            onClick={onConfirmation}
            style={{
              backgroundColor: actionBtnBgColor,
              color: actionBtnColor,
              border: 0,
            }}
            disabled={disabled}
          >
            {actionBtnName}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Confirmation;
