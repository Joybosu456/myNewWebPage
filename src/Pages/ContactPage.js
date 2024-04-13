import "../assets/css/contactpage.css"
import linkedIn from "../assets/img/linkedin.png"
import git from "../assets/img/github-logo.png"
import gmail from "../assets/img/gmail.png"
import whatsapp from "../assets/img/whatsapp.png"
import phone from "../assets/img/phone.png"
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactPage() {
    const [result, setResult] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        msg: "",
        access_key: "1c0a3b7f-b86f-464e-8d09-e7caa1a569e1"
    })

    useEffect(() => {
        console.log("formData : " + JSON.stringify(formData));
    }, [formData])

    const handleOnChange = (e) => {
        console.log("event", e.target.name, formData)
        if (e.target.name == "name") {
            setFormData({
                ...formData,
                name: e.target.value
            })

        } else if (e.target.name == "email") {
            setFormData({
                ...formData,
                email: e.target.value
            })
        } else if (e.target.name == "subject") {
            setFormData({
                ...formData,
                subject: e.target.value
            })

        } else if (e.target.name == "message") {
            setFormData({
                ...formData,
                msg: e.target.value
            })
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        console.log(formData, "from data")

        const response = await fetch("https://api.web3forms.com/submit", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formData)
        });
        console.log("response " + JSON.stringify(response.body));
        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            toast.success('Form Submitted Successfully');
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
            toast.error(data.message);
        }
    };
    return (
        <>
            <div className="contactpage">
                <div>
                    <p className="contactName">LET'S CONNECT</p>
                    <p className="contactDesc">If you have any suggestion, feedback, opportunity,
                        <br /> or are interested in collaborating on a project, I would
                        <br /> love to hear from you! Please feel free to reach out to
                        <br /> me using the contact details provided below.
                    </p>
                    <ul className="socialIcon">
                        <li className="socialmedia">
                            <a className='socialmediaIcon' href="https://www.linkedin.com/in/joy-bosu-59a7b2183/" target="_blank">
                                <i class="fa-brands fa-linkedin-in icon"></i>
                            </a>
                        </li>
                        <li className="socialmedia">
                            <a className='socialmediaIcon' href="https://github.com/Joybosu456" target="_blank">
                                <i class="fa-brands fa-github-alt icon"></i>
                            </a>
                        </li>
                        <li className="socialmedia">
                            <div className="gmail">
                                <a className='socialmediaIcon' href="#">
                                    <i class="fa-solid fa-envelope-open-text icon"></i>
                                </a>
                                <div className="tooltiptext">joybosu456@gmail.com</div>
                            </div>
                        </li>
                        <li className="socialmedia">
                            <a className='socialmediaIcon' href="https://web.whatsapp.com/" target="_blank">
                                <i class="fa-brands fa-whatsapp icon"></i>
                            </a>
                        </li>
                        <li className="socialmedia">
                            <div className="gmail">
                                <a className='socialmediaIcon' href="#">
                                    <i class="fa-solid fa-mobile icon"></i>
                                </a>
                                <div className="tooltiptext">6296582055</div>
                            </div>
                        </li>
                    </ul>


                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <div className="formbox">
                            <label className="inputlabel">Name</label>
                            <input className="nametext" name="name" type="text"
                                placeholder="Enter your FullName" required
                                onChange={handleOnChange} />
                            <label className="inputlabel">Email</label>
                            <input className="nametext" name="email" type="email"
                                placeholder="someone@example.com" required
                                onChange={handleOnChange} />
                            <label className="inputlabel">Subject</label>
                            <input className="nametext" name="subject" type="text"
                                placeholder="Enter the Subject"
                                onChange={handleOnChange} />
                            <label className="inputlabel">Message</label>
                            <textarea type="message" name="message" rows="7"
                                placeholder="Enter the Message" required
                                onChange={handleOnChange} />
                            <div className="submittab">
                                <button type="submit" className="submitButton">Submit</button>
                            </div>
                        </div>
                    </form>
                    <span>{result}</span>
                </div>

            </div>
        </>
    )
}
export default ContactPage