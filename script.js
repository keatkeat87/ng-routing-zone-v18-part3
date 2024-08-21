 

const button = document.querySelector('header button');
button.addEventListener('click', () => {
  const main = document.querySelector('main');
  const sectionsToRemove = Array.from(main.querySelectorAll('section'));
  sectionsToRemove.forEach(section => section.remove());

  const template = document.querySelector('template');
  const view = template.content.cloneNode(true);

  // 1. won't scroll to top
  // main.append(view); 

  // 2. will scroll to top
  // requestAnimationFrame(() => {
  //   main.append(view); 
  // });

  // 3. will scroll to top
  // setTimeout(() => {
  //   main.append(view); 
  // });

 });