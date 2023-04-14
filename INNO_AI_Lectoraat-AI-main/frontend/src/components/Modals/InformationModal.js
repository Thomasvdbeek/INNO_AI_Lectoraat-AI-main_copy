import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col} from 'reactstrap';

class InformationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            icon: "nc-icon nc-tap-01",
            title: props.title? props.title : "Certainty score",
            score: props.score? props.score : "0.9",
            body: props.body? props.body : "A medical AI model, trained on a vast dataset of anonymized patient records, utilized advanced algorithms to identify patterns and relationships between various input features and the likelihood of COVID-19. The model considered symptoms, demographics, pre-existing conditions, exposure history, and lab test results.\n" +
                "\n" +
                "In this case, the patient exhibited multiple high-risk factors, such as severe symptoms, recent travel to a hotspot, and a positive PCR test. The AI model calculated a certainty score of 0.9, indicating high confidence in a COVID-19 diagnosis. However, medical professionals still rely on their expertise to make the final diagnosis and treatment decisions"
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button className={"btn-primary"} onClick={this.toggle}>
                    {
                        <i className={this.state.icon}/>
                    }
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        <Row>
                            <Col md={10} className={"align-content-start font-weight-bold "}>
                                 <span className={"align-content-start"}>
                                     {this.state.title + ": "}
                                 </span>
                            </Col>
                            <Col md={2} className={"align-content-end font-weight-bold size2rem text-blue"}>
                                <span>
                                    {this.state.score}
                                </span>
                            </Col>
                        </Row>
                    </ModalHeader>

                    <ModalBody>
                        <p className={"size1rem"}>
                            {this.state.body}
                        </p>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Hide</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default InformationModal;
