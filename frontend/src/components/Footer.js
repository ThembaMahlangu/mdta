import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>M.D.T.A</h1>
            <p>Dedicated To Serving Our Community Transport Needs</p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>

            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>

            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>

            <a href="/">
              <i className="fa-brands fa-youtube-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Get in touch</h4>
            <a>Email: info@mdta.co.za</a>
            <a>Tel: 013 243 3939</a>
            <a>WhatsApp: 076 936 0246</a>
          </div>

          {/* <div>
            <h4>Business Solutions</h4>
            <a href="/suggestions">Suggest Feature</a>
            <a href="/partnerregister">Partner Registration</a>
            <a href="/contact">Partner Support</a>
            <a href="/sponsors">Sponsor Us</a>
          </div> */}

          <div>
            <h4>Important Links</h4>
            <a href="/">Office Structure</a>
            <a href="/">Emergencies</a>
            <a href="/">Sponsors</a>
            <a href="/">Staff Transport Booking</a>
          </div>

          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/contact">Contact Us</a>
            <a href="/bookingform">Booking Page</a>
          </div>

          <div>
            <h4>Others</h4>
            <a href="/addp">Terms of service</a>
            <a href="/admindashboard">Privacy Policy</a>
            <a href="/partnerdashboard">License</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-content">2023 Copyright | M.D.T.A</p>
        <a href='https://edulinkage.co.za'> Designed by T. Mahlangu</a>
      </div>
    </>
  );
};

export default Footer;