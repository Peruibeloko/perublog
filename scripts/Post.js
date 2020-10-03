import { postElement } from './anchor.js';

export class Post {
  constructor(data) {
    if (data === undefined) {
      this.title = 'Pô, aí não amigão...';
      this.author = {
        name: 'Carlos',
        date: null
      };
      this.content = 'Foi caçar coisa que não devia, achou nada!';
    }

    this.title = data.title;
    this.author = data.author;
    this.content = data.content;
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
      date ? `${dayjs(date).fromNow()} atrás` : 'nunca',
      date ? `${dayjs(date).format('DD/MM/YYYY HH[h]mm')}` : 'nunca'
    ];
  }
}
