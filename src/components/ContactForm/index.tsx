import { useState, useRef } from 'react';
import './index.css';
import DetailButtons from 'components/Home/DetailButtons';
import ReCAPTCHA from 'react-google-recaptcha';

const apiBase = 'https://jekhi5.netlify.app';

export default function ContactForm() {
    const inquiryReasons: { [key: string]: string } = {
        networking: 'Networking',
        canastaScoresheet: 'Canasta Scoresheet App',
        github: 'GitHub Project Access Request',
        personal: 'Personal',
        other: 'Other',
    };

    const defaultInquiryReason = 'networking';

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState('');
    const [messageIsError, setMessageIsError] = useState(false);
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [formSubject, setFormSubject] = useState('');
    const [formInquiryReason, setFormInquiryReason] = useState(
        inquiryReasons[defaultInquiryReason],
    );

    const gReCAPTCHAResponse = useRef(null);

    function isProbablyValidEmail(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const sendEmail = async (e: any) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        if (!isProbablyValidEmail(formEmail)) {
            setMessageIsError(true);
            setStateMessage('Please enter a valid email address.');
            setIsSubmitting(false);
            return;
        }

        const newMessage = `Inquiry Reason: ${formInquiryReason}\n\n ${formMessage}`;

        const gReCAPTCHACurrent = gReCAPTCHAResponse.current;
        const token =
            gReCAPTCHACurrent !== null
                ? (gReCAPTCHACurrent as any).getValue()
                : null;

        const formData = {
            name: formName,
            email: formEmail,
            message: newMessage,
            title: formSubject,
            gReCAPTCHAResponse: token,
        };

        const res = await fetch(`${apiBase}/api/form_submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (gReCAPTCHACurrent !== null) {
            (gReCAPTCHACurrent as any).reset();
        }

        if (res.ok) {
            setMessageIsError(false);
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage('');
            }, 5000);
            // Reset form
            e.target.reset();
        } else {
            const responseText = await res.text();
            setMessageIsError(true);
            setStateMessage(responseText);
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage('');
                setMessageIsError(false);
            }, 5000);
        }
    };

    function updateInquiry(key: string) {
        setFormInquiryReason(inquiryReasons[key]);
    }

    function handleReCAPTCHAError() {
        setMessageIsError(true);
        setStateMessage(
            'There was an error with the ReCAPTCHA. Please try again.',
        );
        setTimeout(() => {
            setStateMessage('');
            setMessageIsError(false);
        }, 5000);
    }

    return (
        <div>
            <div className="contact-form">
                <h2>Contact Me</h2>
                <h6>
                    Let's get in touch! If you'd like to learn more about my
                    experience, please feel free to check out my LinkedIn,
                    GitHub, and Resume below:
                </h6>
                <div className="mb-3">
                    <DetailButtons />
                </div>
                <form onSubmit={sendEmail}>
                    {stateMessage && (
                        <p
                            className={`fw-bold text-center pt-3 ${
                                messageIsError ? 'text-danger' : 'text-success'
                            }`}
                        >
                            {stateMessage.replace(/"|"/g, '')}
                        </p>
                    )}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            className="name"
                            placeholder="Name*"
                            onChange={(e) => setFormName(e.currentTarget.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            className="email"
                            placeholder="Email*"
                            onChange={(e) =>
                                setFormEmail(e.currentTarget.value)
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Reason for inquiry:</label>
                    </div>
                    <div className="mb-3">
                        <select
                            required
                            defaultValue={defaultInquiryReason}
                            onChange={(e) =>
                                updateInquiry(e.currentTarget.value)
                            }
                        >
                            {Object.keys(inquiryReasons).map((key) => (
                                <option value={key} key={key}>
                                    {inquiryReasons[key]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            className="title"
                            placeholder="Subject"
                            onChange={(e) =>
                                setFormSubject(e.currentTarget.value)
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            name="message"
                            className="message"
                            placeholder="Message*"
                            onChange={(e) =>
                                setFormMessage(e.currentTarget.value)
                            }
                            required
                        />
                    </div>
                    <ReCAPTCHA
                        sitekey="6Lc9Ny0rAAAAAOBvfdHU39NukwQjM2_f0_q303Q4"
                        onErrored={handleReCAPTCHAError}
                        ref={gReCAPTCHAResponse}
                    />
                    <input type="submit" value="Send" disabled={isSubmitting} />
                </form>
            </div>
        </div>
    );
}
