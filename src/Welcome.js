import react from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => (
    <h1>
        <span>Hello, </span>
        <Link to="/name">
            <span>{props.message || "World"}</span>
        </Link>
    </h1 >
);

export default Welcome;