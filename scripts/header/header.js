const header = document.getElementById("header")
header.innerHTML +=
    `
<div class="header">
    <img id="header-pic" src="assets/background.jpg" alt="header-image" />
    <div class="title-text-block">
        <h1 class="title">SuperOnigiri</h1>
    </div>
    <div class="self-intro-block">
        <div class="intro-text">
            <p>Hi, my name is Tuohuang.</p>
            <p id="my-info">I recently completed my master's degree in information technology at the University of Melbourne.
            I’m currently learning web programming
            Ask me anything you would like to ask
            Pronouns: They/She</p>
        </div>
    </div>
</div>
`
// load up external CSS file
var link = document.createElement('link');

// set properties of link tag
// the CSS path must be the relative path of the root directory
link.href = 'scripts/header/header.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.getElementById("header").appendChild(link);
