import { config } from '@/lib/config';

export default function VisionMission() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
       #services.v_m  .title {
       margin-left: 100px;
       font-weight: 700;
       margin-bottom: 15px;
       font-size: 22px;
       }
       #services.v_m  .mission_class {
       font-size: 16px;
       line-height: 1.5;
       }
       .blink-hard {
       animation: blinker 1s linear infinite;
       }
       @keyframes blinker {
       50% {
       opacity: 0;
       }
       }
    `}} />
            <section id="services" className="v_m">
                <div className="services-content container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="vision">
                            <div className="box wow fadeInLeft">
                                <div className="icon"><i className="fa fa-eye"></i></div>
                                <div style={{ fontSize: '1.2em' }}>
                                    <h4 className="title"><a href="">Vision</a></h4>
                                    <p className="description mission_class">
                                        <i> “{config.vision}”</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12" id="mission">
                            <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                <div className="icon"><i className="fa fa-line-chart"></i></div>
                                <h4 className="title"><a href="">Mission</a></h4>
                                <div className="description ">
                                    <div style={{ fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: config.mission }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
