import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "al Siam",
            title: "social Media app",
            img: "assets/mark.jpg",
            icon: "assets/mark.jpg",
            desc: "lore ipsum is popular text used by every developer for demo purpose"
        },
        {
            id: 2,
            name: "al Siam world",
            title: "social Media app",
            img: "assets/mark.jpg",
            icon: "assets/mark.jpg",
            desc: "lore ipsum is popular text used by every developer for demo purpose",
            featured:true,
        },
        {
            id: 3,
            name: "al Siam here i am",
            title: "social Media app",
            img: "assets/mark.jpg",
            icon: "assets/mark.jpg",
            desc: "lore ipsum is popular text used by every developer for demo purpose"
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d => (

                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/mark.jpg" className="left" alt="" />
                            <img src={d.img} className="user" alt="" />
                            <img src={d.icon} className="right" alt="" />

                        </div>
                        <div className="center">
                        {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
