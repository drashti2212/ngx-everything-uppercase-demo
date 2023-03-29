import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-everything-uppercase-demo';
  public data = {
    plans: [
      {
        type: 'recurring',//it could be (recurring|onetime)
        interval: 'EVERY_30_DAYS',//if type is recurring then it could be (monthly|annual)
        // id: 'premiumplan',
        id:'monthly',
        name: 'Monthly',
        price: 9.99,
        features: [
          {
            'text': 'Unlimited Slides',
            'icon': ''
          },
          {
            'text': 'Rotating Muti Bars',
            'icon': ''
          },
          {
            'text': '20+ Animation In & Out',
            'icon': ''
          },
          {
            'text': 'Priority Urgent Setup Support',
            'icon': ''
          },
          {
            'text': 'Live Chat support',
            'icon': ''
          },
        ],
        trial: {
          days: 7
        },
        discounts: [
          {
            name: 'Promotional',
            code: 'PROMO',
            type: 'percentage',// can be (amount|percentage)
            value: 10
          }
        ], 
        class: ['pp-mo'],
        styles: {
          primaryColor: '#5975F8',
          padding: ''
        },
        badge: {
          text: 'Popular'
        } 
      },
      {
        type: 'recurring',//it could be (recurring|onetime)
        interval: 'ANNUAL',//if type is recurring then it could be (monthly|annual)
        // id: 'premiumplan',
        id:'annual',
        name: 'Annual',
        price: 49.99,
        features: [
          {
            'text': 'Unlimited Slides',
            'icon': ''
          },
          {
            'text': 'Rotating Muti Bars',
            'icon': ''
          },
          {
            'text': '20+ Animation In & Out',
            'icon': ''
          },
          {
            'text': 'Priority Urgent Setup Support',
            'icon': ''
          },
          {
            'text': 'Live Chat support',
            'icon': ''
          },
        ],
        trial: {
          days: 7
        },
        discounts: [
          {
            name: 'Promotional',
            code: 'PROMO',
            type: 'percentage',// can be (amount|percentage)
            value: 10
          }
        ],
        class: ['pp-mo'],
        styles: {
          primaryColor: '#5975F8',
          padding: '',
          margin: '0px 10px'
        }
      }, 
      {
        type: 'onetime',//it could be (recurring|onetime)
        interval: '',//if type is recurring then it could be (monthly|annual)
        // id: 'premiumplan',
        id:'onetime',
        name: 'Life Time',
        price: 199.99,
        features: [
          {
            'text': 'Unlimited Slides',
            'icon': ''
          },
          {
            'text': 'Rotating Muti Bars',
            'icon': ''
          },
          {
            'text': '20+ Animation In & Out',
            'icon': ''
          },
          {
            'text': 'Priority Urgent Setup Support',
            'icon': ''
          },
          {
            'text': 'Live Chat support',
            'icon': ''
          },
        ],
        trial: {
          days: 7
        },
        discounts: [
          {
            name: 'Promotional',
            code: 'PROMO',
            type: 'amount',// can be (amount|percentage)
            value: 50
          }
        ],
        class: ['pp-mo'],
        styles: {
          primaryColor: '#9A5AB8',
          padding: '',
          margin: ''
        }
      }
    ],
    user: {
      planName:'Annual',
      // planName: 'Monthly',
      name:'drashti',
      trial: {
        days: 7
      },
    }
  }

  

  acceptPricing(value:any) {  
   
    console.warn("Active plan details",value) 
  } 
  


}
