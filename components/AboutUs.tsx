import { config } from '@/lib/config';

export default function AboutUs() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
      .about_us_txt{
          display:inline-block;
          font-size: 36px;
          color: #29cca3;
          text-transform: uppercase;
          font-weight: 900 !important;
          position: relative;
          padding-bottom: 20px;
          font-family: "Montserrat", sans-serif;
          font-weight: 400;
          margin: 0 0 0 0;
          padding: 0;
      }
    `}} />
            <main id="main">
                <section id="about_us" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            {/* dispaly typo preserved from original */}
                            <div className="about_us_txt" style={{ paddingTop: '20px', display: 'inline-block' }}>About Us</div>
                        </div>
                        <h5>{config.name_of_dept} (Estd. {config.dept_esta}) offers {config.dept_b_tech_seats} seats.</h5>

                        <div className="row">
                            <div className="col-sm text-center">
                                <section id="services" className="wow fadeInUp">
                                    <div className="container">
                                        <div className="services-content container">
                                            <div className="row">
                                                <div className="col-lg-4 content text-center">
                                                    <h2><b>{config.total_publications}</b></h2>
                                                    <h3>Publications</h3>
                                                </div>

                                                <div className="col-lg-4 content text-center">
                                                    <h2><b>{config.student_teacher_ratio}</b></h2>
                                                    <h3>Student Teacher Ratio</h3>
                                                </div>

                                                <div className="col-lg-4 content text-center">
                                                    <h2><b>{config.Intake}</b></h2>
                                                    <h3>No. of Seats</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section id="services">
                <div className="services-content container">
                    <div className="row">
                        <div className="col-lg-4 content text-center">
                            <h2><b>{config.total_workshops_org}</b></h2>
                            <h3>Event Organized</h3>
                        </div>

                        <div className="col-lg-4 content text-center">
                            <h2><b>{config.total_projects_and_grants}</b></h2>
                            <h3>Projects & Grant Received</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
