
function component() {
  const element = document.createElement('div');

  element.innerHTML = ''.concat('Hello', 'Webpack')

  return element;
}

document.body.appendChild(component());