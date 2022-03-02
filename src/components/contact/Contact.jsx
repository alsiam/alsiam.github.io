import { useState } from "react";
import "./contact.scss";

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <h1>Let's discuss about the project</h1>
                <div className="contact-info">
                    <span>Phone: 01611210222</span>
                    <span>Phone: 01611210222</span>
                    <span>Phone: 01611210222</span>
                    <span>Phone: 01611210222</span>
                </div>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" >Send</button>
                    {message && <span>We will Contact you soon..!</span>}
                </form>
            </div>
        </div>
    )
}
