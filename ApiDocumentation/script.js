window.ChangeColor = function() {
    // Select all elements where the CSS variable is applied
    var elements = document.querySelectorAll('*');
  
    // Get the current values of the CSS variables
    var currentC1 = getComputedStyle(document.documentElement).getPropertyValue('--c1').trim();
    var currentC2 = getComputedStyle(document.documentElement).getPropertyValue('--c2').trim();
    var currentC3 = getComputedStyle(document.documentElement).getPropertyValue('--c3').trim();
    var currentC4 = getComputedStyle(document.documentElement).getPropertyValue('--c4').trim();
    var currentC5 = getComputedStyle(document.documentElement).getPropertyValue('--c5').trim();
    var currentC6 = getComputedStyle(document.documentElement).getPropertyValue('--c6').trim();
    
  
    // Define the new values for '--c5' and '--c6'
    var newC5 = currentC5 === 'rgba(255, 255, 255, 0.259)' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.259)';
    var newC6 = currentC6 === 'rgba(255, 255, 255, 0.323)' ? 'rgba(0, 0, 0, 0.19)' : 'rgba(255, 255, 255, 0.323)';
  
    // Loop through the NodeList
    elements.forEach(function(element) {
      // Swap the values of '--c1' and '--c2'
      element.style.setProperty('--c1', currentC2);
      element.style.setProperty('--c2', currentC1);
      
      // Swap the values of '--c3' and '--c4'
      element.style.setProperty('--c3', currentC4);
      element.style.setProperty('--c4', currentC3);
      
      // Toggle the values for '--c5' and '--c6'
      element.style.setProperty('--c5', newC5);
      element.style.setProperty('--c6', newC6);
    });
}
