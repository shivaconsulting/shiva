
import React from "react";
import "./CompanyNetwork.css";

const companies = [
    {
        name: "Amazon",
        domain: "amazon.in",
        category: "E-commerce",
    },
    {
        name: "Flipkart",
        domain: "flipkart.com",
        category: "E-commerce",
    },
    {
        name: "IndiGo",
        domain: "goindigo.in",
        category: "Aviation",
    },
    {
        name: "Air India",
        domain: "airindia.com",
        category: "Aviation",
    },
    {
        name: "Myntra",
        domain: "myntra.com",
        category: "Retail",
    },
    {
        name: "BigBasket",
        domain: "bigbasket.com",
        category: "Retail",
    },
    {
        name: "Blinkit",
        domain: "blinkit.com",
        category: "Quick Commerce",
    },
    {
        name: "Hero",
        domain: "heromotocorp.com",
        category: "Automotive",
    },
    {
        name: "Neva Health Insurance",
        domain: null,
        category: "Insurance",
        initials: "NH",
    },
    {
        name: "Startek",
        domain: "startek.com",
        category: "Services",
    },
    {
        name: "One.One",
        domain: null,
        category: "Services",
        initials: "OO",
    },
    {
        name: "Lexes",
        domain: null,
        category: "Services",
        initials: "LX",
    },
    {
        name: "Siddhi Group",
        domain: null,
        category: "Business",
        initials: "SG",
    },
    {
        name: "Subrose",
        domain: null,
        category: "Business",
        initials: "SB",
    },
    {
        name: "Pragati Manufacturing",
        domain: null,
        category: "Manufacturing",
        initials: "PM",
    },
    {
        name: "Concentrix",
        domain: "concentrix.com",
        category: "Technology",
    },
    {
        name: "Secreto",
        domain: null,
        category: "Business",
        initials: "SC",
    },
];

function CompanyLogo({ company }) {
    const [imageError, setImageError] = React.useState(false);

    const logoUrl = company.domain
        ? `https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`
        : null;

    if (!logoUrl || imageError) {
        return (
            <div className="company-logo-fallback">
                {company.initials || company.name.slice(0, 2).toUpperCase()}
            </div>
        );
    }

    return (
        <img
            className="company-logo"
            src={logoUrl}
            alt={`${company.name} logo`}
            loading="lazy"
            onError={() => setImageError(true)}
        />
    );
}

export default function CompanyNetwork() {
    return (
        <section className="company-network-section">
            <div className="company-network-container">

                <div className="company-network-left">

                    <div className="company-eyebrow">
                        <span className="eyebrow-dot"></span>
                        A NETWORK OF OPPORTUNITY
                    </div>

                    <h2>
                        Connecting
                        <br />
                        talent
                        <br />
                        with <span>leading</span>
                        <br />
                        <span>names.</span>
                    </h2>

                    <p className="company-description">
                        Our placement records span multiple industries —
                        from retail and aviation to manufacturing,
                        customer service, technology and more.
                    </p>

                    <a href="#contact" className="company-contact-link">
                        Talk to our team
                        <span>↗</span>
                    </a>

                </div>

                <div className="company-network-right">

                    <div className="network-header">

                        <div>
                            <span className="network-label">
                                COMPANIES FROM OUR RECORDS
                            </span>

                            <h3>
                                Our Employment Network
                            </h3>
                        </div>

                        <div className="network-count">
                            <strong>100+</strong>
                            <span>NETWORK</span>
                        </div>

                    </div>

                    <div className="company-grid">

                        {companies.map((company) => (
                            <div
                                className="company-card"
                                key={company.name}
                                title={company.category}
                            >

                                <div className="company-card-logo">
                                    <CompanyLogo company={company} />
                                </div>

                                <div className="company-card-info">
                                    <span className="company-name">
                                        {company.name}
                                    </span>

                                    <span className="company-category">
                                        {company.category}
                                    </span>
                                </div>

                                <span className="company-arrow">↗</span>

                            </div>
                        ))}

                    </div>

                    <div className="network-footer">
                        <span className="footer-gold-line"></span>

                        <p>
                            Company names are based on placement records
                            supplied by the consultancy. Logos are
                            illustrative brand identifiers and do not
                            independently establish an official partnership.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
