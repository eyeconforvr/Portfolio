
// function for email send

function sendEmail()
{

    let params = 
    {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    // use EmailJS to send email using the predefined template and paramater values

    emailjs.send("service_qk25np8","template_gsz40ye",params).then(alert("Message sent successfully :)"))

}


document.addEventListener("DOMContentLoaded", function() 
{
    const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
    const pages = document.querySelectorAll('.book-page.page-right');
    const contactMeBtn = document.querySelector('.btn.contact-me');
    const backProfileBtn = document.querySelector('.back-profile');
    const text = document.querySelector('.titles');

    let currentPageIndex = 0;
    const totalPages = pages.length;

    // Function to go to the first page
    const goToFirstPage = () => {
        pages.forEach((page, index) => {
            page.classList.remove('turn');
            page.style.zIndex = 20 - index;
        });
        currentPageIndex = 0;
    };

    goToFirstPage();

    // turn page when next or prev button clicked
    pageTurnBtn.forEach((el, index) => {
        el.onclick = () => {
            const pageNumber = el.getAttribute('data-page');
            const page = document.getElementById(pageNumber);

            if (page.classList.contains('turn')) {
                page.classList.remove('turn');
                setTimeout(() => {
                    page.style.zIndex = 20 - index;
                }, 500);
            } else {
                page.classList.add('turn');
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500);
            }
        }
    });

    // contact me button onclick event
    contactMeBtn.onclick = () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500);
            }, (index + 1) * 200 + 100);
        });
    };

    // create reverse index function
    let pageNo = 0;

    function reverseIndex() {
        pageNo--;
        if (pageNo < 0) 
        {
            pageNo = totalPages - 1;
        }
    }

    // go back to home when profile is clicked
    
   if (backProfileBtn) {
    backProfileBtn.addEventListener('click', () => 
    {
        goToFirstPage();
    });
    }

    // opening book animation
    const coverRight = document.querySelector('.cover.cover-right');

    // opening animation (cover right animation)
    setTimeout(() => {
        coverRight.classList.add('turn');
    }, 2100);

    // animation for profile page header

    const textAnimation = () =>
    {
       setTimeout(()=>
        {
            text.textContent = "Software Engineer";
        },0);
        setTimeout(()=>
        {
            text.textContent = "Web Developer";
        },4000);
        setTimeout(()=>
        {
            text.textContent = "UI/UX Designer";
        },8000);
        setTimeout(()=>
        {
            text.textContent = "Database Developer";
        },12000);
        setTimeout(()=>
        {
            text.textContent = "Software Dev";
        },16000);

    }

    

    textAnimation();
    setInterval(textAnimation, 12000);
    
});
