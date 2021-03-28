'use strict';

const now = dayjs();
const nowDiv = document.querySelector('.dnes');
const scitaniDiv = document.querySelector('.scitaniLidu');
const odkazDiv = document.querySelector('.odkaz a');

const scitaniOnlineStart = dayjs('2021-03-27');
const scitaniOnlineEnd = dayjs('2021-04-09');
const scitaniPapirStart = dayjs('2021-04-17');
const scitaniPapirEnd = dayjs('2021-05-11');

nowDiv.innerHTML = `<p>Dnes je ${now.format('DD.MM.YYYY')}</p>`;

if (now >= scitaniOnlineStart && now <= scitaniOnlineEnd) {
  scitaniDiv.innerHTML =
    scitaniDiv.innerHTML +
    '<br><p> Můžeš vyplnit dotazník <strong>online</strong>.</p>';
  odkazDiv.style.display = 'inline-block';
} else if (now >= scitaniPapirStart && now <= scitaniPapirEnd) {
  scitaniDiv.innerHTML =
    scitaniDiv.innerHTML +
    '<br><p> Můžeš vyplnit dotazník <strong>v papírové podobě</strong>.</p>';
} else {
  scitaniDiv.innerHTML =
    scitaniDiv.innerHTML + '<br><p> Sčítání lidu už skončilo.</p>';
}
