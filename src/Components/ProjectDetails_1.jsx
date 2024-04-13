import React, { useEffect } from 'react'
import ekyclink from "../assets/img/external-link.png"
import { sliderImages } from '../Common/Constants'

function ProjectDetails(props) {
    console.log(props, "props")
    let a = sliderImages['project1']
    let myIndex = 0;

    const imgSlied = (className) => {
        let i;
        let x = document.getElementsByClassName(className);
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
    }

    useEffect(() => {
        imgSlied("mySlides1")
        const intervalId = setInterval(() => {
            imgSlied("mySlides1")
        }, 2000)
        return () => clearInterval(intervalId)
    }, [])
    return (
        <div className="ekycproject">
            <div className="ekyc">
                <div className="ekycsqaure">
                    <a href="https://ekyc.bajajfinservsecurities.in/">
                        {props.imgArr.map((item, index) => {
                            return (
                                <img key={index}
                                    className="mySlides1" src={item}
                                    alt="EKYC Project" height={"250px"}
                                    width={"350px"}
                                    style={{ borderRadius: "10px" }} />
                            )
                        })}
                    </a>
                </div>
            </div>
            <div className="ekydesc">
                <p>EKYC</p>
                <p>There are a number of reasons you may need a block of text and when you do,
                    a random paragraph can be the perfect solution. If you happen to be a web
                    designer and you need some random text to show in your layout, a random
                    paragraph can be an excellent way to do this. If you're a programmer and
                </p>
                <p>PROJECT INFO</p>
                <hr />
                <div className="yearekyc">
                    <p>Year</p>
                    <p>2023</p>
                </div>
                <hr />
                <div className="yearekyc">
                    <p>Role</p>
                    <p>Frontend Developer</p>
                </div>
                <hr />
                <a className="ekycprojlink" href="https://ekyc.bajajfinservsecurities.in/">LIVE DEMO
                    <img className="projectlinkimg" src={ekyclink} />
                </a>
            </div>
        </div>
    )
}

export default ProjectDetails