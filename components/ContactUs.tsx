import { config, links } from '@/lib/config';

export default function ContactUs() {
  return (
    <section id="contact" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2></h2><h2 style={{ paddingTop: '20px' }}>Contact Us</h2>
        </div>

        <div className="row contact-info">

          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address style={{ fontSize: '75%' }} dangerouslySetInnerHTML={{ __html: config.contact_address }} />
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <center><a href={`tel:${config.contact_phone}`}>{config.contact_phone}</a></center>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <center><a href={`mailto:${config.contact_email}`}>{config.contact_email}</a></center>
            </div>
          </div>

        </div>
      </div>

      <center>
        <iframe
          src={links.google_map}
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: '0', width: '100%' }}
          allowFullScreen
        />
      </center>

      {/* 
      <div className="container">
        <div className="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>
          <form action="" method="post" role="form" className="contactForm">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validation"></div>
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validation"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div class="validation"></div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>
       */}
    </section>
  );
}
