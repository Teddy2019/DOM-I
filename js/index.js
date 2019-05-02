const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const aTage = document.getElementsByTagName('a');
const navContents = siteContent.nav;
aTage[0].textContent = navContents["nav-item-1"];
aTage[1].textContent = navContents["nav-item-2"];
aTage[2].textContent = navContents["nav-item-3"];
aTage[3].textContent = navContents["nav-item-4"];
aTage[4].textContent = navContents["nav-item-5"];
aTage[5].textContent = navContents["nav-item-6"];

const topSectionH1 = document.querySelector('h1');
const h1Content = siteContent["cta"]["h1"];
const h1st = document.createElement('h1');
const br1 = document.createElement('br');
const h2nd = document.createElement('h1');
const br2 = document.createElement('br');
const h3rd = document.createElement('h1');
topSectionH1.appendChild(h1st);
topSectionH1.appendChild(br1);
topSectionH1.appendChild(h2nd);
topSectionH1.appendChild(br2);
topSectionH1.appendChild(h3rd);
h1st.textContent = h1Content.substring(0,3);
h2nd.textContent = h1Content.substring(3,6);
h3rd.textContent = h1Content.substring(6);
h1st.style.height = '5px';
h2nd.style.height = '5px';
h3rd.style.height = '5px';

const butt = document.querySelector('button');
butt.textContent = siteContent["cta"]["button"];
butt.style.marginTop = '80px';

const catImg = document.getElementById("cta-img");
catImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const h4Content = document.getElementsByTagName("h4");
h4Content[0].textContent = siteContent["main-content"]["features-h4"];
h4Content[1].textContent = siteContent["main-content"]["about-h4"];
h4Content[2].textContent = siteContent["main-content"]["services-h4"];
h4Content[3].textContent = siteContent["main-content"]["product-h4"];
h4Content[4].textContent = siteContent["main-content"]["vision-h4"];
h4Content[5].textContent = siteContent["contact"]["contact-h4"];

const pContents = document.getElementsByTagName('p');
pContents[0].textContent = siteContent["main-content"]["features-content"];
pContents[1].textContent = siteContent["main-content"]["about-content"];
pContents[2].textContent = siteContent["main-content"]["services-content"];
pContents[3].textContent = siteContent["main-content"]["product-content"];
pContents[4].textContent = siteContent["main-content"]["vision-content"];
pContents[5].textContent = siteContent["contact"]["address"];
pContents[6].textContent = siteContent["contact"]["phone"];
pContents[7].textContent = siteContent["contact"]["email"];
pContents[8].textContent = siteContent["footer"]["copyright"];

const navColor = document.querySelectorAll('a');
navColor.forEach(function(element){element.style.color = 'green'});

const navAdd = document.querySelector('nav');
const moreNav1 = document.createElement('a');
const moreNav2 = document.createElement('a');
navAdd.appendChild(moreNav1);
navAdd.prepend(moreNav2);
moreNav1.textContent = 'SignIn';
moreNav2.textContent = 'Home';
moreNav1.style.color = 'green';
moreNav2.style.color = 'green';
moreNav1.setAttribute('href','#');
moreNav2.setAttribute('href','#');


