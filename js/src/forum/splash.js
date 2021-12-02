import Component from 'flarum/common/Component';

export default class SiteSplash extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.message = "I am 21 years of age or older.";
    this.consent_message = "Yes"
    this.dismiss_message = "No"
  }

  view() {
    return (
        // from https://codepen.io/amirnaeem/pen/GZmXwr
    <article class="box">
        <div class="box-left">
            <img src="http://uiclients.com/thinc/assets/images/thinc-drop-white.svg" />
            <p>THINC Pure products are only for use in states where the sale and consumption of such products are legal. </p>
        </div>
        <div class="box-right">
            <h3>Age Verification</h3>
            <p>By clicking enter, I certify that I am over the age of 21 and will comply with the above statement.</p>
            
            <a href="#" class="btn btn-alpha"  id="refresh-page">ENTER</a>
            
            <p class="decor-line"><span>Or</span></p>
            
            <a href="#" class="btn btn-beta" id="reset-session">EXIT</a>
            
            <small>Always enjoy responsibily.</small>
        </div>
    </article>
  
   /*  <div class="overlay-verify"></div>

      <div>
        <p>{this.message}</p>
        <button onclick={e => this.message=thanks}>
          {this.attrs.consentMessage}
        </button>
      </div> */
    );
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    // We aren't actually doing anything here, but this would
    // be a good place to attach event handlers, initialize libraries
    // like sortable, or make other DOM modifications.
    $element = this.$();
    $button = this.$('button');
  }
}


//m.mount(document.body, <SiteSplash consentMessage="Increment" />);