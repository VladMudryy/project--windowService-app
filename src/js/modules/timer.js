const timer = (classSelector, deadline) => {
    function calcData(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor((((total / 1000) / 60) / 60) / 24),
              hours = Math.floor((((total / 1000) / 60) / 60) % 24),
              minutes = Math.floor(((total / 1000) / 60) % 60),
              seconds = Math.floor((total / 1000) % 60);

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function modifyNum(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setTimer(selector) {
        const timerId = document.querySelector(selector),
              days = timerId.querySelector('#days'),
              hours = timerId.querySelector('#hours'),
              minutes = timerId.querySelector('#minutes'),
              seconds = timerId.querySelector('#seconds'),
              timerInterval = setInterval(makeTimer, 1000);

        makeTimer();

        function makeTimer() {
            const t = calcData(deadline);
        
            days.textContent = modifyNum(t.days);
            hours.textContent = modifyNum(t.hours);
            minutes.textContent = modifyNum(t.minutes);
            seconds.textContent = modifyNum(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        }
    }

    setTimer(classSelector);
};

export default timer;