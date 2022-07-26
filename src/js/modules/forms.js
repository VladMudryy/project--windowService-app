import {checkDigits} from '../services/services';
import {closeModal} from '../services/services';

function forms(state) {
    const form = document.querySelectorAll('form'),
          closeCalcForm = document.querySelector('.popup_calc_end');

    const answers = {
        loading: 'Please wait...',
        done: 'Thanks you, succsess!',
        error: 'Something wrong...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = answers.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };
    
    // Only digits in tel input
    checkDigits('input[name="user-phone"]');

    // Form submit
    form.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();

            let statusAsnswer = document.createElement('div');
            statusAsnswer.classList.add('status');
            item.appendChild(statusAsnswer);

            let formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusAsnswer.textContent = answers.done;
                })
                .catch(error => {
                    statusAsnswer.textContent = answers.error;
                })
                .finally(() => {
                    item.reset();
                    setTimeout(() => {
                        statusAsnswer.remove();
                    }, 5000);
                    if (item.getAttribute('data-calc') === "end") {
                        state = {};
                        closeModal(closeCalcForm);
                    }
                    console.log(state);
                });
        });
    });
}

export default forms;