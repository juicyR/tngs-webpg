//Necessary vars to start with
let image = document.querySelectorAll('img');
let time1 = 3000;
let time2 = 6000;
let i;
let image1;
//Displaying all images block
for (i = 0; i < image.length; i++) {
    function displayBlock() {
        image[i].style.display = 'block';
        setInterval(displayBlock(), time1);
    }
    //Looping through the images being displayed.
         for (image1 = 0; image1 < image.length; image1++) {
            function imageChange() {
                image[i - image1].style.display = 'none';
                setInterval(imageChange, time2);
                
            }
            //  setInterval(function imageChange() {
            //  image[i - image1].style.display = 'none';
            //  }, time);
            
         }
}
//Image freeze on hover
image.addEventListener("click", stopFunction);

function stopFunction() {
    clearInterval(myTimer);
}
//Navigation bar for images

//Images nav on click

//Displaying clicked image
