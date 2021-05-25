function findBrowser(){
  info = detect.parse(navigator.userAgent);
  console.log(info.browser.name);
  console.log(info.os.name);
}