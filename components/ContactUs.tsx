import { config, links } from '@/lib/config';

export default function ContactUs() {
    return (
        <section id="contact" className="wow fadeInUp" style={{
            background: 'var(--bg-surface)',
            padding: '80px 0',
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div className="ds-badge" style={{ display: 'inline-flex' }}>
                        Get in Touch
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        Contact <span className="gradient-text">Us</span>
                    </h2>
                </div>

                <div className="row" style={{ marginBottom: '40px', justifyContent: 'center' }}>
                    {/* Address */}
                    <div className="col-md-4" style={{ marginBottom: '20px' }}>
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '28px',
                            textAlign: 'center',
                            height: '100%',
                            transition: 'all 0.3s ease',
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: 'rgba(6, 182, 212, 0.1)',
                                border: '1px solid rgba(6, 182, 212, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 16px auto',
                            }}>
                                <i className="fa fa-map-marker" style={{ color: 'var(--cyan-400)', fontSize: '20px' }}></i>
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '16px',
                                color: 'var(--text-white)',
                                marginBottom: '12px',
                            }}>Address</h3>
                            <address style={{
                                fontSize: '13px',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7,
                                margin: 0,
                            }} dangerouslySetInnerHTML={{ __html: config.contact_address }} />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-4" style={{ marginBottom: '20px' }}>
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '28px',
                            textAlign: 'center',
                            height: '100%',
                            transition: 'all 0.3s ease',
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: 'rgba(6, 182, 212, 0.1)',
                                border: '1px solid rgba(6, 182, 212, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 16px auto',
                            }}>
                                <i className="fa fa-phone" style={{ color: 'var(--cyan-400)', fontSize: '20px' }}></i>
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '16px',
                                color: 'var(--text-white)',
                                marginBottom: '12px',
                            }}>Phone Number</h3>
                            <a href={`tel:${config.contact_phone}`} style={{
                                color: 'var(--text-secondary)',
                                fontSize: '14px',
                                textDecoration: 'none',
                            }}>{config.contact_phone}</a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-4" style={{ marginBottom: '20px' }}>
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '28px',
                            textAlign: 'center',
                            height: '100%',
                            transition: 'all 0.3s ease',
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: 'rgba(6, 182, 212, 0.1)',
                                border: '1px solid rgba(6, 182, 212, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 16px auto',
                            }}>
                                <i className="fa fa-envelope" style={{ color: 'var(--cyan-400)', fontSize: '18px' }}></i>
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '16px',
                                color: 'var(--text-white)',
                                marginBottom: '12px',
                            }}>Email</h3>
                            <a href={`mailto:${config.contact_email}`} style={{
                                color: 'var(--cyan-400)',
                                fontSize: '14px',
                                textDecoration: 'none',
                            }}>{config.contact_email}</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 15px',
            }}>
                <div style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-card)',
                }}>
                    <iframe
                        src={links.google_map}
                        width="600"
                        height="400"
                        frameBorder="0"
                        style={{ border: '0', width: '100%', filter: 'invert(90%) hue-rotate(180deg)' }}
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
