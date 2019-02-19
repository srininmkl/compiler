class Element {
    constructor() {
        this.value = "";
    }
   
    appendAttribute(attr, value, isExpression) {
        this.value += (" ");
        this.value += (attr);
        this.value += ("=");
        this.value += ("'");
        if (isExpression)
            this.value += (eval(value));
        else
            this.value += (value);
        this.value += ("'");
    }
    createElement(name, validations) {
        if(name === "input"){
        this.value += ("<");
        this.value += (name);
        this.value += (" onchange='(function(e){ let value= e.value;let failed = false; " + this.createOnchange(validations) + " if(!failed){e.style.border = \"1px solid #ccc\"}}(this))'");
        }else if(name === "h2"){
            this.value += ("<");
            this.value += (name);
            this.value += (" ");
        }
    }
    addContent(value, name){
        this.value += (">");
        this.value += (value);
        this.value += ("</");
        this.value += (name);
        this.value += (">");
    }
    closeElement(name) {
        this.value += (">");
        this.value += ("</");
        this.value += (name);
        this.value += (">");
    }
    createOnchange(validations) {
        let innerFunc = "";
        (validations).forEach(validation => {
            switch (validation.name) {
                case "number":
                innerFunc += " let reg = new RegExp(\"^[0-9]+$\"); if(!reg.test(value)) {failed = true; e.style.border = \"1px solid red\"; return;}"
                    break;
                case "maxLength":
                innerFunc += " if(value.length > "+validation.value+"){ failed = true; e.style.border = \"1px solid red\"; return;}"
                    break;
                case "minLength":
                    innerFunc += " if(value.length < "+validation.value+"){failed = true; e.style.border = \"1px solid red\"; return;}"
                    break;
                case "min":

                    break;
                case "max":

                    break;

                default:
                    break;
            }

        })
        return innerFunc
    }

    createStyle() {
        this.value += ("style='");
    }
    appendStyle(key, value) {
        this.value += (key);
        this.value += (":");
        this.value += (value);
        this.value += (";");
    }
    closeStyle() {
        this.value += ("'");
    }
}

module.exports = Element;