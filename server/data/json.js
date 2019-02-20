module.exports = [{
   formid: 'form1',
   formTitile: 'Make Payment',
   values: [
      {
         element: 'h2',
         id: "formTtile",
         type: 'text',
         value: 'Make Payment',
         name: 'Make Payment',
         style: {
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
         }
      },
      {
         element: 'input',
         id: "form1_card_number",
         type: 'text',
         placeholder: 'Enter Card Number',
         name: 'Card Number',
         value: '',
         validation: [{
            name: "number",
            value: "",
            errorMsg: '%name% should contain only numbers'
         }, {
            name: "maxLength",
            value: "18",
            errorMsg: '%name% should not exceed more than 16 characters'
         }, {
            name: "minLength",
            value: "16",
            errorMsg: '%name% should not less than 16 characters'
         }],
         condtions: [],
         style: {
            "border-radius": "2px",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "1px solid #fff",
            "display": "block",
            "width": "70%",
            "margin": "0 0 4vh 0"
         }
      }, {
         element: 'input',
         type: 'text',
         id: "form1_month",
         placeholder: 'Month',
         name: 'Month',
         value: '',
         style: {
            "width": "20%",
            "border-radius": "2px",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "1px solid #fff",
            "margin": "0 0 4vh 0"
         },
         validation: [
            {
               name: "number",
               value: "",
               errorMsg: '%name% should contain only numbers'
            },
            {
               name: "max",
               value: "12",
               errorMsg: '%name% should not exceed more than 12'
            }, {
               name: "min",
               value: "1",
               errorMsg: '%name% should not be less than 01'
            }, {
               name: "maxLength",
               value: "2",
               errorMsg: '%name% should not exceed more than 2 characters'
            }, {
               name: "minLength",
               value: "2",
               errorMsg: '%name% should not less than 2 characters'
            }],
         condtions: [{
            when: {
               name: 'Year',
               value: "(new Date()).getFullYear()",
               isExpression: true
            },
            then: {
               name: 'min',
               value: '(new Date()).getFullMonth()',
               isExpression: true
            }
         }]
      },
      {
         element: 'input',
         type: 'text',
         id: "form1_year",
         placeholder: 'Year',
         name: 'Year',
         value: '',
         style: {
            "width": "30%",
            "border-radius": "2px",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "1px solid #fff",
            "display": "inline-block",
            "margin": "0 0 4vh 10px"
         },
         validation: [{
            name: "number",
            value: "",
            errorMsg: '%name% should contain only numbers'
         }, {
            name: "maxLength",
            value: "4",
            errorMsg: '%name% should not exceed more than 4 characters'
         }, {
            name: "minLength",
            value: "4",
            errorMsg: '%name% should not less than 2 characters'
         }, {
            name: "max",
            value: "2050",
            errorMsg: '%name% should not exceed more than 2050'
         }, {
            name: "min",
            value: "(new Date()).getFullYear()",
            isExpression: true,
            errorMsg: '%name% should not exceed more than %value% characters'
         }],
         condtions: []
      }, {
         element: 'input',
         id: "form1_card_cvv",
         type: 'text',
         placeholder: 'CVV',
         name: 'CVV',
         value: '',
         validation: [{
            name: "number",
            value: "",
            errorMsg: '%name% should contain only numbers'
         }, {
            name: "maxLength",
            value: "3",
            errorMsg: '%name% should not exceed more than 3 characters'
         }, {
            name: "minLength",
            value: "3",
            errorMsg: '%name% should not less than 3 characters'
         }],
         condtions: [],
         style: {
            "width": "30%",
            "border-radius": "2px",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "1px solid #fff",
            "display": "inline-block",
            "margin": "0 0 4vh 10px"
         }
      }, {
         element: 'input',
         id: "form1_card_name",
         type: 'text',
         placeholder: 'Card Holder Name',
         name: 'Card Holder Name',
         value: '',
         validation: [{
            name: "maxLength",
            value: "16",
            errorMsg: '%name% should not exceed more than 16 characters'
         }, {
            name: "minLength",
            value: "3",
            errorMsg: '%name% should not less than 3 characters'
         }],
         condtions: [],
         style: {
            "width": "70%",
            "border-radius": "2px",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "1px solid #fff",
            "display": "inline-block",
            "margin": "0 0 4vh 0"
         }
      },
      {
         element: 'input',
         id: "form1_submit",
         type: 'submit',
         placeholder: 'Submit ',
         name: 'Submit ',
         value: 'PAY',
         validation: [],
         condtions: [],
         style: {
            "width": "30%",
            "border-radius": "2px",
            "box-sizing": "border-box",
            "color": "#FFFFFF",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "1px solid #fff",
            "outline": "none",
            "display": "block",
            "background": "#bb0826",
            "margin": "4vh 3vw 4vh 0",
            "cursor": "pointer"
         }
      }]
},{
   formid: 'form2',
   formTitile: 'Apply Credit Card',
   values: [
      {
         element: 'h2',
         id: "formTtile",
         type: 'text',
         value: 'Apply Credit Card',
         name: 'Apply Credit Card',
         style: {
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
         }
      },
      {
         element: 'input',
         id: "form2_first_name",
         type: 'text',
         placeholder: 'First Name',
         name: 'First Name',
         value: '',
         validation: [{
            name: "maxLength",
            value: "20",
            errorMsg: '%name% should not exceed more than 20 characters'
         }, {
            name: "minLength",
            value: "2",
            errorMsg: '%name% should not be less than 2 characters'
         }],
         condtions: [],
         style: {
            "width": "47%",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "none",
            "border-bottom":"2px solid #d6d6d6",
            "margin": "0 3% 4vh 0",
            "background":"transparent",
            "outline":"none",

         }
      }, {
         element: 'input',
         type: 'text',
         id: "form2_last_name",
         placeholder: 'Last Name',
         name: 'Last Name',
         value: '',
         style: {
            "width": "47%",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "none",
            "border-bottom":"2px solid #d6d6d6",
            "margin": "0 3% 4vh 0",
            "background":"transparent",
            "outline":"none"
         },
         validation: [
            {
               name: "maxLength",
               value: "20",
               errorMsg: '%name% should not exceed more than 20 characters'
            }, {
               name: "minLength",
               value: "2",
               errorMsg: '%name% should not be less than 2 characters'
            }],
         condtions: []
      },
      {
         element: 'input',
         type: 'text',
         id: "form2_address",
         placeholder: 'Enter your address',
         name: 'Enter your address',
         value: '',
         style: {
            "width": "47%",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "none",
            "border-bottom":"2px solid #d6d6d6",
            "margin": "0 3% 4vh 0",
            "background":"transparent",
            "outline":"none"
         },
         validation: [{
            name: "maxLength",
            value: "20",
            errorMsg: '%name% should not exceed more than 60 characters'
         }, {
            name: "minLength",
            value: "2",
            errorMsg: '%name% should not be less than 2 characters'
         }],
         condtions: []
      }, {
         element: 'input',
         id: "form2_phone_number",
         type: 'text',
         placeholder: 'Phone number',
         name: 'Phone number',
         value: '',
         validation: [{
            name: "number",
            value: "",
            errorMsg: '%name% should contain only numbers'
         }, {
            name: "maxLength",
            value: "10",
            errorMsg: '%name% should not exceed more than 10 characters'
         }, {
            name: "minLength",
            value: "10",
            errorMsg: '%name% should not less than 10 characters'
         }],
         condtions: [],
         style: {
            "width": "47%",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "none",
            "border-bottom":"2px solid #d6d6d6",
            "margin": "0 3% 4vh 0",
            "background":"transparent",
            "outline":"none"
         }
      }, {
         element: 'input',
         id: "form2_email",
         type: 'text',
         placeholder: 'Enter your email',
         name: 'Enter your email',
         value: '',
         validation: [{
            name: "maxLength",
            value: "20",
            errorMsg: '%name% should not exceed more than 20 characters'
         }, {
            name: "minLength",
            value: "2",
            errorMsg: '%name% should not less than 2 characters'
         }],
         condtions: [],
         style: {
            "width": "47%",
            "box-sizing": "border-box",
            "color": "#434343",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "none",
            "border-bottom":"2px solid #d6d6d6",
            "margin": "0 3% 4vh 0",
            "background":"transparent",
            "outline":"none"
         }
      },
      {
         element: 'input',
         id: "form2_submit",
         type: 'submit',
         placeholder: 'Submit ',
         name: 'Submit ',
         value: 'Submit Form',
         validation: [{
            name: "maxLength",
            value: "6",
            errorMsg: '%name% should not exceed more than 6 characters'
         }, {
            name: "minLength",
            value: "6",
            errorMsg: '%name% should not less than 6 characters'
         }],
         condtions: [],
         style: {
            "width": "30%",
            "border-radius": "2px",
            "box-sizing": "border-box",
            "color": "#FFFFFF",
            "font-family": "verdana",
            "font-size": "13px",
            "height": "35px",
            "padding": "9px 10px",
            "border": "1px solid #fff",
            "outline": "none",
            "display": "block",
            "background": "#bb0826",
            "margin": "4vh 3vw 4vh 0",
            "cursor": "pointer"
         }
      }]
}]