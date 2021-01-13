import react, { useState } from "react"
import Welcome from "./Welcome";
import Name from "./Name";
import { Route } from "react-router-dom";

const Home = () => {
    const [message, setMessage] = useState("World");
    const welcomeMessage = () => (
        <Welcome message={message} />
    );
    const nameComponent = () => (
        <Name setMessage={setMessage} message={message} />
    );

    return (
        <div className="container">
            <Route path="/" exact component={welcomeMessage} />
            <Route path="/name" component={nameComponent} />
        </div>
    );
}

export default Home;