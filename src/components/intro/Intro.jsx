import "./intro.scss"
import { ExpandMoreSharp } from "@material-ui/icons"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import profile from "../../assets/images/saifalsiam.png"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: true,backDelay:1500,backSpeed:60, strings: ['Developer!', 'Designer!', 'Conent Creator!'], })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={profile} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Saif Al Siam</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <div className="iconContainer">
                        <ExpandMoreSharp className="icon" />
                    </div>
                </a>
            </div>
        </div>
    )
}
