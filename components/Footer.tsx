'use client';
import { config, links } from '@/lib/config';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer id="footer" style={{
                background: 'var(--bg-primary)',
                borderTop: '1px solid var(--border-subtle)',
                padding: '40px 0 24px 0',
            }}>
                <div className="container">
                    {/* Contact Info */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '28px',
                        flexWrap: 'wrap',
                        marginBottom: '20px',
                    }}>
                        <a href={`mailto:${config.contact_email}`} style={{
                            color: 'var(--text-secondary)',
                            fontSize: '13px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'color 0.2s',
                        }}>
                            <i className="fa fa-envelope-o" style={{ color: 'var(--cyan-500)' }}></i>
                            {config.contact_email}
                        </a>
                        <a href={`tel:${config.contact_phone}`} style={{
                            color: 'var(--text-secondary)',
                            fontSize: '13px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'color 0.2s',
                        }}>
                            <i className="fa fa-phone" style={{ color: 'var(--cyan-500)' }}></i>
                            {config.contact_phone}
                        </a>
                    </div>

                    <div className="text-center center-block">
                        <p className="txt-railway text-center" style={{
                            color: 'var(--text-secondary)',
                            fontSize: '14px',
                            marginBottom: '16px',
                        }}>- Follow us @ Social Media -</p>
                        <div style={{ marginBottom: '24px' }}>
                            <a href="https://www.facebook.com/profile.php?id=61555053276330" target="_blank"
                                style={{ margin: '0 10px', display: 'inline-block', transition: 'all 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <i className="fa fa-facebook-square fa-2x" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}></i>
                            </a>
                            <a href="https://www.instagram.com/aiml_cspit/" target="_blank"
                                style={{ margin: '0 10px', display: 'inline-block', transition: 'all 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <i className="fa fa-instagram fa-2x" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}></i>
                            </a>
                        </div>
                    </div>
                    <div style={{
                        borderTop: '1px solid var(--border-subtle)',
                        paddingTop: '16px',
                        textAlign: 'center',
                    }}>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '13px',
                            margin: 0,
                        }}>
                            &copy; Copyright <strong style={{ color: 'var(--cyan-400)' }}>CHARUSAT</strong>. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>

            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        </>
    );
}
