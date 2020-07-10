import React from "react";

function Contact() {
  return (
    <div class="container m-5 bg-light">
      <div class="row">
        <div class="col-md-8">
          <form>
            <div class="contactinfo">
              <h2>Get in touch with Kate:</h2>
              <a href="https://github.com/kmeersman624">
                <i className="fab fa-github"></i> GitHub Profile
              </a>
              <br />
              <a href="https://www.linkedin.com/in/kate-meersman-2a66a2155/">
                <i className="fab fa-linkedin"></i> LinkedIn Profile
              </a>
              <br />
              <a href="./img/resume.pdf"><i class="fas fa-file-pdf"></i> Resume</a>
              <br />
              <a href="mailto:katie4682@yahoo.com"><i class="fas fa-envelope"></i> Email Me!</a>
 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;