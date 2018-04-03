var size = chrome.storage.local.get('fontSize', (size) => {
    console.log("size: ", size);

    var p = document.getElementsByTagName("p");
    var div = document.getElementsByTagName('div');
    var h1 = document.getElementsByTagName('h1');
    var h2 = document.getElementsByTagName('h2');
    var h3 = document.getElementsByTagName('h3');
    var h4 = document.getElementsByTagName('h4');
    var h5 = document.getElementsByTagName('h5');
    var h6 = document.getElementsByTagName('h6');
    var link = document.getElementsByTagName('a');

    document.body.style.fontSize = size.fontSize.toString() + "px";

    for (let i = 0; i != p.length; i++) {

        p[i].style.fontSize = size.fontSize.toString() + "px";

    }


    for (let i = 0; i < div.length; i++) {

        div[i].style.fontSize = size.fontSize.toString() + "px";

    }


    for (let i = 0; i < h1.length; i++) {

        h1[i].style.fontSize = size.fontSize.toString() + "px";

    }



    for (let i = 0; i < h2.length; i++) {

        h2[i].style.fontSize = size.fontSize.toString() + "px";

    }


    for (let i = 0; i < h3.length; i++) {

        h3[i].style.fontSize = size.fontSize.toString() + "px";

    }


    for (let i = 0; i < h4.length; i++) {

        h4[i].style.fontSize = size.fontSize.toString() + "px";

    }


    for (let i = 0; i < h5.length; i++) {

        h5[i].style.fontSize = size.fontSize.toString() + "px";

    }

    for (let i = 0; i < h6.length; i++) {

        h6[i].style.fontSize = size.fontSize.toString() + "px";

    }

    for (let i = 0; i < link.length; i++) {

        link[i].style.fontSize = size.fontSize.toString() + "px";

    }


});