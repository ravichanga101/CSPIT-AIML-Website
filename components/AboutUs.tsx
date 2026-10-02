'use client';
import { config, links } from '@/lib/config';

const stats = [
    { icon: 'fa-book',           value: config.total_publications,        label: 'Publications' },
    { icon: 'fa-users',          value: config.student_teacher_ratio,     label: 'Student Teacher Ratio' },
    { icon: 'fa-graduation-cap', value: config.Intake,                    label: 'No. of Seats' },
    { icon: 'fa-calendar',       value: config.total_workshops_org,       label: 'Events Organized' },
    { icon: 'fa-trophy',         value: config.total_projects_and_grants, label: 'Projects & Grants' },
];

const highlights = [
    { icon: 'fa-flask',         text: 'State-of-the-art AI & ML laboratories' },
    { icon: 'fa-certificate',   text: 'Industry certifications: AWS, Microsoft, Oracle' },
    { icon: 'fa-briefcase',     text: `${config.placement_percent} placement (${config.placement_year})` },
    { icon: 'fa-university',    text: 'Part of CHARUSAT — NAAC A+ accredited university' },
];

export default function AboutUs() {
    return (
        <main id="main">
            <section id="about_us" className="wow fadeInUp about-section">
                <div className="container">

                    {/* ── Section header ── */}
                    <div className="about-header">
                        <span className="about-badge">
                            <i className="fa fa-info-circle" />
                            Institutional Overview
                        </span>
                        <h2 className="about-heading">
                            About <span>Us</span>
                        </h2>
                        <p className="about-subheading">
                            {config.name_of_dept} (Estd.&nbsp;{config.dept_esta})
                        </p>
                    </div>

                    {/* ── Two-column body ── */}
                    <div className="about-body">

                        {/* Left — description + highlights + CTA */}
                        <div className="about-left">
                            <p className="about-desc">
                                The Department of {config.name_of_dept}, established in {config.dept_esta},
                                offers {config.dept_b_tech_seats}&nbsp;seats for aspiring AI and Machine Learning
                                professionals. Rooted in academic excellence and industry relevance, the department
                                equips students with cutting-edge skills to solve real-world challenges through
                                intelligent systems and data-driven innovation.
                            </p>

                            <ul className="about-highlights">
                                {highlights.map((h, i) => (
                                    <li key={i}>
                                        <span className="about-highlight-icon">
                                            <i className={`fa ${h.icon}`} />
                                        </span>
                                        <span>{h.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="about-cta-row">
                                <a href={links.brochure} target="_blank" rel="noopener noreferrer" className="about-btn-pri">
                                    <i className="fa fa-download" /> Download Brochure
                                </a>
                                <a href="#contact_us" className="about-btn-sec">
                                    <i className="fa fa-envelope-o" /> Contact Us
                                </a>
                            </div>
                        </div>

                        {/* Right — placement spotlight card */}
                        <div className="about-right">
                            <div className="about-spotlight-card">
                                <div className="about-spotlight-top">
                                    <div className="about-spotlight-icon">
                                        <i className="fa fa-line-chart" />
                                    </div>
                                    <div>
                                        <div className="about-spotlight-label">Placement Record</div>
                                        <div className="about-spotlight-year">{config.placement_year}</div>
                                    </div>
                                </div>
                                <div className="about-spotlight-value">{config.placement_percent}</div>
                                <div className="about-spotlight-sub">Campus Placement Rate</div>
                                <div className="about-spotlight-divider" />
                                <div className="about-spotlight-meta">
                                    <div className="about-spotlight-meta-item">
                                        <span className="about-spotlight-meta-val">{config.Intake}</span>
                                        <span className="about-spotlight-meta-lbl">Seats</span>
                                    </div>
                                    <div className="about-spotlight-meta-sep" />
                                    <div className="about-spotlight-meta-item">
                                        <span className="about-spotlight-meta-val">{config.dept_esta}</span>
                                        <span className="about-spotlight-meta-lbl">Est. Year</span>
                                    </div>
                                    <div className="about-spotlight-meta-sep" />
                                    <div className="about-spotlight-meta-item">
                                        <span className="about-spotlight-meta-val">{config.total_publications}</span>
                                        <span className="about-spotlight-meta-lbl">Publications</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Stats grid ── */}
                    <div className="about-stats-grid">
                        {stats.map((s, i) => (
                            <div key={i} className="about-stat-card">
                                <div className="about-stat-icon-box">
                                    <i className={`fa ${s.icon}`} />
                                </div>
                                <div className="about-stat-value">{s.value}</div>
                                <div className="about-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}
