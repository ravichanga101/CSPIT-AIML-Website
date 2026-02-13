import { links } from '../../lib/config';

export default function SocialActivity() {
    const faculty = Object.values(links.fsocial);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        th {
            cursor: pointer;
            font-weight: bold;
            text-align: center;
        }
        /*.dataTables_length
          {
          margin-bottom:35px;
          }*/
        
        #example_length,
        #example_filter,
        #example_info,
        #example_paginate {
            display: none;
        }
    `}} />
            <section id="services" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2></h2><h2 style={{ paddingTop: '20px' }}>Depstar Social Activity Club</h2><br />
                        <p>Devang Patel Institute of Advance Technology and Research (DEPSTAR) always inspires
                            students for the overall development in academics and co-curricular activities. The institution
                            is devoted to intellectually vibrant atmosphere of research and imparts education in learning of
                            sciences but inculcates necessary soft skills in the students that help them nurture their future.
                            Keeping this in mind, an interactive session was organized by the students of DEPSTAR Social
                            club at “ANAND DHAM”, an old age home located at Lambhvel village, Anand.
                        </p>
                    </div>
                </div>
            </section>
            <section id="services" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2></h2><h2 style={{ paddingTop: '20px' }}>Events</h2>
                    </div>

                    <div className="row table-responsive fw-body wow fadeInLeft">
                        <div className="content">
                            <table id="example" className="table">
                                <thead>
                                    <tr>
                                        <th>Name of Event<img src="img/sort.png" style={{ float: 'right', width: '15px' }} /></th>
                                        <th>Date<img src="img/sort.png" style={{ float: 'right', width: '15px' }} /></th>
                                        <th>No. of Participants<img src="img/sort.png" style={{ float: 'right', width: '15px' }} /></th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Meet & Greet</td>
                                        <td>13/10/2018</td>
                                        <td>32</td>
                                    </tr>
                                    <tr>
                                        <td>Wall of Kindness</td>
                                        <td>30/03/2019</td>
                                        <td>20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


            {/* Faculty Coordinators */}
            <section id="services" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2></h2><h2 style={{ paddingTop: '20px' }}>Faculty Coordinators</h2>
                    </div>
                    <div className="row">
                        {faculty.map((member: any, index: number) => (
                            <div className="col-lg-3" key={index}>
                                <div className="bd-all">
                                    <div className="text-center pd-all">
                                        <img className="picf" src={member.photo} alt={member.name} />
                                        <h4 id="fac">
                                            {member.name}
                                        </h4>
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
