import Link from 'next/link';

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
            <div className="container">
                {/* Breadcrumb Navigation */}
                <nav className="lab-breadcrumb" aria-label="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span>Research Labs</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{number}</span>
                </nav>

                {/* Lab Header */}
                <div className="lab-header-card">
                    <div className="lab-header-content">
                        <span className="lab-badge">
                            <i className="fa fa-flask" /> Advanced Research Facility
                        </span>
                        <h1 className="lab-title">{title}</h1>
                        <p className="lab-subtitle">{subtitle}</p>
                    </div>

                    {/* Quick Meta Cards */}
                    <div className="lab-quick-stats">
                        <div className="lab-stat-item">
                            <span className="lab-stat-label">LAB NUMBER</span>
                            <span className="lab-stat-value lab-stat-highlight">{number}</span>
                        </div>
                        <div className="lab-stat-item">
                            <span className="lab-stat-label">OFFICIAL NAME</span>
                            <span className="lab-stat-value">{officialName}</span>
                        </div>
                        <div className="lab-stat-item">
                            <span className="lab-stat-label">SEATING / PCS</span>
                            <span className="lab-stat-value">{totalPCs} Workstations</span>
                        </div>
                    </div>
                </div>

                {/* Lab Inventory Table Container */}
                <div className="lab-table-card">
                    <div className="lab-table-topbar">
                        <div className="lab-table-topbar-title">
                            <i className="fa fa-server" />
                            <span>Equipment &amp; Hardware Specifications</span>
                        </div>
                        <span className="lab-table-count">
                            {equipment.length} Configurations Listed
                        </span>
                    </div>

                    <div className="lab-table-responsive">
                        <table className="lab-inventory-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '120px' }}>LAB NO</th>
                                    <th style={{ width: '190px' }}>LAB NAME</th>
                                    <th style={{ width: '140px' }}>PURCHASE YEAR</th>
                                    <th>PARTICULAR &amp; SPECIFICATIONS</th>
                                    <th style={{ width: '90px', textAlign: 'center' }}>QTY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {equipment.map((item, index) => (
                                    <tr key={index}>
                                        {index === 0 && (
                                            <td rowSpan={equipment.length} className="lab-col-fixed lab-col-no">
                                                <div className="lab-no-pill">{number}</div>
                                            </td>
                                        )}
                                        {index === 0 && (
                                            <td rowSpan={equipment.length} className="lab-col-fixed lab-col-name">
                                                <div className="lab-name-text">{officialName}</div>
                                                <span className="lab-dept-tag">CSPIT AIML</span>
                                            </td>
                                        )}
                                        <td className="lab-col-year">
                                            <span className="lab-year-badge">{item.year}</span>
                                        </td>
                                        <td className="lab-col-particular">
                                            <div className="particular-title-row">
                                                {item.icon && <i className={`fa ${item.icon} particular-icon`} />}
                                                <span className="particular-name">{item.name}</span>
                                                {item.type && <span className="particular-type-badge">{item.type}</span>}
                                            </div>
                                            {item.specs && (
                                                <div className="particular-specs">{item.specs}</div>
                                            )}
                                        </td>
                                        <td className="lab-col-qty">
                                            <span className="lab-qty-badge">{item.qty}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer Note */}
                    <div className="lab-table-footer">
                        <div className="lab-footer-note">
                            <i className="fa fa-info-circle" />
                            <span>All computing units are configured with dedicated high-speed campus LAN and power backup.</span>
                        </div>
                        <Link href="/" className="lab-back-link">
                            <i className="fa fa-arrow-left" /> Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
