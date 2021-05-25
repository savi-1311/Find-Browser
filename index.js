function findBrowser(){
  info = detect.parse(navigator.userAgent);
  let text = document.getElementById('text');
  text.style.display="block";
  text.innerHTML = `The Browser is - ${info.browser.name} <br>The Platform is - ${info.os.name}`;
}