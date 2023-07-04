import Contact from "./contact"

export default function ContactPage() {

  const props = {
    w3ckey: "SOME_KEY",
    email: "contact@sad.com",
    phone: "+34777685885"
  }
  return (
    <Contact w3ckey={props.w3ckey} email={props.email} phone={props.phone} />
  )
}

// <main >
  //     <h2>Contact Us</h2>

  //     <p>If you have any questions, feedback, or partnership inquiries, we would love to hear from you. Feel free to reach out to our team at:</p>

  //     <p>Email: [email protected]</p>
  //     <p>Phone: +1-XXX-XXX-XXXX</p>

  //     <p>Thank you for choosing Your Job on IT. We are committed to making the IT job search process seamless and efficient, reducing friction for both recruiters and candidates. Join us today and discover the possibilities that await you!</p>
  //   </main>