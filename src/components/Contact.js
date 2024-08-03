import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';

export const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [showModal, setShowModal] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const validateForm = () => {
    for (const key in formDetails) {
      if (formDetails[key].trim() === '') {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({ success: false, message: 'Please fill out all fields.' });
      setShowModal(true);
      return;
    }

    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
    setShowModal(true);
  };

  return (
    <section className="contact" id="connect">
      <div
        ref={ref}
        className={`slide-in ${inView ? 'visible' : ''}`}
      >
        
      </div>
      <Container>
      <span className="img">
    <img
      className={`slide-in ${inView ? 'visible' : ''}`}
      src="https://user-images.githubusercontent.com/74038190/212750996-938b257b-266c-45a7-9af7-655341c0f58b.gif"
      alt="Example"
    />
  </span>

        <Row className="align-items-center">
          <Col size={12} md={6} className={`slide-in ${inView ? 'visible' : ''}`}>
           
          </Col>
          <Col size={12} md={6} className={`slide-in ${inView ? 'visible' : ''}`}>
            <h2>Send me a Message !</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col size={12} className="px-1">
                  <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      {/* Modal for status messages */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        backdrop="static" 
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{status.success ? 'Success' : 'Error'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {status.message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
