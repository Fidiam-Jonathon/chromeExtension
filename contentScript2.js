
    var bgColor = chrome.storage.local.get('bgColor', (bgColor)=>{
         console.log(bgColor.bgColor);

    var p   = document.getElementsByTagName("p");
    var div = document.getElementsByTagName('div');
    var h1 = document.getElementsByTagName('h1');
    var h2 = document.getElementsByTagName('h2');
    var h3 =  document.getElementsByTagName('h3');
    var link =  document.getElementsByTagName('a');

    console.log("font color from LS: ", bgColor);
    
    for (let i = 0; i < p.length; i++){
      p[i].style.backgroundColor = bgColor.bgColor;
    }
    for (let i = 0; i < div.length; i++){
      div[i].style.backgroundColor = bgColor.bgColor;
    }
     for (let i = 0; i < h1.length; i++){
      h1[i].style.backgroundColor = bgColor.bgColor;
    }
     for (let i = 0; i < h2.length; i++){
      h2[i].style.backgroundColor = bgColor.bgColor;
    }
     for (let i = 0; i < h3.length; i++){
      h3[i].style.backgroundColor = bgColor.bgColor;
    }
     for (let i = 0; i < link.length; i++){
      link[i].style.backgroundColor = bgColor.bgColor;
    }
}
);
 
