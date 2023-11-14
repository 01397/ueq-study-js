export const main = () => {
  // このコードを完成させてください
  const aElem = document.getElementsByTagName('a')[0]
  aElem.textContent = 'REDIMPULZ'
  aElem.href = 'https://redimpulz.com'

  const section = document.getElementsByTagName('section')[0]
  const pElement = document.createElement('p')
  pElement.textContent = 'We hope you enjoy JavaScript.'
  pElement.classList.add('highlight')
  section.appendChild(pElement)
  const temp = document.getElementById('temp')
  section.removeChild(temp)
};

window.addEventListener("load", main);
