import { useState } from "react";

function inputForm({type, name}) {
const [val, setVal] = useState('');

  return (
    <input type={type} name={name} onChange={ev => setVal(ev.target.value)}/>
  )
}

export default inputForm;