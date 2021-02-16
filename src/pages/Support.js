import React from 'react';
import './Support.css'

function Support() {
  return (
   <section className="support">
    <div className="container">
      <div className="contactinfo">
        <div className="box">
          <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
          <div className="text">
            <h3>Adrress</h3><br/>
            <p>El Shatby,<br/> Alexandria  </p>
          </div>
        </div>
        <div className="box">
          <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
          <div className="text">
            <h3>phone</h3><br/>
            <p> +(20) 01157551041</p>
          </div>

        </div>
        <div className="box">
          <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
          <div className="text">
            <h3>Email</h3><br/>
            <p>facultyofscience@gmail.com</p>
          </div>

        </div>
      </div>
      <div className="contactform">
        <form>
          <h2>Send Message</h2>
          <div className="inputbox">
            <input type="text" name="" required="required"/>
            <span>Full name</span>
          </div>
          <div className="inputbox">
            <input type="text" name="" required="required"/>
            <span>Email</span>
          </div>
          <div className="inputbox">
            <textarea required="required"></textarea>
            <span>Type Your Message...</span>
          </div>
          <div className="inputbox">
            <input type="submit" name="" value="Send" />    					
          </div>
        </form>
      </div>

     </div>
    </section>
  );
}

export default Support;