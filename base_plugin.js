// create div element
var pluginDiv = document.createElement('div');

// Overlay example CSS
pluginDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';

// content of <div>CONTENT</div>
pluginDiv.innerHTML = 'Into the div';

// add div element to document->body
document.body.appendChild(pluginDiv);