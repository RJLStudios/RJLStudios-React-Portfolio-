import { react } from "react";

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
          <form
            className="Email-form"
            action="mailto::Richardkelly1612@hotmail.com"
          >
            <div class="form-outline">
            <label class="form-label" for="formControlLg">
                Your Name
              </label>
              <input
                type="text"
                id="formControlLg"
                class="form-control form-control-lg"
              />
             
            </div>

            <div class="form-outline">
            <label class="form-label" for="formControlDefault">
                Email Address
              </label>
              <input type="text" id="formControlDefault" class="form-control" />
             
            </div>

            <div class="form-outline">
            <label class="form-label" for="textArea">
                Your Message
              </label>
              <textarea
                type="text"
                id="formControlSm"
                class="form-control form-control-sm"
                rows='4'
              />
            
            </div>

            <div className="button-wrapper">
              <submit className="button" type="submit" value="submit">
                SUBMIT
              </submit>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CTO;
