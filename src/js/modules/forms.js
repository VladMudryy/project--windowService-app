function forms() {
    const form = document.querySelectorAll('form'),
          telInput = document.querySelectorAll('.form-phone');

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
    telInput.forEach(item => {
        item.addEventListener('input', event => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    // Form submit
    form.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();

            let statusAsnswer = document.createElement('div');
            statusAsnswer.classList.add('status');
            item.appendChild(statusAsnswer);

            let formData = new FormData(item);

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
                });
        });
    });
}

export default forms;