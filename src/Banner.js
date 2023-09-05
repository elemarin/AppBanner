// const btnAdd = document.getElementById('btnAdd');
// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//   const text = document.querySelector('[data-text]');
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI notify the user they can add to home screen
//   btnAdd.style.display = 'block';  
// });

// btnAdd.addEventListener('click', (e) => {
//   // Show the prompt
//   deferredPrompt.prompt();
// });

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});