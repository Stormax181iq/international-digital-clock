dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
MicroModal.init();

const dateTimePanel = document.getElementById('date-time-wrapper');
const changeTzBtn = document.getElementById('change-tz');
const tzDisp = document.getElementById('timezone-display');
const tzList = document.getElementById('timezone-list');
const tzPickBtn = document.getElementById('tz-pick');
const tzApplyBtn = document.getElementById('tz-apply');
let chosenTz;

document.addEventListener('DOMContentLoaded', function () {
  chosenTz = dayjs.tz.guess();
  tzDisp.innerText = chosenTz;
  setInterval(clock, 1000);
});

changeTzBtn.addEventListener('click', function () {
  MicroModal.show('modal-1')
});

tzPickBtn.addEventListener('click', function () {
  if (tzList.style.display === 'none') {
    tzList.style.display = 'flex';
  } else {
    tzList.style.display = 'none';
  }
});

tzList.addEventListener('click', function (e) {
  if (e.target.classList.contains('timezone-element')) {
    tzPickBtn.innerText = e.target.innerText;
    tzList.style.display = 'none';
  }
});

tzApplyBtn.addEventListener('click', function () {
  changeTimezone(tzPickBtn.innerText);
});

function changeTimezone(tzStr) {
  if (tzStr.includes('Pacific')) {
    chosenTz = "America/Los_Angeles";
  } else if (tzStr.includes('MST UTC-7')) {
    chosenTz = "America/Phoenix";
  } else if (tzStr.includes('Central Time')) {
    chosenTz = "America/Chicago";
  } else if (tzStr.includes('Eastern Time')) {
    chosenTz = "America/New_York";
  } else if (tzStr.includes('Brazil')) {
    chosenTz = "America/Sao_Paulo";
  } else if (tzStr.includes('GMT')) {
    chosenTz = "Europe/London";
  } else if (tzStr.includes('Berlin')) {
    chosenTz = "Europe/Berlin";
  } else if (tzStr.includes('Moscow')) {
    chosenTz = "Europe/Moscow";
  } else if (tzStr.includes('Dubai')) {
    chosenTz = "Asia/Dubai";
  } else if (tzStr.includes('India')) {
    chosenTz = "Asia/Kolkata";
  } else if (tzStr.includes('Singapore')) {
    chosenTz = "Asia/Singapore";
  } else if (tzStr.includes('China')) {
    chosenTz = "Asia/Shanghai";
  } else if (tzStr.includes('Tokyo')) {
    chosenTz = "Asia/Tokyo";
  } else if (tzStr.includes('Sydney')) {
    chosenTz = "Australia/Sydney";
  } else if (tzStr.includes('Auckland')) {
    chosenTz = "Pacific/Auckland";
  }
  tzDisp.innerText = chosenTz;
}

function clock() {
  const now = dayjs().tz(chosenTz);
  dateTimePanel.innerHTML = `<p id="time">${now.format('HH:mm:ss')}</p>
  <p id="date">${now.format('dddd, DD MMMM, YYYY')}</p>`
}


