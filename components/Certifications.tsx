export default function Certifications() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        #services .box .c_p {
            display: inline-block;
            font-size: 18px;
            font-weight: 600;
            word-wrap: break-word;    
            margin-left: 20px;  
        }
      `}} />
            <section id="services" className="wow fadeInUp" style={{ textAlign: 'left' }} >
                <div className="container"  >
                    <div className="section-header">
                        <h2></h2><h2 style={{ textAlign: 'left', paddingTop: '20px' }}>Industry Recognized Certification Courses</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="box wow fadeInLeft" style={{ padding: '10px', marginBottom: '10px' }}>
                                <img src="/img/certifications/redhat.png" style={{ width: '180px' }} />
                                <p className="c_p"> Contact: Prof. Sarita Thummar (saritathummar.ce@charusat.ac.in)</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="box wow fadeInLeft" style={{ padding: '10px', marginBottom: '10px' }}>
                                <img src="/img/certifications/aws.png" style={{ width: '180px' }} />
                                <p className="c_p">Contact:  Prof. Sanket Suthar (sanketsuthar.it@charusat.ac.in)</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="box wow fadeInLeft" style={{ padding: '10px', marginBottom: '10px' }}>
                                <img src="/img/certifications/cisco.png" style={{ width: '180px' }} />
                                <p className="c_p"> Contact:  Prof. Abhishek Patel (abhishekpatel.cse@charusat.ac.in)</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="box wow fadeInLeft" style={{ padding: '10px', marginBottom: '10px' }}>
                                <img src="/img/certifications/oracle.png" style={{ width: '180px' }} />
                                <p className="c_p"> Contact: Prof. Vidisha Pradhan (vidishapradhan.cse@charusat.ac.in)</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
