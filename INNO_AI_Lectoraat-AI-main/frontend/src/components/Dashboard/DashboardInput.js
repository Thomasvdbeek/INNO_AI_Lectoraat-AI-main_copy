import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    CardSubtitle,
    CardTitle,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
    Table
} from 'reactstrap';

function DashboardInput(props) {
    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = () => {
        console.log(inputValues);
        alert.bind(null, 'Input values: ' + JSON.stringify(inputValues))();
    };

    const featureKeys = Object.keys(props.features);
    const halfLength = Math.ceil(featureKeys.length / 2);

    const renderFeatureTable = (startIndex, endIndex) => (
        <Col>
            <Table className="text-center">
                <tbody>
                {featureKeys.slice(startIndex, endIndex).map((featureKey, index) => (
                    <tr key={index}>
                        <td>
                            <Label tag={"p"} className="size1-5rem font-weight-bold text-muted">
                                {
                                    featureKey
                                }

                            </Label>
                        </td>
                        <td>
                            <FormGroup>
                                <Input
                                    type="number"
                                    name={featureKey}
                                    id={featureKey}
                                    placeholder={`0 ${props.features[featureKey]}`}
                                    className="float-left"
                                    style={{ width: '50%', margin: 'auto' }}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Col>
    );

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-dark font-weight-bold text-2rem" tag={"h1"}>
                        Input features for this decision
                    </CardTitle>
                    <CardSubtitle className="text-muted size1-25rem" tag={"h2"}>
                        <span> The model only predicts the features with valid values. Blank values are not predicted. </span>
                    </CardSubtitle>
                </CardHeader>
                <CardBody>
                    <Row>
                        {renderFeatureTable(0, halfLength)}
                        {renderFeatureTable(halfLength, featureKeys.length)}
                    </Row>
                </CardBody>
                <CardFooter>
                        <Button
                            className="btn-primary btn-wd"
                            style={{ width: '10%', margin: 'auto' }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default DashboardInput;
