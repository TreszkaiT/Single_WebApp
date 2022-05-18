import { useState} from 'react';
import useRequest from '../hooks/use-request';
import InputField from '../components/inputField';
import Button from '../components/button';

export default () => {
  const [firstName, seFirsttName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');


  const { doRequest, errors } = useRequest({
    url: 'http://localhost:8080/users',
    method: 'post',
    body: {
      firstName,
      lastName,
      phone,
      address,
    },
    // onSuccess: () => Router.push('/')
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
          <InputField label="Vezeték név: " value={lastName} onChange={e => setLastName(e.target.value)} classes="form-control" />
        </div>
        <div className="form-group">
          <InputField label="Kereszt név: " value={firstName} onChange={e => seFirsttName(e.target.value)} classes="form-control" />
        </div>
        <div className="form-group">
          <InputField label="Cím" value={address} onChange={e => setAddress(e.target.value)} classes="form-control" />
        </div>
        <div className="form-group">
          <InputField label="Telefon" value={phone} onChange={e => setPhone(e.target.value)} classes="form-control teszt" />
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
