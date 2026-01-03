import '../index.css';
import './index.css';
import { Certification } from '../../../../types';
import { formatShortDate } from '../../../../utils/dateFormatters';

const CertificationCard = ({ cert }: { cert: Certification }) => {
    const isExpired = cert.expiryDate && cert.expiryDate < new Date();

    return (
        <div className={`cert-item ${isExpired ? 'expired' : ''}`}>
            <div className="cert-item-header">
                {cert.certificationImage && (
                    <a
                        href={cert.issuingBodyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-link"
                    >
                        <div className="logo-container">
                            <img
                                src={require(`../../../../data/imageData/${cert.certificationImage}`)}
                                alt={`${cert.title} badge`}
                                className="logo"
                            />
                        </div>
                    </a>
                )}

                <div className="cert-details">
                    <h3 className="cert-title">{cert.title}</h3>
                    <a
                        href={cert.issuingBodyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-link"
                    >
                        <p className="cert-issuer">{cert.issuingBody}</p>
                    </a>
                    {cert.credentialID && (
                        <p className="cert-credential-id">
                            Credential ID: {cert.credentialID}{' '}
                        </p>
                    )}
                    <p className="duration">
                        {formatShortDate(cert.issueDate)}
                        {cert.expiryDate && (
                            <> - {formatShortDate(cert.expiryDate)}</>
                        )}
                    </p>
                    <div className="cert-status-container text-nowrap">
                        {cert.expiryDate ? (
                            isExpired ? (
                                <span className="cert-expired-label">
                                    Expired
                                </span>
                            ) : (
                                <span className="cert-active-label">
                                    Active
                                </span>
                            )
                        ) : (
                            <span className="cert-no-expiry-label">
                                No Expiry
                            </span>
                        )}

                        <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="cert-verify-button text-nowrap"
                        >
                            Verify Credential
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificationCard;
