const rootElement = document.querySelector('#root')

const element = (
  <div class="greeting">
    <div class="greeting__title">Hello world!</div>
    <div class="greeting__text">I\'m learning React</div>
  </div>
);

const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement(
      'div',
      { className: 'greeting-title' },
      'Hello, world!'
  ),
  React.createElement(
      'div',
      { className: 'greeting-text' },
      'I\'m learning React!'
  ),
)
