"use client";

import { config, links } from '@/lib/config';
import Link from 'next/link';

export default function MainMenu() {
    return (
        <>
            {/* Header */}
            <header id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <Link href="/" className="scrollto" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            {/* AI Logo Icon */}
                            <div style={{
                                width: '36px',
                                height: '36px',
                                background: 'var(--gradient-primary)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 800,
                                fontSize: '14px',
                                color: 'var(--bg-primary)',
                                flexShrink: 0,
                            }}>AI</div>
                            <span style={{ lineHeight: 1.2 }}>
                                <span style={{
                                    display: 'block',
                                    fontSize: '10px',
                                    color: 'var(--cyan-400)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-body)',
                                }}>CSPIT</span>
                                <span style={{
                                    display: 'block',
                                    fontSize: '14px',
                                    color: 'var(--text-white)',
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 700,
                                    whiteSpace: 'nowrap',
                                }}>{config.name_of_dept}</span>
                            </span>
                        </Link>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><Link href="/">Home</Link></li>
                            <li className="menu-has-children"><Link href="/#about_us">About</Link>
                                <ul>
                                    <li><Link href="/#vision">Vision</Link></li>
                                    <li><Link href="/#mission">Mission</Link></li>
                                    <li><a data-toggle="modal" data-target="#peos">Program Education Objectives (PEOs)</a></li>
                                    <li><a data-toggle="modal" data-target="#pos">Program Outcomes (POs)</a></li>
                                    <li><a data-toggle="modal" data-target="#psos">Program Specific Outcomes (PSOs)</a></li>
                                </ul>
                            </li>
                            <li><Link href="#">Student Services</Link>
                                <ul>
                                    <li>
                                        <a href="https://drive.google.com/file/d/1R43bm9OBMy74JAz8SMx_-T4RMSyDhD0R/view" target="_blank">Academic Calender</a>
                                    </li>
                                    <li>
                                        <a href="https://drive.google.com/file/d/1UO1ZbYqAX5ongBuoIh-hh8BwQK8z3m_l/view?usp=sharing" target="_blank">Booklet 24-25</a>
                                    </li>
                                    <li>
                                        <a href="https://drive.google.com/drive/folders/1CsUApZYDwfpl44itkin-ubXCAD0-FF5i?usp=drive_link" target="_blank">Syllabus</a>
                                    </li>
                                    <li>
                                        <a href="https://charusat.edu.in:912/eGovernance/" target="_blank">Egovernance</a>
                                    </li>
                                    <li>
                                        <a href="https://charusat.edu.in:912/UniExamResult/" target="_blank">Exam Result</a>
                                    </li>
                                    <li>
                                        <Link href="/student_achievements_all">Student Achievements</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-has-children">
                                <Link href="#">Research Labs</Link>
                                <ul>
                                    <li><Link href="/323A">323-A</Link></li>
                                    <li><Link href="/323B">323-B</Link></li>
                                    <li><Link href="/324A">324-A</Link></li>
                                    <li><Link href="/324D">324-D</Link></li>
                                    <li><Link href="/325">Motorola Lab(325)</Link></li>
                                </ul>
                            </li>
                            <li className="menu-has-children"><a href="https://admission.charusat.ac.in/" target="_blank">Admission</a></li>
                        </ul>
                        <br /><br /><br />
                    </nav>
                </div>

                {/* Modals from PHP file - PEOs, POs, PSOs */}
                <section id="services" className="wow fadeInUp" style={{ textAlign: 'left' }}>
                    {/* PEO Modal */}
                    <div className="modal fade" id="peos" role="dialog">
                        <div className="modal-dialog" style={{ minWidth: '70%' }}>
                            <div className="modal-content" style={{ paddingLeft: '30px' }}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Program Education Objectives (PEOs)</h4>
                                    <button type="button" className="close" data-dismiss="modal" style={{ textAlign: 'right' }}>&times;</button>
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group">
                                        <li>
                                            <strong>Program Objective 1</strong>
                                            <br />
                                            <p style={{ textAlign: 'justify' }}>To prepare the student(s) for a successful career as a technocrat.</p>
                                        </li>
                                        <li>
                                            <strong>Program Objective 2</strong>
                                            <p style={{ textAlign: 'justify' }}>To create an ambience; where the students will get the opportunity to become excellent working professionals.</p>
                                        </li>
                                        <li>
                                            <strong>Program Objective 3</strong>
                                            <p style={{ textAlign: 'justify' }}>To provide continued professional development and lifelong learning throughout their career to inculcate strong teamwork and ready young minds for tangible contributions to the society.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PO Modal */}
                    <div className="modal fade" id="pos" role="dialog">
                        <div className="modal-dialog" style={{ minWidth: '70%' }}>
                            <div className="modal-content" style={{ paddingLeft: '30px' }}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Program Outcomes (POs)</h4>
                                    <button type="button" className="close" data-dismiss="modal" style={{ textAlign: 'right' }}>&times;</button>
                                </div>
                                <div className="modal-body">
                                    <ol className="list-group">
                                        <li><p style={{ textAlign: 'justify' }}><strong>Engineering knowledge:</strong> Apply knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Problem analysis:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Design/development of solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, and the cultural, societal, and environmental considerations.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Conduct investigations of complex problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Modern tool usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>The engineer and society:</strong> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Environment and sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Individual and team work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Project management and finance:</strong> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</p></li>
                                        <li><p style={{ textAlign: 'justify' }}><strong>Life-long learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</p></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PSO Modal */}
                    <div className="modal fade" id="psos" role="dialog">
                        <div className="modal-dialog" style={{ minWidth: '70%' }}>
                            <div className="modal-content" style={{ paddingLeft: '30px' }}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Program Specific Outcomes (PSOs)</h4>
                                    <button type="button" className="close" data-dismiss="modal" style={{ textAlign: 'right' }}>&times;</button>
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group">
                                        <li>
                                            <strong>PSO 1</strong>
                                            <br />
                                            <p style={{ textAlign: 'justify' }}>Graduates will demonstrate the ability to analyze complex
                                                problems, apply appropriate algorithms and develop innovative
                                                solutions that meet real-world challenges.
                                            </p>
                                        </li>
                                        <li>
                                            <strong>PSO 2</strong>
                                            <p style={{ textAlign: 'justify' }}>Graduates will be practical competence with emerging
                                                technologies in the multi-disciplinary area for sustainable contributions
                                                to the academic, industrial, and societal communities
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
}
