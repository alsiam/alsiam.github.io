import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "al Siam",
            title: "social Media app",
            img: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg",
            icon: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            desc: "lore ipsum is popular text used by every developer for demo purpose"
        },
        {
            id: 2,
            name: "al Siam world",
            title: "social Media app",
            img: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            icon: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            desc: "lore ipsum is popular text used by every developer for demo purpose",
            featured:true,
        },
        {
            id: 3,
            name: "al Siam here i am",
            title: "social Media app",
            img: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            icon: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
                            <img src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="left" alt="" />
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
