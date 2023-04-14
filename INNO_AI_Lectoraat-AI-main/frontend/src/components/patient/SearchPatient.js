// SearchPatient.js
import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Row,
    Form,
    FormGroup,
    Input,
    Button,
    Label,
    CardFooter
} from "reactstrap";

const SearchPatient = ({ searchValues, handleSearchValueChange, handleSearch }) => {
    const criteria = [
        'Name',
        'BodyMassIndex',
        'ASAScore',
        'RespiratoryRate',
        'OxygenSaturation',
        'HeartRate',
        'BloodPressure',
        'BodyTemperature',
        'PainLevel',
        'MetabolicRate',
        'PhysicalActivity'
    ];

    const firstRowCriteria = criteria.slice(0, Math.ceil(criteria.length / 2));
    const secondRowCriteria = criteria.slice(Math.ceil(criteria.length / 2));

    return (
        <>
            <Row>
                <Col md="12">
                    <Card>
                        <Form>
                        <CardHeader>
                            <CardTitle className="text-dark font-weight-bold text-2rem" tag={"h4"}>Search Patient</CardTitle>
                        </CardHeader>
                        <CardBody>
                                <Row>
                                    {
                                        firstRowCriteria.map((criterion, index) => (
                                        <Col key={index} md="4">
                                            <FormGroup>
                                                <Label className={"font-weight-bold text-dark"}>
                                                    <input
                                                        type="checkbox"
                                                        name={criterion}
                                                        checked={searchValues[criterion].checked}
                                                        onChange={handleSearchValueChange}
                                                    />
                                                    {criterion}
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name={criterion}
                                                    value={searchValues[criterion].value}
                                                    onChange={handleSearchValueChange}
                                                    placeholder={criterion}
                                                    disabled={!searchValues[criterion].checked}
                                                />
                                            </FormGroup>
                                        </Col>
                                    ))}
                                </Row>
                                <Row>
                                    {
                                        secondRowCriteria.map((criterion, index) => (
                                        <Col key={index} md="4">
                                            <FormGroup>
                                                <Label className={"font-weight-bold text-dark"}>
                                                    <input
                                                        type="checkbox"
                                                        name={criterion}
                                                        checked={searchValues[criterion].checked}
                                                        onChange={handleSearchValueChange}
                                                    />
                                                    {criterion}
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name={criterion}
                                                    value={searchValues[criterion].value}
                                                    onChange={handleSearchValueChange}
                                                    placeholder={criterion}
                                                    disabled={!searchValues[criterion].checked}
                                                />
                                            </FormGroup>
                                        </Col>
                                    ))}
                                </Row>
                        </CardBody>
                            <CardFooter>
                                <FormGroup>
                                    <Button type="submit" className={"btn-primary btn-wd"} onClick={handleSearch}>Search</Button>
                                </FormGroup>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default SearchPatient;
