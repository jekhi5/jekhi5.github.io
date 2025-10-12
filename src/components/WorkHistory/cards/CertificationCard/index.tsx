import '../index.css';
import './index.css';
import { Certification } from '../../../../types';

const CertificationCard = ({ cert }: { cert: Certification }) => {
    const formatDate = (date: Date) =>
        `${date.getMonth() + 1}/${date.getDate() - 1}/${date.getFullYear()}`;

    const isExpired = cert.expiryDate && new Date(cert.expiryDate) < new Date();

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
                    <p
                        className="cert-credential-id"
                        title="Click to verify this credential"
                    >
                        Credential ID: {cert.credentialID}{' '}
                    </p>
                    <p className="duration">
                        {formatDate(cert.issueDate)}
                        {cert.expiryDate && (
                            <> - {formatDate(cert.expiryDate)}</>
                        )}
                    </p>
                    <div className="cert-status-container">
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
                            className="cert-verify-button"
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
