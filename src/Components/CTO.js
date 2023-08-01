import {react} from "react";

function CTO() {
  return (
    <div className="CTO">
      <div className="CTO-Wrapper">
        <div className="CTO-bio">
          <h2 className="CTO-Title">Send me a message!</h2>

          <p className="CTO-Para">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>

        <div className="Input-field">
          <form className='Email-form' action='mailto::Richardkelly1612@hotmail.com'>
          <div className="Input-form">
            <div className="Input-A">
            <span className='Input-label'>Your Name</span>
              <div className="Input-wrapper">
              
                <input
                  type="text"
                  id="user-name"
                  className="user-name"
                  placeholder="Enter your name"
                ></input>
              </div>
            </div>

            <div className="Input-A">
              <span className='Input-label'>Email Address</span>
              <div className="Input-wrapper">
              <input
                type="email"
                id="email-address"
                class="user-email"
                name="email-address"
                placeholder="Enter your email"
              ></input>
              </div>
            </div>
          </div>

          <div className="Input-form-A">
            <div className="Input-B">
              <span className='Input-label'>Your Message</span>
              <div className="Input-wrapper">
              <input
                type="text"
                id="user-message"
                class="user-message"
                name="user-message"
                placeholder="Hi, I need a new site!"
              ></input>
              </div>
            </div>
          </div>
          
          <div className='button-wrapper'>
          <submit className="button" type='submit' value='submit'>SUBMIT</submit>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CTO;
