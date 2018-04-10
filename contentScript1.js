
    var newColor = chrome.storage.local.get('fontColor', (newColor)=>{
         console.log(newColor.fontColor);

    var p   = document.getElementsByTagName("p");
    var div = document.getElementsByTagName('div');
    var h1 = document.getElementsByTagName('h1');
    var h2 = document.getElementsByTagName('h2');
    var h3 =  document.getElementsByTagName('h3');
    var link =  document.getElementsByTagName('a');

    console.log("font color from LS: ", newColor);

    document.body.style.color = newColor.fontColor;
    
    for (let i = 0; i < p.length; i++){
      p[i].style.color = newColor.fontColor;
    }
    for (let i = 0; i < div.length; i++){
      div[i].style.color = newColor.fontColor;
    }
     for (let i = 0; i < h1.length; i++){
      h1[i].style.color = newColor.fontColor;
    }
     for (let i = 0; i < h2.length; i++){
      h2[i].style.color = newColor.fontColor;
    }
     for (let i = 0; i < h3.length; i++){
      h3[i].style.color = newColor.fontColor;
    }
     for (let i = 0; i < link.length; i++){
      link[i].style.color = newColor.fontColor;
    }
}
);
 
