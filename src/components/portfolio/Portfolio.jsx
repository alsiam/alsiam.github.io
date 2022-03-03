import { useEffect, useState } from "react";
import {
    featuredport,
    frontendport,
    fullstackport,
    wordpressport
} from "../../data";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "frontend",
            title: "Front-end",
        }, {
            id: "fullstack",
            title: "Full Stack",
        }, {
            id: "wordpress",
            title: "WordPress",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredport);
                break;
            case "frontend":
                setData(frontendport);
                break;
            case "fullstack":
                setData(fullstackport);
                break;
            case "wordpress":
                setData(wordpressport);
                break;
            default:
                setData(featuredport);

        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <a href={d.link} target="_blank" rel="noreferrer">
                        <img src={d.img} alt="" />
                        </a>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
