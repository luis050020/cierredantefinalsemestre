document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    function switchTab(tabId) {
      // Remove active class from all buttons and contents
      tabButtons.forEach(button => button.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
  
      // Add active class to selected button and content
      const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
      const selectedContent = document.getElementById(`${tabId}-content`);
      
      if (selectedButton && selectedContent) {
        selectedButton.classList.add('active');
        selectedContent.classList.add('active');
      }
    }
  
    // Add click handlers to all tab buttons
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.dataset.tab;
        switchTab(tabId);
      });
    });
  });
  