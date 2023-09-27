  window.addEventListener('scroll', function() {
    var aboutmeSection = document.querySelector('.blocks');
    var sectionPosition = aboutmeSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
    
    if (sectionPosition < screenPosition) {
      aboutmeSection.classList.add('show');
    }
  });


  window.addEventListener('scroll', function() {
    var aboutmeSection = document.querySelector('.about-paragraph');
    var sectionPosition = aboutmeSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
    
    if (sectionPosition < screenPosition) {
      aboutmeSection.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    var aboutmeSection = document.querySelector('.about-img');
    var sectionPosition = aboutmeSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
    
    if (sectionPosition < screenPosition) {
      aboutmeSection.classList.add('show');
    }
  });



// Add event listeners to each input and textarea to handle focus and blur events
const inputFields = document.querySelectorAll('input, textarea');
inputFields.forEach((field) => {
  field.addEventListener('focus', handleFocus);
  field.addEventListener('blur', handleBlur);
});

// Function to handle focus event
function handleFocus(event) {
  const label = event.target.parentElement.querySelector('label');
  label.style.color = '#c5ee28';
  label.style.fontSize = '14px';
  label.style.top = '0';
}

// Function to handle blur event
function handleBlur(event) {
  const label = event.target.parentElement.querySelector('label');
  if (event.target.value === '') {
    label.style.color = '#999';
    label.style.fontSize = '16px';
    label.style.top = '50%';
  }
}
