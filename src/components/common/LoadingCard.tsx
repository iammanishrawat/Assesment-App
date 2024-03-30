import { Modal, Spinner } from "react-bootstrap";

const LoadingCard = ({
  show = false,
  title = "Please wait...",
  message = "",
  hideLoader = false
}: any) => {
  return (
    <>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title"
        centered
        size={'sm'}
      >
        <Modal.Body>
          <div className={`cardLoader`}>
            <div className="text-center">
              {!hideLoader && <Spinner animation="border" variant="info"/>}
              <div>{title}</div>
              <div>{message}</div>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoadingCard;
