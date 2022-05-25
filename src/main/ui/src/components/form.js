import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import useRequest from "../hooks/use-request";
import { useHistory } from "react-router-dom";

const EditForm = ({ first, second, phoneNumber, targetAddress, id }) => {

    const [firstName, SetFirstName] = useState("");
    const [secondName, SetSecondName] = useState("");
    const [telNumber, SetTelNumber] = useState("");
    const [address, SetAddress] = useState("");
    let history = useHistory();

    const { doRequest, errors } = useRequest({
        url: `http://localhost:8080/users`,
        method: "put",
        body: {
            id,
            firstName,
            secondName,
            telNumber,
            address
        },
        onSuccess: () => {
            alert("Sikeres módosítás !");
            history.push("/")
        // window.location.reload()
        }
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

        !first ? SetFirstName("") : SetFirstName(first);
        !second ? SetSecondName("") : SetSecondName(second);
        !phoneNumber ? SetTelNumber("") : SetTelNumber(phoneNumber);
        !targetAddress ? SetAddress("") : SetAddress(targetAddress);
    }, [first, second, phoneNumber, targetAddress])


    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Vezetéknév</Form.Label>
                <Form.Control value={firstName} onChange={e => SetFirstName(e.target.value)} type="text" placeholder="Your First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Keresztnév</Form.Label>
                <Form.Control value={secondName} onChange={e => SetSecondName(e.target.value)} type="text" placeholder="Your Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Telefon</Form.Label>
                <Form.Control value={telNumber} onChange={e => SetTelNumber(e.target.value)} type="text" placeholder="Your phone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Cím</Form.Label>
                <Form.Control value={address} onChange={e => SetAddress(e.target.value)} type="text" placeholder="Your address" />
            </Form.Group>
            {errors}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default EditForm;