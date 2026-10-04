'use client';

import React from 'react';

interface CertificationItem {
    id: string;
    name: string;
    description?: string;
    coordinator: string;
    email: string;
    logo: string;
}

const certifications: CertificationItem[] = [
    {
        id: 'redhat',
        name: 'Red Hat Academy',
        description: 'Enterprise Linux, cloud, and container certifications',
        coordinator: 'Prof. Sarita Thummar',
        email: 'saritathummar.ce@charusat.ac.in',
        logo: '/img/certifications/redhat.png',
    },
    {
        id: 'aws',
        name: 'AWS Academy',
        description: 'Cloud computing certifications from Amazon Web Services',
        coordinator: 'Prof. Sanket Suthar',
        email: 'sanketsuthar.it@charusat.ac.in',
        logo: '/img/certifications/aws.png',
    },
    {
        id: 'ec-council',
        name: 'EC Council',
        description: 'Ethical hacking and security certifications',
        coordinator: 'Prof. Pritesh Prajapati',
        email: 'priteshprajapati.it@charusat.ac.in',
        logo: '/img/certifications/ec_council.svg',
    },
    {
        id: 'comptia',
        name: 'Comptia Academy Partner',
        description: 'Certifications in IT, security, and cloud.',
        coordinator: 'Prof. Pritesh Prajapati',
        email: 'priteshprajapati.it@charusat.ac.in',
        logo: '/img/certifications/comptia.svg',
    },
    {
        id: 'cisco',
        name: 'Cisco Networking Academy',
        description: 'Network engineering, routing & switching, and cybersecurity',
        coordinator: 'Prof. Abhishek Patel',
        email: 'abhishekpatel.cse@charusat.ac.in',
        logo: '/img/certifications/cisco.png',
    },
    {
        id: 'oracle',
        name: 'Oracle Academy',
        description: 'Database design, Java programming, and cloud infrastructure',
        coordinator: 'Prof. Vidisha Pradhan',
        email: 'vidishapradhan.cse@charusat.ac.in',
        logo: '/img/certifications/oracle.png',
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="wow fadeInUp certifications-section">
            <div className="container">
                {/* Heading */}
                <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                    <h2 className="cert-main-heading">
                        Industry Recognized<br />
                        <span className="cert-sub-heading">Certification Courses</span>
                    </h2>
                </div>

                {/* 2-Column Cards Grid */}
                <div className="certs-grid">
                    {certifications.map((item) => (
                        <div key={item.id} className="cert-card">
                            {/* Left Logo Box */}
                            <div className="cert-logo-box">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="cert-logo-img"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="cert-info">
                                <h3 className="cert-name">{item.name}</h3>

                                {item.description && (
                                    <p className="cert-desc">{item.description}</p>
                                )}

                                <div className="cert-coord-label">COURSE COORDINATOR</div>
                                <div className="cert-coord-name">{item.coordinator}</div>

                                {item.email && (
                                    <a
                                        href={`mailto:${item.email}`}
                                        className="cert-email-link"
                                        title={`Email ${item.coordinator}`}
                                    >
                                        <i className="fa fa-envelope" style={{ fontSize: '13px', color: '#2563eb' }} />
                                        <span>{item.email}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .certifications-section {
                    position: relative;
                    padding: 85px 0 95px;
                    background-color: #ffffff;
                }

                .cert-main-heading {
                    font-size: clamp(2.2rem, 3.8vw, 3rem);
                    font-weight: 800;
                    color: #1e293b;
                    letter-spacing: -0.03em;
                    line-height: 1.2;
                    margin: 0;
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                }

                .cert-sub-heading {
                    color: #2563eb;
                    font-weight: 800;
                }

                .certs-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 26px;
                }

                /* Container matching the SWAYAM-NPTEL reference pic:
                   Subtle border with top blue accent bar */
                .cert-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-top: 3.5px solid #2563eb;
                    border-radius: 16px;
                    padding: 24px 28px;
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    box-shadow: 0 4px 16px rgba(30, 58, 95, 0.04);
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cert-card:hover {
                    transform: translateY(-5px);
                    border-top-color: #1d4ed8;
                    border-color: #93c5fd;
                    box-shadow: 0 16px 36px rgba(37, 99, 235, 0.12);
                }

                /* Logo Box */
                .cert-logo-box {
                    width: 140px;
                    height: 92px;
                    min-width: 140px;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 14px;
                    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
                    transition: all 0.3s ease;
                    overflow: hidden;
                }

                .cert-card:hover .cert-logo-box {
                    border-color: #93c5fd;
                    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.12);
                    transform: translateY(-2px) scale(1.04);
                }

                .cert-logo-img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    display: block;
                }

                /* Text Information */
                .cert-info {
                    flex: 1;
                    min-width: 0;
                }

                .cert-name {
                    font-size: 19px;
                    font-weight: 800;
                    color: #0f172a;
                    margin: 0 0 4px 0;
                    line-height: 1.3;
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                }

                .cert-desc {
                    font-size: 12.5px;
                    color: #64748b;
                    line-height: 1.4;
                    margin: 0 0 6px 0;
                }

                .cert-coord-label {
                    font-size: 10.5px;
                    font-weight: 700;
                    color: #94a3b8;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    margin-bottom: 3px;
                }

                .cert-coord-name {
                    font-size: 14.5px;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 6px;
                }

                .cert-email-link {
                    color: #2563eb;
                    font-size: 13.5px;
                    font-weight: 500;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    transition: color 0.2s ease, text-decoration 0.2s ease;
                    word-break: break-all;
                }

                .cert-email-link:hover {
                    color: #1d4ed8;
                    text-decoration: underline;
                }

                @media (max-width: 992px) {
                    .certs-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }

                @media (max-width: 576px) {
                    .cert-card {
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 20px;
                        gap: 16px;
                    }
                    .cert-logo-box {
                        width: 100%;
                        height: 80px;
                    }
                }
            `}</style>
        </section>
    );
}
