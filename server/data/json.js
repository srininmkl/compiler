module.exports = {
   formid: 'form1',
   formTitile:'Make Payment',
   values: [{
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
      }},
      {
      element: 'input',
      id: "_card_number",
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
         errorMsg: '%name% should not exceed more than 2 characters'
      }, {
         name: "minLength",
         value: "16",
         errorMsg: '%name% should not exceed more than 2 characters'
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
      id: "_month",
      placeholder: 'Month',
      name: 'Month',
      value: '11',
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
            errorMsg: '%name% should not exceed more than 31'
         }, {
            name: "min",
            value: "1",
            errorMsg: '%name% should not exceed less than 1'
         }, {
            name: "maxLength",
            value: "2",
            errorMsg: '%name% should not exceed more than 2 characters'
         }, {
            name: "minLength",
            value: "2",
            errorMsg: '%name% should not exceed more than 2 characters'
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
      id: "_year",
      placeholder: 'Year',
      name: 'Year',
      value: '1992',
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
         errorMsg: '%name% should not exceed more than 2 characters'
      }, {
         name: "minLength",
         value: "4",
         errorMsg: '%name% should not exceed more than 2 characters'
      }, {
         name: "max",
         value: "2050",
         errorMsg: '%name% should not exceed more than 2 characters'
      }, {
         name: "min",
         value: "(new Date()).getFullYear()",
         isExpression: true,
         errorMsg: '%name% should not exceed more than %value% characters'
      }],
      condtions: []
   }, {
      element: 'input',
      id: "_card_cvv",
      type: 'text',
      placeholder: 'CVV',
      name: 'CVV',
      value: '',
      validation: [ {
         name: "number",
         value: "",
         errorMsg: '%name% should contain only numbers'
      },{
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
   },{
      element: 'input',
      id: "_card_name",
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
         value: "10",
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
      id: "_card_name",
      type: 'submit',
      placeholder: 'Card Holder Name',
      name: 'Card Holder Name',
      value: '',
      validation: [{
         name: "maxLength",
         value: "16",
         errorMsg: '%name% should not exceed more than 16 characters'
      }, {
         name: "minLength",
         value: "10",
         errorMsg: '%name% should not less than 3 characters'
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
         "outline":"none",
         "display": "block",
         "background":"#bb0826",
         "margin": "4vh 3vw 4vh 0",
         "cursor":"pointer"
      }
   }]
}