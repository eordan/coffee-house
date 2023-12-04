export default function setupCounter(element) {
  let counter = 0;
  const counterElement = element;
  const setCounter = count => {
    counter = count;

    counterElement.innerHTML = `count is ${counter}`;
  };
  counterElement.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
