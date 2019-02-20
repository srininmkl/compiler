const express = require('express'),
  app = express();
var bodyParser = require('body-parser');
const jsonData = require("./data/json");
const Element = require("./helper/element")
require('dotenv').config()

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));


var port = process.env.PORT;


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/form", (req, res) => {
  res.send("<body style='padding:0;margin:0;'>"
    + "<div style='text-align:center;height:100vh;width:100vw;padding:10vh 0;margin:0;'>"
    + "<iframe src='http://localhost:3000/render'></iframe>"
    + "</div>"
    + "</body>")
})


app.get("/render", (req, res) => {
  let id = req.query.id
  console.log(id)
  let responseText = "";

  (jsonData).forEach(formData => {
    if (formData.formid === id) {
      (formData.values).forEach((item) => {
        let element = new Element();
        element.createElement(item.element,item["type"], item.validation);
        if (item.element === "input") {
          element.appendAttribute("id", item["id"], false);
          element.appendAttribute("name", item["id"], false);
          element.appendAttribute("type", item["type"], false);
          element.appendAttribute("value", item["value"], false);
          element.appendAttribute("placeholder", item["placeholder"], false);
          (item.validation).forEach(validation => {
            element.appendAttribute(validation.name, validation.value, validation.isExpression);
          });
        }
        else if (item.element === "select") {
          element.appendAttribute("id", item["id"], false);
          element.addOptions(item.options, "CA");
          (item.validation).forEach(validation => {
            element.appendAttribute(validation.name, validation.value, validation.isExpression);
          });
        }
        let style = item.style;
        element.createStyle();
        Object.keys(style).forEach(key => {
          element.appendStyle(key, style[key]);
        })
        element.closeStyle();
        if (item.element === "h2") {
          element.addContent(item.value, item.element);
        } else {
          element.closeElement(item.element);
        }

        responseText += (element.value);
      })
    }
  })
  let dataServer = "<form method='post' id='" + id + "' action='http://127.0.0.1:3000/check'" +
    " onSubmit='return (function(){  var xhr = new XMLHttpRequest();" +
    "xhr.open(\"POST\", \"http://127.0.0.1:3000/check\"); " +
    "xhr.onload = function(event){if (xhr.status == 200) { console.log(xhr.responseText); document.getElementById(\"" + id + "_error_div\").innerHTML = xhr.responseText} " +
    "}; " +
    "var data={}; var formData = new FormData(document.getElementById(\"" + id + "\")); " +
    "for(let pair of formData.entries()){ console.log(pair[0]); data[pair[0]] = pair[1]}" +
    "xhr.setRequestHeader(\"Content-Type\", \"application/json\");" +
    "xhr.send(JSON.stringify(data));" +
    "console.log(formData); return false})()'><input type='hidden' id='formid' name='formid' value='" + id + "'/>" + responseText + " <br/><br/><div id=\"" + id + "_error_div\"  style=\"color:red\" > </div></form>"
  //console.log(responseText)
  res.send("<html><header></header><body>" + dataServer + "<script>function onchanges(){var xhr = new XMLHttpRequest(); xhr.open(\"POST\", \"http://127.0.0.1:3000/check\"); var formData = new FormData(document.getElementById(\"" + id + "\")); xhr.send({\"formData\":\"sadasd\"});  return false;}</script></body></html>")
}
)

app.post("/check", (req, res) => {
  
  let reqData = req.body
console.log(reqData)
  let errorArray = [];
  (jsonData).forEach(formData => {
    if (formData.formid === reqData.formid) {
      (formData.values).forEach((item) => {

        Object.keys(reqData).forEach(function (key) {
          //console.log(key, reqData[key]);
          if (item.id == key) {
            let value = reqData[key]
            let validations = item.validation;
            (validations).forEach(validation => {
              //console.log(validation)
              if (validation.name == "maxLength") {
                //console.log(validation.value)
                if(value.length > validation.value){
                  errorArray.push(validation.errorMsg.replace("%name%", item.name))
                  //console.log(validation.errorMsg.replace("%name%", item.name))
                }

              }if (validation.name == "minLength") {
                if(value.length < validation.value){
                  errorArray.push(validation.errorMsg.replace("%name%", item.name))
                  //console.log(validation.errorMsg.replace("%name%", item.name))
                }
              } if (validation.name == "number") {
                let reg = new RegExp("^[0-9]+$");
                 if(!reg.test(value)) {
                    errorArray.push(validation.errorMsg.replace("%name%", item.name))
                    //console.log(validation.errorMsg.replace("%name%", item.name))
                 }
              } if (validation.name == "max") {
                let reg = new RegExp("^[0-9]+$");
                if(reg.test(value) && value > validation.value) {
                  errorArray.push(validation.errorMsg.replace("%name%", item.name))
                  //console.log(validation.errorMsg.replace("%name%", item.name))
                }
              } else if (validation.name == "min") {
                let reg = new RegExp("^[0-9]+$");
                if(reg.test(value) && value < validation.value) {
                  errorArray.push(validation.errorMsg.replace("%name%", item.name))
                  //console.log(validation.errorMsg.replace("%name%", item.name))
                }
              }
            })
          }
        });
      })
    }
  })
  console.log(errorArray)
  if(errorArray.length !== 0){
    res.send(errorArray.join('<br/>'))
  }else{
    res.send("<p style=\"color:green;font-family:verdana;\">Successfully validated this form</p>")
  }
  
})

// catching unhandles exception to stop app from crashing
process.on('uncaughtException', (err) => {
  console.log(JSON.stringify(err))
});

// start the server on port
app.listen(port, () => {
  console.log(' Generator UI server is running on port: ', port);
});

