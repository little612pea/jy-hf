document.addEventListener("DOMContentLoaded", function() {
  function typeWriter(element, text, speed, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i).replace('\n', '<br>'); // Replace newline with <br> for line breaks
        i++;
        setTimeout(type, speed);
      } else {
        console.log('Typing complete, pausing cursor animation for', element); // Debug output
        if (callback) callback();
      }
    }
    type();
  }

  const headerElement = document.querySelector('.hero_header');
  const taglineElement = document.querySelector('.tagline');

  const headerText = 'JY-HF Learning Site___';
  const headerHTML = 'JY-HF <span class="light">Learning Site___</span>';
  const taglineText = 'Share the knowledge to you and Us';
  const taglineHTML = 'Share the knowledge to you and <span class="blue">Us</span>';

  headerElement.textContent = '';
  taglineElement.textContent = '';

  typeWriter(headerElement, headerText, 300, () => {
    headerElement.innerHTML = headerHTML;
    headerElement.style.animationPlayState = 'paused'; // Pause the cursor animation
    headerElement.style.borderRightColor = 'transparent'; // Make the cursor transparent
    typeWriter(taglineElement, taglineText, 300, () => {
      taglineElement.innerHTML = taglineHTML;
      
    });
  });
});
