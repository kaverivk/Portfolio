const message = 'Hello Everyone!!!';

const typingPromises = (message, timeout) =>
  [...message].map(
    (ch, i) =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(message.substring(0, i + 1));
        }, timeout * i);
      })
  );

typingPromises(message, 300).forEach(promise => {
  promise.then(portion => {
    document.querySelector('h1').innerHTML = portion;
  });
});