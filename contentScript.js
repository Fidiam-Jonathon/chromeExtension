
    var size = chrome.storage.local.get('fontSize', (size)=>{
         console.log(size);

    var p   = document.getElementsByTagName("p");
    var div = document.getElementsByTagName('div');
    var h1 = document.getElementsByTagName('h1');
    var h2 = document.getElementsByTagName('h2');
    var h3 =  document.getElementsByTagName('h3');
    var link =  document.getElementsByTagName('a');
    
    console.log("all <p> in page: ", p);

    console.log("font size from LS: ", size.fontSize.toString() + 'px');
    
    for (let i = 0; i < p.length; i++){
      p[i].style.fontSize = size.fontSize.toString() + "px";
    }
    for (let i = 0; i < div.length; i++){
      div[i].style.fontSize = size.fontSize.toString() + "px";
    }
     for (let i = 0; i < h1.length; i++){
      h1[i].style.fontSize = size.fontSize.toString() + "px";
    }
     for (let i = 0; i < h2.length; i++){
      h2[i].style.fontSize = size.fontSize.toString() + "px";
    }
     for (let i = 0; i < h3.length; i++){
      h3[i].style.fontSize = size.fontSize.toString() + "px";
    }
     for (let i = 0; i < link.length; i++){
      link[i].style.fontSize = size.fontSize.toString() + "px";
    }

}
);
 
