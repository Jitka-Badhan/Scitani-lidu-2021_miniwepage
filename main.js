'use strict';

const now = dayjs();
const nowDiv = document.querySelector('.dnes');
const scitaniDiv = document.querySelector('.scitaniLidu');
const odkazDiv = document.querySelector('.odkaz a');

const scitaniOnlineEnd = dayjs('2021-04-09');
const scitaniPapirStart = dayjs('2021-04-17');
const scitaniEnd = dayjs('2021-05-11');

nowDiv.innerHTML = `<p>Dnes je ${now.format('DD.MM.YYYY')}</p>`;

if (now <= scitaniOnlineEnd) {
  scitaniDiv.innerHTML =
    scitaniDiv.innerHTML +
    '<p> Můžeš vyplnit dotazník <strong>online</strong>.</p>';
  odkazDiv.style.display = 'inline-block';
} else if (now < scitaniPapirStart) {
  scitaniDiv.innerHTML =
    scitaniDiv.innerHTML +
    '<p>Už není možné vyplnit dotazník online, ale za pár dní můžeš vyplnit dotazník <strong>v papírové podobě</strong>.</p>';
  odkazDiv.style.display = 'inline-block';
  odkazDiv.textContent = 'Více informací zde';
} else if (now <= scitaniPapirEnd) {
  scitaniDiv.innerHTML =
    scitaniDiv.innerHTML +
    '<p> Můžeš vyplnit dotazník <strong>v papírové podobě</strong>.</p>';
} else {
  scitaniDiv.innerHTML =
    scitaniDiv.innerHTML + '<p> Sčítání lidu už skončilo.</p>';
}
