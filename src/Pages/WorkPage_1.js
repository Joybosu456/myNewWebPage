import "../assets/css/workpage.css"
import ekycprojecthome from "../assets/img/ekychomepage.PNG"
import ekycimg2 from "../assets/img/ekycimg2.png"
import ekycimg3 from "../assets/img/ekycimg3.png"
import ekycimg4 from "../assets/img/ekycimg4.png"
import cosmosprojecthome from "../assets/img/cosmoshomepage.png"
import cosmosimg2 from "../assets/img/cosmosimg2.PNG"
import cosmosimg3 from "../assets/img/cosmosimg3.png"
import cosmosimg4 from "../assets/img/cosmosimg4.png"
import telecallerhomepage from "../assets/img/telecallerhomepage.png"
import telecallerimg2 from "../assets/img/telecallerimg2.png"
import telecallerimg3 from "../assets/img/telecallerimg3.png"
import telecallerimg4 from "../assets/img/telecallerimg4.png"
import bajajbrokinghomepage from "../assets/img/bajajbrokinghomepage.png"
import bajajbrokingimg2 from "../assets/img/bajajbrokingimg2.png"
import bajajbrokingimg3 from "../assets/img/bajajbrokingimg3.png"
import bajajbrokingimg4 from "../assets/img/bajajbrokingimg4.png"
import ekyclink from "../assets/img/external-link.png"
// import ProjectDetails from "../Components/ProjectDetails"
import { sliderImages } from "../Common/Constants"
import React, { useState, useEffect } from "react";

function WorkPage() {

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % sliderImages.project1.length);
        }, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="projects">
                <div className="container">
                    <h1 className="projectHeading">FEATURED PROJECTS</h1>
                    <div className="ekycproject">
                        <div className="ekyc1">
                            <div className="ekycsqaure">
                                <a href="https://ekyc.bajajfinservsecurities.in/" target="_blank">
                                    <img src={sliderImages.project1[index]}
                                        alt='Slider' height={"350px"} width={"440px"}
                                        style={{ borderRadius: "10px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="ekydesc">
                            <p className="projectName">EKYC - Open Free Demat Account</p>
                            <p className="desc">Bajaj Broking's efficient Demat Account opening process
                                ensures a smooth, convenient experience,
                                offering access to diverse investment opportunities across
                                various asset classes.
                                <ul className="DescPoints">
                                    <li>Simplified Trading</li>
                                    <li>Expert Guidance</li>
                                    <li>Low Brokerage Charges</li>
                                    <li>Diverse Investment Options</li>
                                </ul>
                            </p>
                            <p className="projectInfodata">PROJECT INFO</p>
                            <hr />
                            <div className="yearekyc">
                                <p>Year</p>
                                <p>2022-2023</p>
                            </div>
                            <hr />
                            <div className="yearekyc">
                                <p>Role</p>
                                <p>Backend Developer</p>
                            </div>
                            <hr />
                            <a className="ekycprojlink" href="https://ekyc.bajajfinservsecurities.in/"  target="_blank">LIVE DEMO
                                <img className="projectlinkimg" src={ekyclink} alt="EKYC LINK" />
                            </a>
                        </div>
                    </div>
                    <div className="ekycproject">
                        <div className="ekyc">
                            <div className="ekycsqaure">
                                <a href="https://cosmos.bajajfinservsecurities.in/"   target="_blank">
                                    <img src={sliderImages.project2[index]}
                                        alt='Slider' height={"350px"} width={"450px"}
                                        style={{ borderRadius: "10px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="ekydesc">
                            <p className="projectName">COSMOS - RM Portal</p>
                            <p className="desc">A valuable tool for RMs to better serve clients
                                through data-driven insights, designed to empower
                                Relationship Managers (RMs) with crucial company-related information.
                                Provided RMs with insights including:-
                                <ul className="DescPoints">
                                    <li>Holding information</li>
                                    <li>Onboarded client counts</li>
                                    <li>Engagement metrics</li>
                                    <li>Reports</li>
                                </ul>
                            </p>
                            <p className="projectInfodata">PROJECT INFO</p>
                            <hr />
                            <div className="yearekyc">
                                <p>Year</p>
                                <p>2022-2023</p>
                            </div>
                            <hr />
                            <div className="yearekyc">
                                <p>Role</p>
                                <p>Backend Developer</p>
                            </div>
                            <hr />
                            <a className="ekycprojlink" href="https://cosmos.bajajfinservsecurities.in/" target="_blank">LIVE DEMO
                                <img className="projectlinkimg" src={ekyclink} alt="EKYC LINK" />
                            </a>
                        </div>
                    </div>
                    <div className="ekycproject">
                        <div className="ekyc">
                            <div className="ekycsqaure">
                                <a href="https://cosmos.bajajfinservsecurities.in/login" target="_blank">
                                    <img src={sliderImages.project3[index]}
                                        alt='Slider' height={"350px"} width={"450px"}
                                        style={{ borderRadius: "10px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="ekydesc">
                            <p className="projectName">TELECALLER - Ekycadmin</p>
                            <p className="desc">Implemented a system where Telecallers assisted individuals in
                                completing their EKYC process efficiently. This innovation saved
                                time for users and significantly improved their overall experience with EKYC2.0.
                                <ul className="DescPoints">
                                    <li>User-friendly</li>
                                    <li>Onboarded client counts</li>
                                    <li>Time-efficient</li>
                                    <li>Seamless experience in account opening and updates</li>
                                </ul>
                            </p>
                            <p className="projectInfodata">PROJECT INFO</p>
                            <hr />
                            <div className="yearekyc">
                                <p>Year</p>
                                <p>2023</p>
                            </div>
                            <hr />
                            <div className="yearekyc">
                                <p>Role</p>
                                <p>Lead Backend Developer</p>
                            </div>
                            <hr />
                            <a className="ekycprojlink" href="https://cosmos.bajajfinservsecurities.in/login" target="_blank">LIVE DEMO
                                <img className="projectlinkimg" src={ekyclink} alt="EKYC LINK" />
                            </a>
                        </div>
                    </div>
                    <div className="ekycproject">
                        <div className="ekyc2">
                            <div className="ekycsqaure">
                                <a href="https://www.bajajbroking.in/"  target="_blank">
                                    <img src={sliderImages.project4[index]}
                                        alt='Slider' height={"350px"} width={"460px"}
                                        style={{ borderRadius: "10px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="ekydesc">
                            <p className="projectName">BAJAJ BROKING - CORPORATE WEBSITE</p>
                            <p className="desc">Bajaj Broking offers a simplified, smart & secure investment
                                experience meant for everyone, whether you're an experienced trader,
                                seasoned investor, or just stepping into the world of markets.
                                <ul className="DescPoints">
                                    <li>30+ years of Trust</li>
                                    <li>Transparent Pricing</li>
                                    <li>Subsidiary of Bajaj Finance</li>
                                    <li>Driven by Innovation & Empathy</li>
                                </ul>
                            </p>
                            <p className="projectInfodata">PROJECT INFO</p>
                            <hr />
                            <div className="yearekyc">
                                <p>Year</p>
                                <p>2023</p>
                            </div>
                            <hr />
                            <div className="yearekyc">
                                <p>Role</p>
                                <p>Lead Backend Developer</p>
                            </div>
                            <hr />
                            <a className="ekycprojlink" href="https://www.bajajbroking.in/"  target="_blank">LIVE DEMO
                                <img className="projectlinkimg" src={ekyclink} alt="EKYC LINK" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WorkPage