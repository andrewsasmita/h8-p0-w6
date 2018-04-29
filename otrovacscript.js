var body = document.body;
var mainDiv = document.createElement('div');
var mainDivAttrId = document.createAttribute('id');

mainDivAttrId.value = "main";
mainDiv.setAttributeNode(mainDivAttrId);
body.appendChild(mainDiv);

var insideMainDiv = document.createElement('div');

mainDiv.appendChild(insideMainDiv);

var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Welcome to QUIZ !!!');
var h3 = document.createElement('h3');
var h3Text = document.createTextNode('Enter your Name Here')

h1.appendChild(h1Text);
insideMainDiv.appendChild(h1);
h3.appendChild(h3Text);
insideMainDiv.appendChild(h3);

var button = document.createElement('button');
var buttonText = document.createTextNode('Submit Player');

button.appendChild(buttonText);

button.addEventListener('click', function() {
    
    alert('Fill your Name !!!');

    var h4 = document.createElement('h4');
    var h4Text = document.createTextNode('What color banana is?')
    h4.appendChild(h4Text);
    insideMainDiv.appendChild(h4);

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('a. Yellow')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('b. Red')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);
    
    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('c. Pink')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);

    var h4 = document.createElement('h4');
    var h4Text = document.createTextNode('If Joko travel from Jakarta to Lombok at 8 PM, and it is a 2 hour flight long, when will he arrive?')
    h4.appendChild(h4Text);
    insideMainDiv.appendChild(h4);

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('a. 10PM')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('b. 11PM')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);
    
    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('c. 12PM')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);

    var h4 = document.createElement('h4');
    var h4Text = document.createTextNode('What is the difference between yellow and red watermelon?')
    h4.appendChild(h4Text);
    insideMainDiv.appendChild(h4);

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('Options : a. (1and3) b. (2and4) c. (only4) d. (all is correct)')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('1. color')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('2. taste')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);
    
    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('3. weight')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('4. texture')
    h5.appendChild(h5Text);
    insideMainDiv.appendChild(h5);
  });

insideMainDiv.appendChild(button);

