import { posts } from './posts.js';
import { Post } from './Post.js';

window.addEventListener('DOMContentLoaded', pageLoadHandler);
window.addEventListener('hashchange', hashChangeHandler, false);

dayjs.locale('pt-br');
dayjs.extend(window.dayjs_plugin_relativeTime);

function hashChangeHandler() {
  const postNum = location.hash;
  getPost(postNum);
}

function pageLoadHandler() {
  getPost(0)
}

function getPost(num) {
  const newPost = new Post(posts[num]);
  newPost.setContent();
}
