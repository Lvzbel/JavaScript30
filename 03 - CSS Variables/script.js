const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // If the element doesnt have a data set we need the OR '' or else it will append undefined.
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Triggers after the change is set
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// Triggers while moving the slider
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));