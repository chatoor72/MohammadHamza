import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  // Log the postUrl and environment variables for debugging
  if (!process.env.REACT_APP_MAILCHIMP_URL || !process.env.REACT_APP_MAILCHIMP_U || !process.env.REACT_APP_MAILCHIMP_ID) {
    console.error("Mailchimp environment variables are missing or incorrect.");
    console.error("REACT_APP_MAILCHIMP_URL:", process.env.REACT_APP_MAILCHIMP_URL);
    console.error("REACT_APP_MAILCHIMP_U:", process.env.REACT_APP_MAILCHIMP_U);
    console.error("REACT_APP_MAILCHIMP_ID:", process.env.REACT_APP_MAILCHIMP_ID);
  } else {
    console.log("Mailchimp postUrl:", postUrl);
  }

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => {
          // Log the status and message for debugging
          console.log("Mailchimp status:", status);
          console.log("Mailchimp message:", message);

          return (
            <Newsletter
              status={status}
              message={message}
              onValidated={formData => {
                console.log("Form data submitted:", formData);
                subscribe(formData);
              }}
            />
          );
        }}
      />
    </>
  );
};
