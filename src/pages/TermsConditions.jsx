import LegalPage from '../components/LegalPage'
import { site } from '../data/site'

export default function TermsConditions() {
  return (
    <LegalPage title="Terms & Conditions" effectiveDate="January 19, 2025" updatedDate="July 9, 2026">
      <p>Welcome to {site.name}. By accessing this website or using our services, you agree to these Terms and Conditions. If you do not agree, please do not use our website or services.</p>
      <h2>1. Business Identity</h2>
      <p>These terms govern your use of services provided by {site.name}, located at {site.addressFull}. Contact us at <a href={site.phoneHref}>{site.phoneDisplay}</a> or <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <h2>2. Age Requirement (18+)</h2>
      <p>By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years old. Our SMS program is not directed to anyone under 18.</p>
      <h2>3. Terminology</h2>
      <p>&ldquo;Client,&rdquo; &ldquo;You,&rdquo; and &ldquo;Your&rdquo; refer to the website user. &ldquo;The Company,&rdquo; &ldquo;We,&rdquo; &ldquo;Our,&rdquo; and &ldquo;Us&rdquo; refer to {site.name}.</p>
      <h2>4. SMS Messaging Terms of Service</h2>
      <h3>4a. Program Description &amp; Message Types</h3>
      <p>By providing your phone number and checking the SMS consent checkbox, you agree to receive recurring automated messages from {site.name}, including:</p>
      <ul><li>Free estimate confirmations and scheduling notifications</li><li>Appointment reminders and service status updates</li><li>Customer support and service follow-ups</li><li>Promotional offers and seasonal lawn-care announcements</li></ul>
      <h3>4b. Message Frequency</h3><p>Message frequency varies. You may receive up to 4–8 messages per month, with frequency increasing during active service periods.</p>
      <h3>4c. Message &amp; Data Rates</h3><p>Message and data rates may apply according to your carrier and plan. {site.name} is not responsible for carrier charges.</p>
      <h3>4d. How to Opt Out (STOP)</h3><p>Reply STOP at any time. You will receive a one-time confirmation and no further messages unless you re-enroll.</p>
      <h3>4e. How to Get Help (HELP)</h3><p>Reply HELP, call <a href={site.phoneHref}>{site.phoneDisplay}</a>, or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <h3>4f. Carrier Liability Disclaimer</h3><p>Mobile carriers are not liable for delayed or undelivered messages. Delivery is subject to carrier capability and coverage, and {site.name} cannot guarantee delivery.</p>
      <h3>4g. Supported Carriers</h3><p>Our SMS program supports major U.S. wireless carriers, including AT&amp;T, Verizon, and T-Mobile. Not all carriers support every message type.</p>
      <h2>5. Cookies</h2><p>We use cookies in accordance with our <a href="/privacy-policy">Privacy Policy</a> to improve user experience and website functionality.</p>
      <h2>6. Intellectual Property &amp; License</h2><p>Unless otherwise stated, {site.name} owns the intellectual property rights for website content. You may not copy, reproduce, republish, sell, or redistribute it without written permission.</p>
      <h2>7. Comments &amp; User Content</h2><p>We may monitor and remove comments or user-generated content that is inappropriate, offensive, or violates these terms.</p>
      <h2>8. Content Liability</h2><p>We are not responsible for content on external websites linking to us. You agree to defend and protect {site.name} against claims arising from your website or digital properties.</p>
      <h2>9. Disclaimer</h2><p>To the maximum extent permitted by law, {site.name} excludes warranties, representations, and conditions relating to our website and services. We are not liable for losses arising from use of our website or services, including loss of business, profits, or revenue.</p>
      <h2>10. Changes to These Terms</h2><p>We may update these terms at any time. Changes will appear here with a revised Last Updated date. Continued use of our website or services constitutes acceptance.</p>
      <h2>11. Contact Information</h2><p><strong>Company:</strong> {site.name}<br /><strong>Address:</strong> {site.addressFull}<br /><strong>Phone:</strong> <a href={site.phoneHref}>{site.phoneDisplay}</a><br /><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
    </LegalPage>
  )
}
