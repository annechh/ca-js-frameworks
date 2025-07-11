/**
 * @file ContactPage renders the "Contact Us" section with a heading and the ContactForm component.
 * This page is meant to provide users with a form to get in touch.
 */

import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="w-full max-w-2xl">
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6 mt-5">
        Contact Us
      </h1>
      <hr />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
