'use client';

import React from 'react';
import Link from 'next/link';
import SectionBackground from '@/components/SectionBackground';

export interface EquipmentItem {
    name: string;
    specs?: string;
    year: string;
    qty: number | string;
    type?: string;
    icon?: string;
}

export interface LabDetailProps {
    number: string;
    title: string;
    officialName: string;
    subtitle?: string;
    totalPCs?: number | string;
    equipment: EquipmentItem[];
}

export default function LabDetailView({
    number,
    title,
    officialName,
    subtitle = "Department of Artificial Intelligence & Machine Learning · CSPIT",
    totalPCs = 40,
    equipment
}: LabDetailProps) {
    return (
        <section className="lab-page-section">
            {/* Dynamic Animated Ambient Background */}
            <SectionBackground />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* ── Breadcrumb Navigation ── */}
                <nav className="lab-breadcrumb" aria-label="breadcrumb">
                    <Link href="/" className="breadcrumb-home">
                        <i className="fa fa-home" /> Home
                    </Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-muted">Research Labs</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">Lab {number}</span>
                </nav>

                {/* ── Premium Lab Header Hero ── */}
                <div className="lab-header-card">
                    <div className="lab-header-top-accent" />

                    <div className="lab-header-content">
                        <div className="lab-badge-wrap">
                            <span className="lab-badge">
                                <i className="fa fa-microchip" />
                                ADVANCED RESEARCH FACILITY
                            </span>
                            <span className="lab-status-pill">
                                <span className="lab-pulse-dot" /> Active &amp; Operational
                            </span>
                        </div>

                        <div className="lab-title-row">
                            <div className="lab-number-orb">
                                <span className="lab-orb-label">LAB</span>
                                <span className="lab-orb-val">{number}</span>
                            </div>
                            <div>
                                <h1 className="lab-title">{title}</h1>
                                <p className="lab-subtitle">
                                    <i className="fa fa-university" /> {subtitle}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Meta Cards Grid */}
                    <div className="lab-quick-stats">
                        <div className="lab-stat-item">
                            <div className="lab-stat-icon-box">
                                <i className="fa fa-id-badge" />
                            </div>
                            <div>
                                <span className="lab-stat-label">OFFICIAL CODE</span>
                                <span className="lab-stat-value">{officialName}</span>
                            </div>
                        </div>

                        <div className="lab-stat-item stat-highlight">
                            <div className="lab-stat-icon-box stat-highlight-icon">
                                <i className="fa fa-desktop" />
                            </div>
                            <div>
                                <span className="lab-stat-label">SEATING / CAPACITY</span>
                                <span className="lab-stat-value">{totalPCs} Workstations</span>
                            </div>
                        </div>

                        <div className="lab-stat-item">
                            <div className="lab-stat-icon-box">
                                <i className="fa fa-shield" />
                            </div>
                            <div>
                                <span className="lab-stat-label">POWER &amp; NETWORK</span>
                                <span className="lab-stat-value">High-Speed LAN &amp; UPS</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Equipment & Hardware Cards Showcase ── */}
                <div className="lab-showcase-wrap">
                    <div className="lab-section-heading-bar">
                        <div>
                            <span className="lab-sec-badge">
                                <i className="fa fa-server" /> INVENTORY
                            </span>
                            <h2 className="lab-sec-title">Key Equipment &amp; Hardware</h2>
                        </div>
                        <span className="lab-table-count">
                            <i className="fa fa-check-circle" /> {equipment.length} Primary Systems
                        </span>
                    </div>

                    {/* Hardware Cards Grid */}
                    <div className="lab-equipment-grid">
                        {equipment.map((item, idx) => (
                            <div key={idx} className="equipment-card">
                                {/* Top Header Row */}
                                <div className="eq-top-row">
                                    <div className="eq-icon-orb">
                                        <i className={`fa ${item.icon || 'fa-desktop'}`} />
                                    </div>
                                    <div className="eq-type-pill">{item.type || 'Computing Unit'}</div>
                                    <div className="eq-qty-pill">
                                        <span className="eq-qty-num">{item.qty}</span>
                                        <span className="eq-qty-lbl">{Number(item.qty) > 1 ? 'Units' : 'Unit'}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="eq-name">{item.name}</h3>

                                {/* Specifications Breakdown */}
                                {item.specs && (
                                    <div className="eq-specs-box">
                                        <div className="eq-specs-label">
                                            <i className="fa fa-cogs" /> System Specifications
                                        </div>
                                        <p className="eq-specs-text">{item.specs}</p>
                                    </div>
                                )}

                                {/* Card Footer Info */}
                                <div className="eq-footer">
                                    <div className="eq-year-info">
                                        <i className="fa fa-calendar-check-o" />
                                        <span>Purchase Year: <strong>{item.year}</strong></span>
                                    </div>
                                    <div className="eq-verified-tag">
                                        <i className="fa fa-check" /> Verified Config
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Infrastructure Note Banner */}
                <div className="lab-infra-banner">
                    <i className="fa fa-bolt" />
                    <span>All computing workstations are backed by dedicated campus UPS systems, gigabit ethernet routing, and central network storage.</span>
                </div>

                {/* Bottom Back Button */}
                <div style={{ textAlign: 'center', marginTop: '36px' }}>
                    <Link href="/" className="lab-back-button">
                        <i className="fa fa-arrow-left" /> Back to Home Page
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .lab-page-section {
                    position: relative;
                    padding: 125px 0 95px 0;
                    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 45%, #F0F6FF 100%);
                    min-height: calc(100vh - 180px);
                    overflow: hidden;
                }

                /* ── Breadcrumb Navigation ── */
                .lab-breadcrumb {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(12px);
                    border: 1px solid #E2E8F0;
                    border-radius: 9999px;
                    padding: 8px 20px;
                    font-size: 13.5px;
                    font-weight: 600;
                    color: #64748B;
                    margin-bottom: 28px;
                    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
                }

                .breadcrumb-home {
                    color: #2563EB;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: color 0.2s ease;
                }

                .breadcrumb-home:hover {
                    color: #1D4ED8;
                }

                .breadcrumb-separator {
                    color: #CBD5E1;
                    user-select: none;
                }

                .breadcrumb-muted {
                    color: #64748B;
                }

                .breadcrumb-current {
                    color: #0F172A;
                    font-weight: 800;
                }

                /* ── Header Hero Card ── */
                .lab-header-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border: 1.5px solid #E2E8F0;
                    border-radius: 28px;
                    padding: 40px 44px;
                    margin-bottom: 36px;
                    box-shadow: 0 20px 50px rgba(37, 99, 235, 0.07), 0 1px 3px rgba(0, 0, 0, 0.02);
                    position: relative;
                    overflow: hidden;
                }

                .lab-header-top-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 5px;
                    background: linear-gradient(90deg, #1E3A5F 0%, #2563EB 50%, #38BDF8 100%);
                }

                .lab-badge-wrap {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-bottom: 18px;
                }

                .lab-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    background: #EFF6FF;
                    border: 1px solid #DBEAFE;
                    color: #2563EB;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                }

                .lab-status-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    background: #F0FDF4;
                    border: 1px solid #DCFCE7;
                    color: #16A34A;
                    font-size: 11.5px;
                    font-weight: 700;
                }

                .lab-pulse-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #22C55E;
                    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25);
                    animation: pulseStatus 2s infinite;
                }

                @keyframes pulseStatus {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
                    70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
                }

                .lab-title-row {
                    display: flex;
                    align-items: center;
                    gap: 22px;
                    margin-bottom: 32px;
                }

                .lab-number-orb {
                    width: 82px;
                    height: 82px;
                    min-width: 82px;
                    border-radius: 22px;
                    background: linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%);
                    color: #FFFFFF;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.28);
                }

                .lab-orb-label {
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1.2px;
                    opacity: 0.85;
                }

                .lab-orb-val {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 20px;
                    font-weight: 900;
                    line-height: 1.1;
                }

                .lab-title {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: clamp(1.8rem, 3.2vw, 2.5rem);
                    font-weight: 900;
                    color: #0F172A;
                    margin: 0 0 6px 0;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                }

                .lab-subtitle {
                    font-size: 14.5px;
                    color: #64748B;
                    margin: 0;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .lab-subtitle i {
                    color: #2563EB;
                }

                /* Quick Stats Grid */
                .lab-quick-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 18px;
                    padding-top: 24px;
                    border-top: 1px solid #F1F5F9;
                }

                .lab-stat-item {
                    background: #F8FAFC;
                    border: 1px solid #E2E8F0;
                    border-radius: 16px;
                    padding: 16px 20px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    transition: all 0.25s ease;
                }

                .lab-stat-item:hover {
                    transform: translateY(-2px);
                    background: #FFFFFF;
                    border-color: #93C5FD;
                    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.08);
                }

                .stat-highlight {
                    background: #EFF6FF;
                    border-color: #BFDBFE;
                }

                .lab-stat-icon-box {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    border-radius: 12px;
                    background: #FFFFFF;
                    border: 1px solid #E2E8F0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #1E3A5F;
                    font-size: 18px;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
                }

                .stat-highlight-icon {
                    background: #2563EB;
                    color: #FFFFFF;
                    border-color: #2563EB;
                }

                .lab-stat-label {
                    display: block;
                    font-size: 10.5px;
                    font-weight: 800;
                    color: #64748B;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    margin-bottom: 2px;
                }

                .lab-stat-value {
                    display: block;
                    font-size: 15px;
                    font-weight: 800;
                    color: #0F172A;
                }

                /* ── Equipment Cards Showcase ── */
                .lab-showcase-wrap {
                    margin-bottom: 38px;
                }

                .lab-section-heading-bar {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    margin-bottom: 22px;
                    flex-wrap: wrap;
                    gap: 12px;
                }

                .lab-sec-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    font-weight: 800;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.9px;
                    margin-bottom: 4px;
                }

                .lab-sec-title {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 24px;
                    font-weight: 800;
                    color: #0F172A;
                    margin: 0;
                    letter-spacing: -0.01em;
                }

                .lab-equipment-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
                    gap: 24px;
                }

                .equipment-card {
                    background: #FFFFFF;
                    border: 1.5px solid #E2E8F0;
                    border-radius: 24px;
                    padding: 30px 28px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .equipment-card:hover {
                    transform: translateY(-5px);
                    border-color: #93C5FD;
                    box-shadow: 0 20px 45px rgba(37, 99, 235, 0.12);
                }

                .eq-top-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }

                .eq-icon-orb {
                    width: 52px;
                    height: 52px;
                    border-radius: 16px;
                    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
                    border: 1.5px solid #BFDBFE;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563EB;
                    font-size: 22px;
                    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.12);
                }

                .eq-type-pill {
                    font-size: 11px;
                    font-weight: 800;
                    color: #1E3A8A;
                    background: #EFF6FF;
                    border: 1px solid #DBEAFE;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    text-transform: uppercase;
                    letter-spacing: 0.6px;
                }

                .eq-qty-pill {
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                    background: #F8FAFC;
                    border: 1px solid #E2E8F0;
                    border-radius: 12px;
                    padding: 4px 12px;
                }

                .eq-qty-num {
                    font-size: 17px;
                    font-weight: 900;
                    color: #2563EB;
                }

                .eq-qty-lbl {
                    font-size: 11px;
                    font-weight: 700;
                    color: #64748B;
                }

                .eq-name {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 800;
                    color: #0F172A;
                    margin: 0 0 16px 0;
                    line-height: 1.35;
                }

                .eq-specs-box {
                    background: #F8FAFC;
                    border: 1px solid #EEF2F6;
                    border-radius: 14px;
                    padding: 16px 18px;
                    margin-bottom: 22px;
                    flex: 1;
                }

                .eq-specs-label {
                    font-size: 11px;
                    font-weight: 800;
                    color: #475569;
                    text-transform: uppercase;
                    letter-spacing: 0.6px;
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .eq-specs-label i {
                    color: #2563EB;
                }

                .eq-specs-text {
                    font-size: 13.5px;
                    line-height: 1.65;
                    color: #334155;
                    margin: 0;
                    font-family: var(--font-b, sans-serif);
                }

                .eq-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 16px;
                    border-top: 1px solid #F1F5F9;
                    font-size: 12.5px;
                }

                .eq-year-info {
                    color: #64748B;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .eq-year-info strong {
                    color: #0F172A;
                }

                .eq-verified-tag {
                    color: #16A34A;
                    font-weight: 700;
                    font-size: 11.5px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                /* ── Infrastructure Note Banner ── */
                .lab-infra-banner {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(12px);
                    border: 1.5px solid #E2E8F0;
                    border-radius: 16px;
                    padding: 16px 24px;
                    color: #475569;
                    font-size: 13.5px;
                    font-weight: 600;
                    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
                    text-align: center;
                    margin-top: 10px;
                }

                .lab-infra-banner i {
                    color: #2563EB;
                    font-size: 16px;
                    flex-shrink: 0;
                }

                .lab-back-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 28px;
                    border-radius: 9999px;
                    background: #FFFFFF;
                    border: 1.5px solid #E2E8F0;
                    color: #1E3A5F;
                    font-size: 14px;
                    font-weight: 700;
                    text-decoration: none;
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
                    transition: all 0.25s ease;
                }

                .lab-back-button:hover {
                    background: #EFF6FF;
                    border-color: #93C5FD;
                    color: #2563EB;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.12);
                }

                /* ── Responsive Rules ── */
                @media (max-width: 900px) {
                    .lab-quick-stats {
                        grid-template-columns: 1fr;
                    }
                    .lab-title-row {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 14px;
                    }
                    .lab-header-card {
                        padding: 28px 24px;
                    }
                }

                @media (max-width: 600px) {
                    .lab-equipment-grid {
                        grid-template-columns: 1fr;
                    }
                    .equipment-card {
                        padding: 22px 18px;
                    }
                }
            `}</style>
        </section>
    );
}
