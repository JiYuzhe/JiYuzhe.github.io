/*var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
/*这两句的意思：使用一个函数querySelector() 来获取标题这个对象并
将其储存在一个叫 myHeading 的变量中。这与我们 CSS 中的选择符非常相像。
如果你想对某个元素进行操作，首先你得先选择它。
在那之后，我们将 myHeading 的属性 innerHTML（标题的内容）赋予了“Hello world!”*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'image/crystal-palace-1792571_1280.jpg') {
      myImage.setAttribute ("src","image/Japan_Tokyo_Rivers_482826.jpg");
    } else {
      myImage.setAttribute ('src','image/crystal-palace-1792571_1280.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
