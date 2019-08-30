import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('with text', () => '<button class="btn">Hello World</button>')
  .add('with emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  });

storiesOf('Title', module)
  .add('Title xl', () => '<h1>Hello World</h1>')
  .add('Title lg', () => '<h2>Hello World</h2>')
  .add('Title md', () => '<h3>Hello World</h3>')
  .add('with sm', () =>  `<h5>Hello World</h5>`);