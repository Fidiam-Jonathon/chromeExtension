
    var size = chrome.storage.local.get('fontSize', (size)=>{
         console.log(size);

    var p   = document.getElementsByTagName("p");
    var div = document.getElementsByTagName('div');
    
    console.log("all <p> in page: ", p);

    console.log("font size from LS: ", size.fontSize.toString() + 'px');
    
    for (var i = 0; i < p.length; i++){
      p[i].style.fontSize = size.fontSize.toString() + "px";
    }
    for (var i = 0; i < div.length; i++){
      div[i].style.fontSize = size.fontSize.toString() + "px";
    }
}
);
 
