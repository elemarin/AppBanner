window.AppPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('installed!');
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  AppPrompt = e;

  console.log("The prompt is ready to install!", e);
});
