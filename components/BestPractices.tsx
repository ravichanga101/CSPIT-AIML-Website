export default function BestPractices() {
    return (
        <section id="services" className="wow fadeInUp" style={{ textAlign: 'left' }} >
            <div className="container"  >
                <div className="section-header">
                    <h2></h2><h2 style={{ textAlign: 'left', paddingTop: '20px' }}>Best Practices</h2>
                </div>
                <div className="row">
                    {[
                        { icon: 'fa-universal-access', title: 'One-to-One Student Counseling' },
                        { icon: 'fa-comments-o', title: 'Guided Project Work every semester' },
                        { icon: 'fa-comments-o', title: 'Game Based Learnings' },
                        { icon: 'fa-certificate', title: 'Research and Project Based Learning ' },
                        { icon: 'fa-certificate', title: 'AI Drops- AI Awareness by Reels ' },
                        { icon: 'fa-certificate', title: 'AI Meetup - A common platform for student and Industry to share their ideas' },
                        { icon: 'fa-certificate', title: 'AI Camp - Social inclusivity and awareness by organizing camps in rural area ' },
                        { icon: 'fa-certificate', title: 'English Improvement Classes' },
                        { icon: 'fa-certificate', title: 'Supplementary Education through MOOC Courses' },
                        { icon: 'fa-desktop', title: 'Appropriate use of software for learning and tracking Education', iconMr: '10px' },
                        { icon: 'fa-handshake-o', title: 'Continuous Evaluation and Collaborative Learning Environment', iconMr: '0' },
                        { icon: 'fa-file-video-o', title: 'Learning through Workshops and Expert sessions' },
                        { icon: 'fa-globe', title: 'Provision for separate remedial classes for slow learners ', iconMr: '10px' },
                        { icon: 'fa-universal-access', title: 'Group / Team and Peer to Peer Learning', iconMr: '10px' },
                        { icon: 'fa-industry', title: 'Mechanism of collecting the feedbacks from Students', iconMr: '10px' }
                    ].map((item, index) => (
                        <div key={index} className="col-lg-06 col-md-6 col-sm-12">
                            <div className="box wow fadeInLeft" style={{ padding: '10px', marginBottom: '10px' }}>
                                <div className="icon" style={{ marginRight: item.iconMr || '15px' }}>
                                    <i className={`fa ${item.icon}`} style={{ margin: '10px 30px', color: '#50d8af', fontSize: '32px' }}></i>
                                </div>
                                <h4 className="title" style={{ marginBottom: '10px' }}>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
