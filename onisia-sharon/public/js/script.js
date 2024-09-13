
  


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation
  
    // Get form elements
    const inputs = document.querySelectorAll('#bookingForm input, #bookingForm select');
    const successMessage = document.getElementById('successMessage');
    
    let valid = true;
  
    // Clear previous states
    inputs.forEach(input => {
      input.classList.remove('invalid', 'valid');
      const errorSpan = document.getElementById(input.id + 'Error');
      if (errorSpan) errorSpan.style.display = 'none';
    });
    successMessage.textContent = ''; // Clear success message
  
    // Validation logic
    inputs.forEach(input => {
      if (input.type !== 'file' && input.value.trim() === '') {
        input.classList.add('invalid');
        const errorSpan = document.getElementById(input.id + 'Error');
        if (errorSpan) errorSpan.style.display = 'inline';
        valid = false;
      } else {
        input.classList.add('valid');
      }
    });
  
    // Show success message if form is valid
    if (valid) {
      successMessage.textContent = 'Form has been submitted successfully!';
  
      // Reset the form
      document.getElementById('bookingForm').reset();
  
      // Remove the success message after a short delay to allow it to be visible
      setTimeout(() => {
        successMessage.textContent = '';
      }, 3000); // Delay in milliseconds
    }
  });
  