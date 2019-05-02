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

const butt = document.querySelector('button');
butt.textContent = siteContent["cta"]["button"];

const catImg = document.getElementById("cta-img");
catImg.setAttribute('src', siteContent["cta"]["img-src"]);
console.log(catImg);