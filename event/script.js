export const main = () => {
  // このコードを完成させてください
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleField = document.querySelector('#title');
    const title = titleField.value;
    const contentField = document.querySelector('#content');
    const content = contentField.value;
    const data = { title, content };
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(({ title, content, id }) => {
        const resultIdElement = document.querySelector('#result-id');
        resultIdElement.textContent = `created post ID is ${id}`;
        const resultTitleElement = document.querySelector('#result-title');
        resultTitleElement.textContent = `created post title is ${title}`;
        const resultContentElement = document.querySelector('#result-content');
        resultContentElement.textContent = `created post content is ${content}`;
      });
  });
};

window.addEventListener('load', main);
