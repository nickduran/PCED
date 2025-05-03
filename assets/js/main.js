// Main JavaScript file for PCED Website

document.addEventListener('DOMContentLoaded', function() {
    // Setup mobile navigation toggle
    setupMobileNavToggle();
    
    // Add smooth scrolling to anchor links
    setupSmoothScrolling();
    
    // Add card hover effects for content blocks
    addCardEffects();
  });
  
  /**
   * Set up mobile navigation toggle
   */
  function setupMobileNavToggle() {
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header .container');
    
    // Create mobile nav toggle button if it doesn't exist
    if (!document.querySelector('.mobile-nav-toggle')) {
      const mobileNavToggle = document.createElement('button');
      mobileNavToggle.className = 'mobile-nav-toggle';
      mobileNavToggle.innerHTML = '<span></span><span></span><span></span>';
      mobileNavToggle.setAttribute('aria-label', 'Toggle Navigation');
      
      header.appendChild(mobileNavToggle);
      
      // Add mobile nav toggle functionality
      mobileNavToggle.addEventListener('click', function() {
        const expanded = nav.classList.contains('show');
        nav.classList.toggle('show');
        mobileNavToggle.setAttribute('aria-expanded', !expanded);
      });
    }
  }
  
  /**
   * Set up smooth scrolling for anchor links
   */
  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  /**
   * Add card effects to sections that should be styled as cards
   */
  function addCardEffects() {
    // Look for headings that should be in cards
    const headings = document.querySelectorAll('main h2, main h3');
    
    headings.forEach(heading => {
      // Skip headings that are already in cards
      if (heading.closest('.card')) return;
      
      // Check if this heading and its content should be a card
      // For now, we'll make all h3s into cards
      if (heading.tagName === 'H3') {
        wrapInCard(heading);
      }
    });
  }
  
  /**
   * Wrap an element and its following siblings in a card div
   * until the next heading of the same or higher level
   */
  function wrapInCard(element) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Insert the card before the element
    element.parentNode.insertBefore(card, element);
    
    // Move the element into the card
    card.appendChild(element);
    
    // Get the tag name to know when to stop adding content to the card
    const tagName = element.tagName;
    
    // Add all following siblings to the card until we hit another heading
    // of the same or higher level
    let nextSibling = element.nextElementSibling;
    while (nextSibling) {
      const currentSibling = nextSibling;
      nextSibling = nextSibling.nextElementSibling;
      
      // If we hit another heading of the same level or higher, stop
      if (currentSibling.tagName === tagName || 
          (tagName === 'H3' && currentSibling.tagName === 'H2') ||
          (tagName === 'H3' && currentSibling.tagName === 'H1') ||
          (tagName === 'H2' && currentSibling.tagName === 'H1')) {
        break;
      }
      
      // Otherwise, move this element to the card
      card.appendChild(currentSibling);
    }
  }