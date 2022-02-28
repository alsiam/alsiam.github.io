import { useState } from "react"
import "./works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [

        {
            id: 1,
            title: "social Media app",
            img: "assets/mark.jpg",
        },
        {
            id: 2,
            title: "Web",
            img: "assets/mark.jpg",
        },
        {
            id: 3,
            title: "Logo",
            img: "assets/mark.jpg",
        },
        {
            id: 4,
            title: "function",
            img: "assets/mark.jpg",
        },
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (


                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Project</span>

                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>

                        </div>

                    </div>))}
            </div>

            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    )
}
