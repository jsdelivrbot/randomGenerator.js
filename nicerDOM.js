//addElement(<tag name>).innerText(<string>).before(<css selector>);

//example:

//addElement('li').innerText('amazing text').before('ul li#blah');
//addElement('li').innerText('amazing text').after('ul li#blah');
//addElement('li').innerText('amazing text').replaceWith('ul li#blah');

function addElement(type){

    if(!(typeof type === 'string')) return null;

    let element = document.createElement(type);

    return {
        innerText: innerText
    };

    function innerText(someText){

        if(!(typeof someText === 'string')) return null;

        let textElement = document.createTextNode(someText);
        element.appendChild(textElement);

        return {
            before: before,
            after: after,
            replaceWith: replaceWith
        };
    }

    function before(selector){
        let query = document.querySelector(selector);

        if(query != null)
             query.insertAdjacentHTML('beforebegin', element.outerHTML);

    }

    function after(selector){
        let query = document.querySelector(selector);

        if(query != null)
            query.insertAdjacentHTML('afterend', element.outerHTML);
    }

    function replaceWith(selector){
        let query = document.querySelector(selector);

        if(query != null)
            query.parentNode.replaceChild(element, query);

    }
}

//removeElement(<css selector>);

//example:
//removeElement('#myButton');

function removeElement(selector){

    if(!(typeof selector === 'string')) return null;

    let element = document.querySelector(selector);

    if(element != null)
        element.parentNode.removeChild(element);
}


//duplicateElement(<css selector>)

//example
//let newDuplicatedNode = duplicateElement('#some');

function duplicateElement(selector){

    let duplicated = document.querySelector(selector).cloneNode(true);
    return duplicated;
}


//contain function

//example:
//console.log(isThe('#head').containedInside('#divv'));

function isThe(selector){

    let innerElement = document.querySelector(selector);

    return {
        containedInside: containedInside
    };

    function containedInside(anotherSelecorString){

        let outerElement = document.querySelector(anotherSelecorString);

        return outerElement.contains(innerElement);
    }
}

//focus('#my_input')
function focus(selector){

    document.querySelector('#some_input_id').focus();
}

//isFocused('#my_input')
function isFocused(selector){

    return (document.querySelector(selector) === document.activeElement);
}

//getFocusedElement()
function getFocuesdElement(){

    return document.activeElement;
}

function getOffsetInfo(selector){

    let element = document.querySelector(selector);


    console.log("offet Left",element.offsetLeft);
    console.log("offset Top", element.offsetTop);
    console.log("Parent:", element.offsetParent);
}

function getAllPositionsInfo(selector){

    let element = document.querySelector(selector);
    let info = element.getBoundingClientRect();

    console.log("top", info.top);
    console.log("right", info.right);
    console.log("bottom", info.bottom);
    console.log("left", info.left);
}

function getWidth(selector){

    let element = document.querySelector(selector);
    let info = element.getBoundingClientRect();
    return info.width;
}

function getHeight(selector){

    let element = document.querySelector(selector);
    let info = element.getBoundingClientRect();
    return info.height;
}

function getWidthWithoutMargin(selector){

  let element = document.querySelector(selector);
  return element.clientWidth;
}

function getHeightWithoutMargin(selector){

  let element = document.querySelector(selector);
  return element.clientHeight;
}

function getElementAtPoint(x,y){
    return (document.elementFromPoint(x,y));
}

//how much tall is the scroll bar
function getScrollHeight(selector){
    
    let element = document.querySelector(selector);
    return element.scrollHeight;
}

function getScrollWidth(selector){
    
    let element = document.querySelector(selector);
    return element.scrollWidth;
}


//position of scrolling
//position of current scroll bar
function getScrollPositionFromTop(selector){
    
    let element = document.querySelector(selector);
    return element.scrollTop;
}

function getScrollPositionFromLeft(selector){
    
    let element = document.querySelector(selector);
    return element.scrollLeft;
}

function setScrollPositionFromTop(selector, newValue){
    
    let element = document.querySelector(selector);
    element.scrollTop = newValue;
}

function setScrollPositionFromLeft(selector, newValue){
    
    let element = document.querySelector(selector);
    element.scrollLeft = newValue;
}

function scrollInto(selector, childNumber){

    let element = document.querySelector(selector).children[childNumber];
    element.scrollIntoView(true);
}

function addInlineStyle(selector){

    if( !(typeof selector === "string") ) return null;

    let element = document.querySelector(selector);
    let style = element.style;

    return function (property){

        if( !(typeof property === "string") ) return null;
        
        return function (value){
    
            if( !(typeof value === "string") ) return null;
            style.setProperty(property, value);
        }
    }
}

function addInlineStyleString(selector){

    if( !(typeof selector === "string") ) return null;

    let element = document.querySelector(selector);
    let style = element.style;

    return function(cssString){
        style.cssText = cssString;
    }
}
function getInlineStyle(selector){

    if( !(typeof selector === "string") ) return null;
    
    let element = document.querySelector(selector);
    let style = element.style;

    return function(property){

        if( !(typeof property === "string") ) return null;        
        return style.getPropertyValue(property);
    }
}

function removeInlineStyle(selector){

    if( !(typeof selector === "string") ) return null;
       
    let element = document.querySelector(selector);
    let style = element.style;

    return function(property){
        style.removeProperty(property);
    }
}

function removeAllInlineStyle(selector){

    if( !(typeof selector === "string") ) return null;
       
    let element = document.querySelector(selector);
    element.removeAttribute("style");
}

function getStyleValue(selector){
    
    if( !(typeof selector === "string") ) return null;
       
    let element = document.querySelector(selector);
    let style = window.getComputedStyle(element);

    return function(property){

        if( !(typeof property === "string") ) return null;        
        return style[property];
    }
}

//to make a style by setting class or id
function setClass(selector){
   
    if( !(typeof selector === "string") ) return null;
    let element = document.querySelector(selector);

    return function(className){
        element.classList.add(className);
    }
}

function setId(selector){

    if( !(typeof selector === "string") ) return null;
    let element = document.querySelector(selector);
    
    return function(newId){
        element.setAttribute('id',newId);
    }
}

function appendText(selector){
    
    if( !(typeof selector === "string") ) return null;
    let element = document.querySelector(selector);
   
    if(element.firstChild == null)
        element .appendChild(document.createTextNode(''));

    let text = element.firstChild;

    return function(newText){
        text.appendData(newText);
    }

}

function removeText(selector){

    if( !(typeof selector === "string") ) return null;
    let element = document.querySelector(selector);
    let text = element.firstChild;

    element.removeChild(text);
}

function replaceText(selector){
    
    removeText(selector);
    return appendText(selector);
}


function printAllCSSRules(){

    let styleElement = document.querySelector('style');
    for(let k = 0; k < styleElement.sheet.cssRules.length; k++)
        console.log(styleElement.sheet.cssRules[k].cssText);


// //need a fix for external style sheet    
//     let linkElement = document.querySelectorAll('link');
//     linkElement.forEach(function(element) {
//         if(element.type == "text/css")
//             {
//                 console.log(element.sheet);
//             }
//     }, this);

}