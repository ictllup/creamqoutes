document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const quotes = document.querySelectorAll('.quote-card');
  
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
  
      quotes.forEach(quote => {
        const text = quote.textContent.toLowerCase();
        if (text.includes(filter)) {
          quote.style.display = '';
        } else {
          quote.style.display = 'none';
        }
      });
    });
  });
  