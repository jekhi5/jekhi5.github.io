import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';
import DetailButtons from 'components/Home/DetailButtons';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState('');
  // const [inquiryReason, setInquiryReason] = useState('');

  const sendEmail = (e: any) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID ?? '',
        process.env.REACT_APP_TEMPLATE_ID ?? '',
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (_) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage('');
          }, 5000);
          // Reset form
          e.target.reset();
        },
        (_) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage('');
          }, 5000);
        }
      );
  };

  // function updateInquiry(e: React.FormEvent<HTMLOptionElement>) {
  //   setInquiryReason(e.currentTarget.value);
  // }

  return (
    <div className="vh-100">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <text>
          Let's get in touch! If you'd like to learn more about my experience,
          please feel free to check out my LinkedIn, GitHub, and Resume below:
        </text>
        <DetailButtons />
        <form onSubmit={sendEmail} className="">
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Name*"
            required
          />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Email*"
            required
          />
          {/* TODO: Continue implementation of this functionality: */}
          {/* <label>Reason for inquiry:</label>
          <select required>
            <option value="github" onChange={updateInquiry}>
              GitHub Project Access Request
            </option>
            <option value="networking" onChange={updateInquiry}>
              Networking
            </option>
            <option value="personal" onChange={updateInquiry}>
              Personal
            </option>
            <option value="other" onChange={updateInquiry}>
              Other
            </option>
          </select> */}
          <input
            type="text"
            name="title"
            className="title"
            placeholder="Subject"
          />
          <textarea
            name="message"
            className="message"
            placeholder="Message*"
            required
          />
          <input type="submit" value="Send" disabled={isSubmitting} />
          {stateMessage && <p>{stateMessage}</p>}
        </form>
      </div>
    </div>
  );
}
