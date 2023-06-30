import styles from './page.module.css'

export default function CookiePolicy() {
  return (
    <main className={styles.main}>
      <div className={styles.cookiePolicy}>
        <h1>Cookie Policy</h1>
        {/* <p>Last updated: [Date]</p> */}
        <p>This Cookie Policy explains how our website uses cookies and similar technologies to provide you with a better browsing experience and to analyze website traffic. By continuing to use our website, you agree to the use of cookies as described in this policy.</p>
        <br />

        <h2>What are cookies?</h2>
        <p>Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.</p>
        <br />

        <h2>How do we use cookies?</h2>
        <p>We use cookies for various purposes, including:</p>

        <ul>
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the functioning of our website. They enable you to navigate the site and use its features, such as accessing secure areas and making transactions.</li>
          <li><strong>Analytical Cookies:</strong> We use analytical cookies to collect information about how visitors use our website. This helps us understand and improve the website´s performance and usability. The data collected is anonymized and does not personally identify you.</li>
          <li><strong>Preference Cookies:</strong> Preference cookies allow our website to remember information that changes the way it behaves or looks, such as your preferred language or region. These cookies may also enable personalized features and content.</li>
          <li><strong>Advertising Cookies:</strong> Our website may use advertising cookies to deliver personalized advertisements that are relevant to your interests. These cookies track your browsing habits and enable us to show you targeted ads on our site or on third-party websites.</li>
        </ul>
        <br />

        <h2>Third-party cookies</h2>
        <p>We may also allow third-party cookies on our website, such as social media plugins and embedded content. These third parties may use cookies to collect information about your interactions with their services. We have no control over the use of such cookies and recommend reviewing the privacy policies of these third parties for more information.</p>
        <br />

        <h2>Managing cookies</h2>
        <p>You can control and manage cookies in your browser settings. You have the option to accept or reject cookies, as well as to delete cookies that have already been stored on your device. Please note that disabling or deleting cookies may affect the functionality and performance of our website.</p>
        <br />

        <h2>Updates to this policy</h2>
        <p>We may update this Cookie Policy from time to time to reflect changes in our use of cookies or legal requirements. We encourage you to review this page periodically for any updates.</p>
        <br />

        <h2>Contact us</h2>
        <p>If you have any questions or concerns about our use of cookies, please contact us at [contact information].</p>

      </div>
    </main>
  )
}
