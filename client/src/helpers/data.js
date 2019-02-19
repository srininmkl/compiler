export default {
   values: [{
      element:'input',
      type: 'number',
      name: 'Date',
      value: '11',
      validation: [{
         name: "max",
         value: "31",
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
      }
      ], condtions: [{
         key:"Month",
         value:2,
         validation:[{
            name: "max",
            value: "28",
            errorMsg: '%name% should not exceed more than 28'
         }]
      }]
   }]
}