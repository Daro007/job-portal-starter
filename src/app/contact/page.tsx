import Contact from "./contact"


interface Settings {
  w3ckey: string;
  email: string;
  phone: string;
}


export default function ContactPage() {

  const Settings: Settings = {
    w3ckey: "SOME_KEY",
    email: "contact@sad.com",
    phone: "+34777685885"
  }
  return (

    <Contact props={Settings} />

  )
}

// <main >
  //     <h2>Contact Us</h2>

  //     <p>If you have any questions, feedback, or partnership inquiries, we would love to hear from you. Feel free to reach out to our team at:</p>

  //     <p>Email: [email protected]</p>
  //     <p>Phone: +1-XXX-XXX-XXXX</p>

  //     <p>Thank you for choosing Your Job on IT. We are committed to making the IT job search process seamless and efficient, reducing friction for both recruiters and candidates. Join us today and discover the possibilities that await you!</p>
  //   </main>