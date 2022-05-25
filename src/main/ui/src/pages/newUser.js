import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useRequest from '../hooks/use-request';
import InputField from '../components/inputField';
import Button from '../components/button';

export default () => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setLastName] = useState('');
    const [telNumber, setPhone] = useState('');
    const [address, setAddress] = useState('');

    let history = useHistory();
    const { doRequest, errors } = useRequest({
        url: 'http://localhost:8080/users',
        method: 'post',
        body: {
            firstName,
            secondName,
            telNumber,
            address
        },
     onSuccess: () => {
         //window.location.reload();
         alert("Sikeres rögzítés !");
         history.push("/");
        }
    });

    const onSubmit = async event => {
        event.preventDefault();

        await doRequest();
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-wrapper col'>
                    <div className='authWrapper'>
                        <form onSubmit={onSubmit}>
                            <h3 className='form-title'>Új vizsgázó</h3>
                            <div className="form-group">
                                <InputField label="Vezeték név: " value={firstName} onChange={e => setFirstName(e.target.value)} classes="form-control" />
                            </div>
                            <div className="form-group">
                                <InputField label="Kereszt név: " value={secondName} onChange={e => setLastName(e.target.value)} classes="form-control" />
                            </div>
                            <div className="form-group">
                                <InputField label="Cím" value={address} onChange={e => setAddress(e.target.value)} classes="form-control" />
                            </div>
                            <div className="form-group">
                                <InputField label="Telefon" value={telNumber} onChange={e => setPhone(e.target.value)} classes="form-control teszt" />
                            </div>
                            {errors}
                            <div className='button-wrapper'>
                                <Button classes="noselect" text={"ELKÜLD"}></Button>
                            </div>

                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};
