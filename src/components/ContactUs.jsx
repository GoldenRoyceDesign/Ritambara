

const ContactUs = () => {
  return (
    <section className="contact-section position-relative text-white" id="contact">
      <div className="overlay"></div>
      <div className="container py-5 position-relative">
        <h1 className=" mb-5 fw-bold">Contact Us</h1>
        <div className="row g-4 align-items-stretch d-flex">
          {/* Left - Contact Form */}
          <div className="col-md-6 d-flex">
            <div className="bg-white text-dark rounded-3 p-4 shadow w-100">
              <form className="d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="mb-3">
                    <input type="text" className="form-control p-3" placeholder="Your Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control p-3" placeholder="Your Email" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control p-3" placeholder="Subject" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control p-3" rows="4" placeholder="Message" required></textarea>
                  </div>
                </div>
                <button type="submit" className="btn mt-2">Send Message</button>
              </form>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="col-md-6 rounded-3 shadow d-flex justify-content-center align-items-center">
              <div className="w-75">
                {/* <h2 className="fw-semibold mb-3">Get in Touch</h2> */}
                <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Email:</strong> info@ritambara.com</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
