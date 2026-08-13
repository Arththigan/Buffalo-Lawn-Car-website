import LegalPage from '../components/LegalPage'
import { site } from '../data/site'

const BulletList = ({ children }) => <ul>{children}</ul>

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="January 19, 2025" updatedDate="July 9, 2026">
      <p>
        {site.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with applicable U.S. data protection laws, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following information when you contact us, request a quote, submit a web form, or use our services:</p>
      <BulletList>
        <li>Full name</li><li>Mailing or service address</li><li>Email address</li><li>Mobile phone number</li><li>Service request details and property descriptions</li><li>Communication history and preferences</li>
      </BulletList>

      <h2>2. SMS / Text Message Communications</h2>
      <h3>2a. How We Collect Your Mobile Number</h3>
      <p>We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your number and checking the SMS consent checkbox, you expressly consent to receive text messages from {site.name}.</p>
      <h3>2b. Types of Messages We Send</h3>
      <BulletList>
        <li>Free estimate confirmations and appointment reminders</li><li>Service status updates and scheduling notifications</li><li>Customer support and follow-up communications</li><li>Promotional offers and seasonal lawn-care announcements</li>
      </BulletList>
      <h3>2c. Message Frequency</h3>
      <p>Message frequency varies based on your interactions, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month, with frequency increasing during active service periods.</p>
      <h3>2d. Message &amp; Data Rates</h3>
      <p>Message and data rates may apply. Charges are determined by your mobile carrier and service plan. {site.name} is not responsible for carrier charges.</p>
      <h3>2e. How to Opt Out (STOP)</h3>
      <p>You may cancel SMS messages at any time by replying STOP. You will receive one final confirmation and no further SMS messages unless you re-enroll.</p>
      <h3>2f. How to Get Help (HELP)</h3>
      <p>Reply HELP to any message, call <a href={site.phoneHref}>{site.phoneDisplay}</a>, or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>

      <h2>3. Mobile Information &amp; SMS Consent — No Third-Party Sharing</h2>
      <p>No mobile information, including phone numbers and SMS opt-in consent data, will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with third parties.</p>

      <h2>4. How We Use Your Information</h2>
      <BulletList>
        <li>Provide and manage lawn-care services</li><li>Respond to inquiries and service requests</li><li>Schedule appointments and send reminders</li><li>Send promotional communications with your consent</li><li>Improve our website and service quality</li><li>Comply with applicable laws and regulations</li>
      </BulletList>

      <h2>5. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information.</p>
      <h2>6. Data Security</h2>
      <p>We implement reasonable administrative, technical, and physical safeguards. However, no method of electronic transmission or storage is completely secure.</p>
      <h2>7. Data Retention</h2>
      <p>We retain personal information only as long as necessary for the purposes described here or as required by law, after which it is securely deleted or anonymized.</p>
      <h2>8. Your Privacy Rights</h2>
      <BulletList>
        <li><strong>Access:</strong> Request a copy of your personal data.</li><li><strong>Correction:</strong> Request correction of inaccurate data.</li><li><strong>Deletion:</strong> Request deletion of your data, including SMS consent records.</li><li><strong>Opt out of SMS:</strong> Reply STOP at any time.</li><li><strong>Opt out of marketing:</strong> Contact us to leave marketing lists.</li>
      </BulletList>
      <p>To exercise these rights, email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phoneDisplay}</a>.</p>
      <h2>9. Changes to This Privacy Policy</h2>
      <p>We may update this policy from time to time. Changes will appear here with a revised Last Updated date. Continued use of our website or services constitutes acceptance of the updated policy.</p>
      <h2>10. Contact Information</h2>
      <p><strong>Company:</strong> {site.name}<br /><strong>Address:</strong> {site.addressFull}<br /><strong>Phone:</strong> <a href={site.phoneHref}>{site.phoneDisplay}</a><br /><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
    </LegalPage>
  )
}
