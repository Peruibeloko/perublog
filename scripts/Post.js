import { postElement } from './anchor.js';

export class Post {
  constructor(data) {
    this.title = data?.title || 'Pô, aí não amigão...';
    this.author = data?.author || 'Carlos';
    this.datetime = data?.datetime || null;
    this.post = data?.post || 'Foi caçar coisa que não devia, achou nada!';
    this.setContent();
  }

  setContent() {
    const titleEl = postElement.querySelector('h1');
    const authorEl = postElement.querySelector('#author');
    const dateEl = postElement.querySelector('#date');
    const contentEl = postElement.querySelector('p');

    const dates = this.getTimeStrings();

    titleEl.innerText = this.title;
    authorEl.innerText = `Post feito por ${this.author} ${dates[0]}`;
    dateEl.innerText = `${dates[1]}`;
    contentEl.innerText = this.post;
  }

  getTimeStrings() {
    const date = this.datetime;
    return [
      date ? `${dayjs(date).fromNow()} atrás` : 'há 13.2Bi de anos atrás',
      date ? `${dayjs(date).format('DD/MM/YYYY HH[h]mm')}` : '31/02/1999 25h30'
    ];
  }
}
