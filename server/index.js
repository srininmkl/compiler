const express = require('express'),
  app = express();
  var bodyParser  = require('body-parser');
const jsonData = require("./data/json");
const Element = require("./helper/element")
require('dotenv').config()
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended:false}));

var port = process.env.PORT;


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/form" , (req, res)=>{
  res.send("<body style='padding:0;margin:0;'>"
  +"<div style='text-align:center;height:100vh;width:100vw;padding:10vh 0;margin:0;'>"
  +"<iframe src='http://localhost:3000/render'></iframe>"
  +"</div>"
  +"</body>")
})


app.get("/render", (req, res)=>{
  let responseText = "";
  (jsonData.values).forEach(item => {
    let element = new Element();
    element.createElement(item.element, item.validation);
    if(item.element === "input"){
    element.appendAttribute("id", jsonData.formid+item["id"], false);
    element.appendAttribute("type", item["type"], false);
    element.appendAttribute("placeholder", item["placeholder"], false);
    (item.validation).forEach(validation =>{
      console.log(validation.name, validation.value)
      element.appendAttribute(validation.name, validation.value, validation.isExpression);
    });
  }
    let style= item.style;
    element.createStyle();
    Object.keys(style).forEach(key=>{
      element.appendStyle(key, style[key]);
    })
    element.closeStyle();
    if(item.element === "h2"){
      element.addContent(item.value, item.element);
    }else{
      element.closeElement(item.element);
    }
  
    responseText+= (element.value);
    
  });
  console.log(responseText)
  res.send("<html><header></header><body>"+responseText+"<script>function onchanges(e){console.log(e.style.border='1px solid red')}</script></body></html>")
}
)

// catching unhandles exception to stop app from crashing
process.on('uncaughtException', (err) => {
  console.log(JSON.stringify(err))
});

// start the server on port
app.listen(port, () => {
  console.log(' Generator UI server is running on port: ', port);
});

