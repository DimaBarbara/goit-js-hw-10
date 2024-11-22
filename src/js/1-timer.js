import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const btn = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const inputTimer = document.getElementById('datetime-picker');
let userSelectedDate;
let interval;
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      if (selectedDate < new Date()) {
          iziToast.error({
        title: 'Error',
        message: `Please choose a date in the future`,
      });
          userSelectedDate = null;
          inputTimer.disabled = false;
      } else {
          userSelectedDate = selectedDate
          btn.disabled = false; 
          console.log(userSelectedDate)
      }
  },
};
flatpickr("#datetime-picker", options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function updateCountdown() {
        if (!userSelectedDate) return;

        const timeNow = new Date();
        const result = userSelectedDate - timeNow;
        if (result <= 0) {
            clearInterval(interval);
        } else {
            const { days, hours, minutes, seconds } = convertMs(result);
            const formattedDays = addLeadingZero(days);
    const formattedHours = addLeadingZero(hours);
    const formattedMinutes = addLeadingZero(minutes);
    const formattedSeconds = addLeadingZero(seconds);
            timer.innerHTML = `
            <div class="timer">
      <div class="field">
        <span class="value" data-days>${formattedDays}</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-hours>${formattedHours}</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-minutes>${formattedMinutes}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-seconds>${formattedSeconds}</span>
        <span class="label">Seconds</span>
      </div>
    </div>
    `;
    }
    }
    btn.addEventListener('click', () => {
        const interval = setInterval(updateCountdown, 1000);
        btn.disabled = true;
        inputTimer.disabled = true;
    });


