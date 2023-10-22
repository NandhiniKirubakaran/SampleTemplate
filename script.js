

window.onload = function() {
    var abouttext = document.getElementById('about-section');
    //console.log(abouttext);
    var slider1 = document.getElementById('slider1');
    var slider2 = document.getElementById('slider2');
    var slider3 = document.getElementById('slider3');
    var title = document.getElementById('title');
    var mail = document.getElementById('mail-id');
    var phone = document.getElementById('phone-num');
    var gallery1 = document.getElementById('gallery1');
    var gallery2 = document.getElementById('gallery2');
    var gallery3 = document.getElementById('gallery3');
    var gallery4 = document.getElementById('gallery4');
    var gallery5 = document.getElementById('gallery5');
    var gallery6 = document.getElementById('gallery6');
    var gallery7 = document.getElementById('gallery7');
    var gallery8 = document.getElementById('gallery8');
    var icon = document.getElementById('icon');
    var icon1 = document.getElementById('icon1');
    var icon2 = document.getElementById('icon2');
    var icon3 = document.getElementById('icon3');

    // Get the deployed URL
    const deployedURL = window.location.href;

    // Remove dots, extra spaces, and hostname from the URL
    const cleanedURL = deployedURL.replace(/[.\s]+/g, '').replace(/^https?:\/\//, '').split('/')[0];

    // Display only the website name (domain)
    // document.getElementById('result').textContent = cleanedURL;

fetch(`https://live2-3af8b-default-rtdb.asia-southeast1.firebasedatabase.app/websites/effervescent-snickerdoodle-fe8556netlifyapp.json`)
.then((value)=>value.json())
.then((data)=>{
    abouttext.innerHTML=data.about_us;
    slider1.src=data.slider1;
    //console.log(data)
    slider2.src=data.slider2;
    slider3.src=data.slider3;
    title.src=data.title;
    mail.innerHTML=data.mail_id;
    phone.innerHTML=data.phone;
    gallery1.src=data.gallery1;
    gallery2.src=data.gallery2;
    gallery3.src=data.gallery3;
    gallery4.src=data.gallery4;
    gallery5.src=data.gallery5;
    gallery6.src=data.gallery6;
    gallery7.src=data.gallery7;
    gallery8.src=data.gallery8;
    icon.className=data.icon;
    icon1.className=data.icon1;
    icon2.className=data.icon2;
    icon3.className=data.icon3;
})
}

// <---------------------------------------------------------------->
// function openImage() {
//   const imageContainer = document.querySelector(".image-container");
//   const overlay = document.getElementById("overlay");

//   overlay.style.display = "block";
//   imageContainer.style.zIndex = "999"; // Bring the image container to the front
// }

// function closeImage() {
//   const imageContainer = document.querySelector(".image-container");
//   const overlay = document.getElementById("overlay");

//   overlay.style.display = "none";
//   imageContainer.style.zIndex = "0"; // Send the image container back
// }


function expandImage(name) {
  const imageContainer = document.querySelector(".image-container");
  const expandedImageContainer = document.querySelector(".expanded-image-container");
  const expandedImage = document.getElementById('expanded-image');
  let newSrc = document.getElementById(name).src;
  expandedImage.src = newSrc;

  imageContainer.style.display = "none";
  expandedImageContainer.style.display = "flex";
}

function closeExpandedImage() {
  const imageContainer = document.querySelector(".image-container");
  const expandedImageContainer = document.querySelector(".expanded-image-container");

  imageContainer.style.display = "flex";
  expandedImageContainer.style.display = "none";
}

