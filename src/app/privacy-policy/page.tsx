import styles from './page.module.css'

export default function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <div className={styles.privacyPolicy}>
        <h1>Privacy Policy</h1>
        {/* <p>Last updated: [Date]</p> */}
        <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website. Please read this policy carefully to understand our practices regarding your personal information and how we will treat it.</p>

        <br />
        <h2>Information We Collect</h2>

        <p>We may collect certain personal information from you when you voluntarily provide it to us, such as when you fill out a contact form, subscribe to our newsletter, or make a purchase. The types of personal information we may collect include:</p>

        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Mailing address</li>
          <li>Phone number</li>
          <li>Payment information</li>
        </ul>

        <br />
        <h2>How We Use Your Information</h2>

        <p>We may use the personal information we collect from you for various purposes, including:</p>

        <ul>
          <li>To provide and maintain our website</li>
          <li>To personalize your experience on our website</li>
          <li>To respond to your inquiries, comments, or questions</li>
          <li>To send you marketing or promotional materials</li>
          <li>To process transactions and fulfill orders</li>
          <li>To improve our website and services</li>
          <li>To comply with applicable laws and regulations</li>
        </ul>

        <br />
        <h2>How We Share Your Information</h2>

        <p>We may disclose your personal information to third parties in the following circumstances:</p>

        <ul>
          <li>With your consent</li>
          <li>To service providers who assist us in operating our website and conducting our business</li>
          <li>To comply with legal obligations or protect against potential legal liability</li>
          <li>In connection with a merger, acquisition, or sale of our business or assets</li>
        </ul>

        <br />
        <h2>Cookies and Other Tracking Technologies</h2>

        <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our website. You can learn more about the use of cookies and how to manage them in our Cookie Policy [insert link to your Cookie Policy].</p>
        <br />
        <h2>Data Security</h2>

        <p>We strive to implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        <br />
        <h2>Your Choices</h2>

        <p>You have the right to access, correct, or delete your personal information that we hold. If you would like to exercise any of these rights or have any questions or concerns about our privacy practices, please contact us using the information provided below.</p>
        <br />
        <h2>Updates to this Policy</h2>

        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We encourage you to review this policy periodically for any updates.</p>
        <br />
        <h2>Contact Us</h2>

        <p>If you have any questions or concerns about our Privacy Policy</p>
      </div>
    </main>
  )
}
