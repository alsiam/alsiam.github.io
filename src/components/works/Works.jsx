import { useState } from "react"
import "./works.scss"
import arrow from "../../assets/images/arrow.png"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [

        {
            id: 1,
            title: "social Media app",
            img: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 2,
            title: "Web",
            img: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 3,
            title: "Logo",
            img: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 4,
            title: "function",
            img: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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

            <img src={arrow} className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src={arrow} className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    )
}
