import { useState } from 'react';
import './index.css';
import DetailButtons from 'components/Home/DetailButtons';

const apiBase = 'https://jekhi5.netlify.app';

export default function ContactForm() {
  const inquiryReasons: { [key: string]: string } = {
    github: 'GitHub Project Access Request',
    networking: 'Networking',
    personal: 'Personal',
    other: 'Other',
  };

  const defaultInquiryReason = 'github';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState('');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formInquiryReason, setFormInquiryReason] = useState(
    inquiryReasons[defaultInquiryReason]
  );

  const sendEmail = async (e: any) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    const newMessage = `Inquiry Reason: ${formInquiryReason}\n\n ${formMessage}`;

    const formData = {
      name: formName,
      email: formEmail,
      message: newMessage,
      title: formSubject,
    };

    const res = await fetch(`${apiBase}/api/form_submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStateMessage('Message sent!');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage('');
      }, 5000);
      // Reset form
      e.target.reset();
    } else {
      const responseText = await res.text();
      setStateMessage(responseText);
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage('');
      }, 5000);
    }
  };

  function updateInquiry(key: string) {
    setFormInquiryReason(inquiryReasons[key]);
  }

  return (
    <div className="vh-100">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <h6>
          Let's get in touch! If you'd like to learn more about my experience,
          please feel free to check out my LinkedIn, GitHub, and Resume below:
        </h6>
        <DetailButtons />
        <form onSubmit={sendEmail} className="">
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Name*"
            onChange={(e) => setFormName(e.currentTarget.value)}
            required
          />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Email*"
            onChange={(e) => setFormEmail(e.currentTarget.value)}
            required
          />
          <label>Reason for inquiry:</label>
          <select
            required
            defaultValue={defaultInquiryReason}
            onChange={(e) => updateInquiry(e.currentTarget.value)}
          >
            {Object.keys(inquiryReasons).map((key) => (
              <option value={key} key={key}>
                {inquiryReasons[key]}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="title"
            className="title"
            placeholder="Subject"
            onChange={(e) => setFormSubject(e.currentTarget.value)}
          />
          <textarea
            name="message"
            className="message"
            placeholder="Message*"
            onChange={(e) => setFormMessage(e.currentTarget.value)}
            required
          />
          <input type="submit" value="Send" disabled={isSubmitting} />
          {stateMessage && <p>{stateMessage}</p>}
        </form>
      </div>
    </div>
  );
}
