export default function ErrorMessage({message}){

  console.log("message: ",message)
    return(<div className="alert alert-danger">
    <h4>A manóba....</h4>
    <ul className="my-0">
        <li key={message}>{message.message}</li>
    </ul>
    </div>)
    }