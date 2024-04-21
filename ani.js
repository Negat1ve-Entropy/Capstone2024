const icanseeyou = new IntersectionObserver((enteries) =>{
    enteries.forEach((entry) => {
        
        if (entry.isIntersecting){
            entry.target.classList.add("icanseeyou");
             
        }else{
            entry.target.classList.remove("icanseeyou");
        }
        

    });
});

const icannotseeyou = document.querySelectorAll('.icannotseeyou');
icannotseeyou.forEach((el) => icanseeyou.observe(el));


document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.querySelector('.bubbles');
  
    const bubbleDiameter = 30; // Diameter of each bubble
    const horizontalMargin = 4; // Horizontal margin between bubbles
    const screenWidth = window.innerWidth; // Width of the screen
    const numberOfBubbles = Math.floor(screenWidth / (bubbleDiameter + 2 * horizontalMargin)); // Calculate the number of bubbles that can fit

    const bubbleProperties = Array.from({ length: numberOfBubbles }, (_, i) => i + 1);

    for (let i = 0; i < numberOfBubbles; i++) {
        const bubble = document.createElement('span');
        bubble.classList.add('bubble');
        bubble.style.setProperty('--i', bubbleProperties[i % bubbleProperties.length]);
        bubblesContainer.appendChild(bubble);
    }
});

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
