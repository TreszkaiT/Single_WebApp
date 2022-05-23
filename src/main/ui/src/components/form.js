import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import useRequest from "../hooks/use-request";

const EditForm = ({ first, second, phoneNumber, targetAddress, id }) => {

    const [firstName, SetFirstName] = useState("");
    const [secondName, SetSecondName] = useState("");
    const [telNumber, SetTelNumber] = useState("");
    const [address, SetAddress] = useState("");

    const { doRequest, errors } = useRequest({
        url: `http://localhost:8080/users/modify`,
        method: "put",
        body: {
            id,
            firstName,
            secondName,
            telNumber,
            address
        },
        onSuccess: () => window.location.reload()
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        try {
            doRequest()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        !first ? SetFirstName(" ") : SetFirstName(first);
        !second ? SetSecondName(" ") : SetSecondName(second);
        !phoneNumber ? SetTelNumber("") : SetTelNumber(phoneNumber);
        !targetAddress ? SetAddress(" ") : SetAddress(targetAddress);
    }, [first, second, phoneNumber, targetAddress])


    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control value={firstName} onChange={e => SetFirstName(e.target.value)} type="text" placeholder="Your First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control value={secondName} onChange={e => SetSecondName(e.target.value)} type="text" placeholder="Your Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail3">
                <Form.Label>Phone</Form.Label>
                <Form.Control value={telNumber} onChange={e => SetTelNumber(e.target.value)} type="text" placeholder="Your phone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail4">
                <Form.Label>Address</Form.Label>
                <Form.Control value={address} onChange={e => SetAddress(e.target.value)} type="text" placeholder="Your address" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default EditForm;