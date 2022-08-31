import "./css/index.css"
// import "./css/index.less"
function comEL(){
  const el = document.createElement("div")
  el.innerHTML = ["前端工程化之","webpack5"].join();
  el.classList = "con"
  return el 
}

document.body.appendChild(comEL())