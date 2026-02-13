export default function HomeSlider() {
    return (
        <section id="intro">
            <div id="intro-carousel" className="owl-carousel" suppressHydrationWarning>
                <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/1.jpg')" }}></div>
                <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/2.jpeg')" }}></div>
                <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/3.jpg')" }}></div>
                <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/4.jpg')" }}></div>
                <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/5.JPG')" }}></div>
                <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/6.JPG')" }}></div>
                <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/7.jpg')" }}></div>
                <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/8.jpg')" }}></div>
                <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/9.jpg')" }}></div>
            </div>
        </section>
    );
}
