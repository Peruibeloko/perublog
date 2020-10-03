import { postElement } from './anchor.js';

export class Post {
  constructor(data) {
    if (data === undefined) {
      // 404
      this.title = 'Pô, aí não amigão...';
      this.author = {
        name: 'Carlos',
        date: null
      };
      this.content = 'Foi caçar coisa que não devia, achou nada!';
    } else {
      this.title = data.title;
      this.author = data.author;
      this.content = data.content;
    }
    this.setContent();
  }

  setContent() {
    const titleEl = postElement.querySelector('h1');
    const authorEl = postElement.querySelector('#author');
    const dateEl = postElement.querySelector('#date');
    const contentEl = postElement.querySelector('p');

    const dates = this.getTimeStrings();

    titleEl.innerText = this.title;
    authorEl.innerText = `Post feito por ${this.author.name} ${dates[0]}`;
    dateEl.innerText = `${dates[1]}`;
    contentEl.innerText = this.content;
  }

  getTimeStrings() {
    const date = this.author.date;
    return [
      date ? `${dayjs(date).fromNow()} atrás` : 'há 13.2Bi de anos atrás',
      date ? `${dayjs(date).format('DD/MM/YYYY HH[h]mm')}` : '31/02/1999 25h30'
    ];
  }
}
