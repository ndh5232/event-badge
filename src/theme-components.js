import { LitElement, html, css } from 'lit';
import "./tv-theme-component.js";
export class themeComponents extends LitElement{
    static get tag() {
        return 'theme-components';
    }
    static get properties() {
        return{
          types: { type: Array},
        
          tvColor: { type: String},
          tvIntenna: {type: String},
          badgeBorder: { type: String},
          textColor: { type: String},
          tvOutline: { type: String},
          cardColor: { type: String},

          topblock1: { type: String},
          topblock2: { type: String},
          topblock3: { type: String},
          topblock4: { type: String},
          topblock5: { type: String},
          topblock6: { type: String},
          topblock7: { type: String},

          bottomBlock1: { type: String},
          bottomBlock3: { type: String},
          bottomBlock5: { type: String},
          bottomBlock7: { type: String},

          badgeTitleColor: { type: String},
          eventBadgeTitle: { type: String},
          eventBadgeAuthor: { type: String},
          titleOfAuthor: { type: String},
          brandName: { type: String},
          image: { type: String},
          logo: { type: String},          
          
        }
    }

    constructor(){
          super();
          this.types = [];
          this.tvColor = 'forestgreen';
          this.tvIntenna = 'darkblue';
          this.badgeBorder = 'mediumseagreen';
          this.textColor = 'white';
          this.tvOutline = 'dodgerblue';
          this.cardColor = 'darkgreen';

          this.topblock1 = 'forestgreen';
          this.topblock2 = 'dodgerblue';
          this.topblock3 = 'forestgreen';
          this.topblock4 = 'dodgerblue';
          this.topblock5 = 'forestgreen';
          this.topblock6 = 'dodgerblue';
          this.topblock7 = 'forestgreen';

          this.bottomBlock1 = 'mediumseagreen';
          this.bottomBlock3 = 'mediumseagreen';
          this.bottomBlock5 = 'mediumseagreen';
          this.bottomBlock7 = 'mediumseagreen';

          this.badgeTitleColor = 'white';
      
          this.eventBadgeTitle='Welcome to my top albums!';
          this.eventBadgeAuthor='Nick Huynh';
          this.titleOfAuthor='All 10s!';
          this.brandName='Enjoy!'
          this.image= 'https://i0.wp.com/kjhk.org/web/wp-content/uploads/2020/02/top-50-aotd.png?resize=914%2C458&ssl=1';
          this.updateType();
    }


    static get styles() {
        return css`
      :host([sepia]){
      filter: sepia(1);
    }
      :host([grayscale]){
      filter: grayscale(1);
    }
      .logo{
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 0px;
        right: 0px;
        z-index: 2;
      }

      .wrapper {
        width: 340px;
        height: 258px;
        position: relative;
      }
      .item {
        display: inline-flex;
      }
      :host {
            display: block;
        }
      
        `;
    }

    updateType() { 
     const address = new URL('../assets/type.json', import.meta.url).href;
     fetch (address).then((response) => { 
      if (response.ok){
            return response.json()
      }
      return [];
       })
       .then((data) => {
              this.types = data;
              console.log(data);
          });

            

     }

    render(){
      return html`
      <div class="wrapper">
      ${this.types.map(type => html`
      <div class="item"> 
      <tv-main
      tvColor="${type.tvColor}"
      tvIntenna="${type.tvIntenna}"
      badgeBorder="${type.badgeBorder}"
      textColor="${type.textColor}"
      tvOutline="${type.tvOutline}"
      cardColor="${type.cardColor}"
      topblock1="${type.topblock1}"
      topblock2="${type.topblock2}"
      topblock3="${type.topblock3}"
      topblock4="${type.topblock4}"
      topblock5="${type.topblock5}"
      topblock6="${type.topblock6}"
      topblock7="${type.topblock7}"
      bottomBlock1="${type.bottomBlock1}"
      bottomBlock3="${type.bottomBlock3}"
      bottomBlock5="${type.bottomBlock5}"
      bottomBlock7="${type.bottomBlock7}"
      badgeTitleColor="${type.badgeTitleColor}"
      eventBadgeTitle="${type.eventBadgeTitle}"
      eventBadgeAuthor="${type.eventBadgeAuthor}"
      titleOfAuthor="${type.titleOfAuthor}"
      brandName="${type.brandName}"
      logo="${type.logo}"
      image="${type.image}"
      ></tv-main>
      </div>
      `)}
      </div>
      `;
    }
}
customElements.define(themeComponents.tag, themeComponents);