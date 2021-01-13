import react, { useCallback, useState } from "react";
import { Link } from 'react-router-dom';
import Nameplate from "./Nameplate";

const Name = props => {
    const [name, setName] = useState("");
    const handleChange = e => {
        setName(e.target.value)
    }
    const handleSetMessage = () => {
        props.setMessage(name)
    }
    return (
        <div style={{ margin: "20px auto" }} >
            <div style={{ "marginRight": "20px", display: "inline-block" }}>
                <label htmlFor="name">Name: </label>
                <input type="text" onChange={handleChange} id="name" value={name} />
                <button onClick={handleSetMessage}>Change Name</button>
            </div>
            <Link to="/"><span>Home</span></Link>
            <Nameplate name={props.message} />
        </div>
    )
}

export default Name;