import { links } from '@/lib/config';

export default function CAIC() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        th {
            cursor: pointer;
            font-weight: bold;
            text-align: center;
        }
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
                        <h2></h2><h2 style={{ paddingTop: '20px' }}>Depstar Creativity and Innovation Club</h2><br />
                        <p>Devang Patel Institute of Advance Technology and Research (DEPSTAR) always inspires
                            students for the overall development in academics and co-curricular activities. The institution
                            is devoted to intellectually vibrant atmosphere of research and imparts education in learning of
                            sciences. CAIC is the initiative of Depstar Institute, Charusat University.CAIC stands for creativity and innovation club.
                            This club aims at providing platform for all the creative and innovative notions prevailing among the students.
                            CAIC takes the responsibility to inculcate creative and innovative spirit among the students by organizing events and competitions that allow students to
                            express themselves and creates awareness among the students regarding recent innovations.
                            CAIC believes that innovative ideas can change the world we live in and shape it into something that we would love to be in.CAIC holds the principle of innovating and creating things that can help solve everyday problems and can make life easier for us.
                            CAIC currently has a group of 8 core committee members who receive guidance from two of the faculty members of the Depstar Institute, Charusat University.
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
                                        <th>Name Of Event<img src="/img/sort.png" style={{ float: 'right', width: '15px' }} alt="sort" /></th>
                                        <th>Date<img src="/img/sort.png" style={{ float: 'right', width: '15px' }} alt="sort" /></th>
                                        <th>No. of Participants<img src="/img/sort.png" style={{ float: 'right', width: '15px' }} alt="sort" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ideathon</td>
                                        <td>06/10/2018</td>
                                        <td>38</td>
                                    </tr>
                                    <tr>
                                        <td>3D Object Modelling using Blender</td>
                                        <td>02/03/2019</td>
                                        <td>18</td>
                                    </tr>
                                    <tr>
                                        <td>Thrift venture - an exciting Treasure Hunt</td>
                                        <td>31/08/2019</td>
                                        <td>14</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2></h2><h2 style={{ paddingTop: '20px' }}>Faculty Coordinators</h2>
                    </div>
                    <div className="row">
                        {[1].map(i => (
                            <div key={i} className="col-lg-3">
                                <div className="bd-all">
                                    <div className="text-center pd-all">
                                        <img className="picf" src={links.fcaic[i]?.photo} alt="" />
                                        <h4 id="fac">
                                            {links.fcaic[i]?.name}
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
