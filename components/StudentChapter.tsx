'use client';

const cells = [
    { title: 'Anti-Ragging Cell',                    img: '/img/cell/ARC.png',  faculty: 'Prof. Niyati V Patel',       email: 'niyatipatel.aiml@charusat.ac.in',    color: '#e11d48' },
    { title: 'Career Development & Placement Cell',  img: '/img/cell/CDPC.jpg', faculty: 'Prof. Dheeraj K. Shringi',   email: 'dheerajshringi.aiml@charusat.ac.in', color: '#0c2e8a' },
    { title: 'Charusat Startup & Innovation Center', img: '/img/cell/CSIC.png', faculty: 'Prof. Gaurang Patel',        email: 'gaurangpatel.me@charusat.ac.in',     color: '#d97706' },
    { title: 'Equal Opportunity Cell',               img: '/img/cell/EOC.png',  faculty: 'Prof. Gaurav Gautham Kumar', email: 'gauravkumar.aiml@charusat.ac.in',    color: '#059669' },
    { title: 'National Service Scheme',              img: '/img/cell/NSS.png',  faculty: 'Prof. Gaurav Gautham Kumar', email: 'gauravkumar.aiml@charusat.ac.in',    color: '#2563eb' },
    { title: 'Women Development Cell',               img: '/img/cell/WDC.jpg',  faculty: 'Prof. Niyati V Patel',       email: 'niyatipatel.aiml@charusat.ac.in',    color: '#db2777' },
];

export default function StudentChapter() {
    return (
        <>
            {/* NPTEL Chapter */}
            <section id="services" className="wow fadeInUp" style={{ background: '#ffffff', padding: '90px 0 60px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <span className="ref-badge"><i className="fa fa-graduation-cap" />Student Chapters</span>
                    </div>
                    <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '52px' }}>
                        Student&apos;s <span className="grad-cyan">Chapters</span>
                    </h2>
                    <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="col-lg-4 col-md-6">
                            <div className="ref-card cell-card" style={{ padding: '30px 24px', textAlign: 'center' }}>
                                <h4 className="cell-card-title">SWAYAM-NPTEL</h4>
                                <div className="cell-logo-wrapper">
                                    <img src="/img/logo/nptel.png" alt="NPTEL" className="cell-logo-img" />
                                </div>
                                <div className="cell-faculty-info">
                                    <span className="cell-faculty-name">Local Chapter</span>
                                    <span className="cell-badge-sub">CSPIT AI-ML Active Chapter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cell Information */}
            <section id="services" className="wow fadeInUp" style={{ background: '#f5f7fa', padding: '60px 0 90px' }}>
                <div className="container">
                    <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '52px' }}>
                        Cell <span className="grad-amber">Information</span>
                    </h2>
                    <div className="row">
                        {cells.map((cell, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                                <div className="ref-card cell-card" style={{ padding: '30px 24px', textAlign: 'center', height: '100%' }}>
                                    <h4 className="cell-card-title">{cell.title}</h4>
                                    <div className="cell-logo-wrapper">
                                        <img src={cell.img} alt={cell.title} className="cell-logo-img" />
                                    </div>
                                    <div className="cell-faculty-info">
                                        <span className="cell-faculty-name">{cell.faculty}</span>
                                        <a href={`mailto:${cell.email}`} className="cell-email-link">
                                            <i className="fa fa-envelope" style={{ fontSize: '11px' }} />
                                            <span>{cell.email}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
