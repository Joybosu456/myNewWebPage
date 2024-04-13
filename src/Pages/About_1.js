import "../assets/css/aboutpage.css"
import profile from "../assets/img/mypic.png"
import csharp from "../assets/img/c-sharp.png"
import mssql from "../assets/img/mysql.png"
import linux from "../assets/img/linux.png"
import html from "../assets/img/html-5.png"
import css from "../assets/img/css-3.png"
import javascript from "../assets/img/js.png"
import reactlogo from "../assets/img/react.png"
import postman from "../assets/img/postman-icon.png"
import vs from "../assets/img/icons8-visual-studio-48.png"
import vscode from "../assets/img/visual-studio-code-icon.png"

function About() {
    return (
        <>
            <div className="aboutme">
                <h1 className="aboutsection">ABOUT ME</h1>
                <div className="aboutdetials">
                    <p className="aboutinfo">Hello, I'm Anant Vikram Singh, a passionate software developer
                        with expertise in Dot Net Core, MSSql, Linux, Git, HTML, and CSS.
                        Currently, I'm expanding my skills to include JavaScript and React,
                        with the goal of enhancing contributions to the development of
                        accessible and user-friendly websites. With a keen eye for clean and
                        efficient code, I prioritize staying updated with industry trends and
                        best practices. Proficient in translating business requirements into
                        scalable backend systems, I've collaborated with cross-functional teams
                        to deliver successful projects. Outside of work, I enjoy reading suspense
                        thriller books and playing football and cricket.</p>
                    <img className="aboutprofilepic" src={profile} arc="Profile pic" />
                </div>
                <p className="aboutsection">Skills(Technologies and Tools)</p>
                <p className="technologydata">Using a combination of cutting-edge technologies and reliable open-source
                    software I build user-focused, performant apps and websites for desktops and smartphones.</p>
                <div className="techskills">
                    <div className="skillsection">
                        <div>
                            <img className="skillsicons" src={csharp} arc="C-sharp" />
                            <div className="skilltiptext">C-SHARP</div>
                        </div>
                        <div>
                            <img className="skillsicons" src={mssql} arc="MSSql" />
                            <div className="skilltiptext">MSSQL</div>
                        </div>
                        <div>
                            <img className="skillsicons" src={linux} arc="Linux" />
                            <div className="skilltiptext">LINUX</div>
                        </div>
                        <div>
                            <img className="skillsicons" src={html} arc="HTML" />
                            <div className="skilltiptext">HTML5</div>
                        </div>
                        <div>
                            <img className="skillsicons" src={css} arc="CSS" />
                            <div className="skilltiptext">CSS3</div>
                        </div>
                    </div>
                    <div className="skillsection">
                        <div>
                            <img className="skillsicons" src={javascript} arc="Javascript" />
                            <div className="skilltiptext">JAVASCRIPT</div>
                        </div>
                        <div>
                            <img className="skillsicons" src={reactlogo} arc="Reactlogo" />
                            <div className="skilltiptext">REACT</div>
                        </div>
                        <div>
                            <img className="skillsicons" src={postman} arc="Postman" />
                            <div className="skilltiptext">POSTMAN</div>
                        </div>
                        <div>
                            <img className="skillsicons" src={vs} arc="VisualStudio" />
                            <div className="skilltiptext">VISUAL STUDIO</div>
                        </div>
                        <div>
                            <img className="skillsicons" src={vscode} arc="VisualStudioCode" />
                            <div className="skilltiptext">VISUAL STUDIO CODE</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About