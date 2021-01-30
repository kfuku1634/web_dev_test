let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hoge1.jpg') {
      myImage.setAttribute ('src','images/hoge2.jpg');
    } else {
      myImage.setAttribute ('src','images/hoge1.jpg');
    }
}
