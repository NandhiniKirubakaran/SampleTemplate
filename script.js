

window.onload = function() {
    var abouttext = document.getElementById('about-section');
    //console.log(abouttext);
    // var slider1 = document.getElementById('slider1');
    // var slider2 = document.getElementById('slider2');
    // var slider3 = document.getElementById('slider3');
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

fetch(`https://live2-3af8b-default-rtdb.asia-southeast1.firebasedatabase.app/websites/samplesite.json`)
.then((value)=>value.json())
.then((data)=>{
    abouttext.innerHTML=data.about_us;
    // slider1.src=data.slider1;
    //console.log(data)
    // slider2.src=data.slider2;
    // slider3.src=data.slider3;
    title.innerHTML=data.title;
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

})
}



