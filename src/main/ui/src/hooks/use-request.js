import axios from 'axios';
import { useState } from 'react';
import ErrorMessage from '../components/errorTemplate/template';
export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      if (onSuccess) {
        if(response.data){
          onSuccess(response.data);
        }
        else{
          onSuccess(response);
        }
      }

      return response.data;
    } catch (err) {

      setErrors(
        <ErrorMessage message={err}></ErrorMessage>
      );
    }
  };

  return { doRequest, errors };
};