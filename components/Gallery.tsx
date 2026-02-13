import { links } from '@/lib/config';

export default function Gallery() {
    return (
        <section id="portfolio" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2></h2>
                    <h2 style={{ paddingTop: '20px' }}>Gallery</h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row no-gutters">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="col-lg-3 col-md-3">
                            <div className="portfolio-item wow fadeInUp">
                                <a href={links.gallery[i]} className="portfolio-popup">
                                    <img src={links.gallery[i]} alt="" className="img-responsive" />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-info">
                                            <h2 className="wow fadeInUp"></h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row no-gutters">
                    {[5, 6, 7, 8].map(i => (
                        <div key={i} className="col-lg-3 col-md-3">
                            <div className="portfolio-item wow fadeInUp">
                                <a href={links.gallery[i]} className="portfolio-popup">
                                    <img src={links.gallery[i]} alt="" className="img-responsive" />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-info">
                                            <h2 className="wow fadeInUp"></h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row no-gutters">
                    {[9, 10].map(i => (
                        <div key={i} className="col-lg-3 col-md-3">
                            <div className="portfolio-item wow fadeInUp">
                                <a href={links.gallery[i]} className="portfolio-popup">
                                    <img src={links.gallery[i]} alt="" className="img-responsive" />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-info">
                                            <h2 className="wow fadeInUp"></h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
