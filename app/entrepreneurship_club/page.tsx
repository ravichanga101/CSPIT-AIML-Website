import { links } from '../../lib/config';

export default function EntrepreneurshipClub() {
    const faculty = Object.values(links.fentrepreneurship_Club);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        th {
    cursor: pointer;
    font - weight: bold;
    text - align: center;
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
                        <h2></h2><h2 style={{ paddingTop: '20px' }}>Depstar Entrepreneurship & Communication Club</h2><br />
                        <p>Devang Patel Institute of Advance Technology and Research
                            (DEPSTAR) always inspires students for the overall development in
                            academics and co-curricular activities. The Entrepreneurship
                            Communication club was started with the aim to development the
                            entrepreneurship skills of the students. The events organized by the
                            club helps students get idea about how to incubate a business. Along
                            with business skills, communication skills are necessary to run the
                            business. As the name suggests, the Entrepreneurship
                            Communication club, also organizes events like Spell-Bee, Elocution
                            and Debate Competitions for language development and improving
                            the communication skills.
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
                                        <td>Spell Bee</td>
                                        <td>02/03/2019</td>
                                        <td>08</td>
                                    </tr>
                                    <tr>
                                        <td>Debate Competition</td>
                                        <td>07/09/2019</td>
                                        <td>13</td>
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
