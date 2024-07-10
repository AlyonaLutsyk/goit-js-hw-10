import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import '../css/styles.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const delay = form.delay.value;
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

    form.reset();
});