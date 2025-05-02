function toggleCard(card) {
    const content = card.querySelector('.card-content');
    const icon = card.querySelector('.expand-icon');
    content.classList.toggle('active');
    icon.classList.toggle('active');
}

function toggleBibliography(event) {
    // Get the toggle element that was clicked
    const toggle = event.currentTarget;
    const bibliography = toggle.nextElementSibling;
    const arrow = toggle.querySelector('h4');
    bibliography.classList.toggle('active');
    arrow.textContent = arrow.textContent.includes('▼') ? 'Bibliography ▲' : 'Bibliography ▼';
    // Prevent the click event from bubbling up to the card
    event.stopPropagation();
}

// Add event listener to prevent card toggling when clicking on bibliography content
document.addEventListener('DOMContentLoaded', function() {
    const bibliographies = document.querySelectorAll('.bibliography');
    bibliographies.forEach(bib => {
        bib.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
}); 