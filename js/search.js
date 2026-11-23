document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('post-input');
  const btn = document.getElementById('post-btn');
  const res = document.getElementById('post-res');

  async function searchPosts() {
    const query = input.value.trim();
    res.innerHTML = '';

    if (!query) {
      return;
    }

    const matched = ALL_POSTS.filter(post => {
      const titleMatch = post.title.includes(query);

      return titleMatch;
    });

    if (matched.length === 0) {
      const li = document.createElement('li');
      li.textContent = '一致する記事が見つかりませんでした。';
      res.appendChild(li);
      return;
    }

    // Illustrates the articles as list
    matched.forEach(post => {
      const li = document.createElement('li');

      const link = document.createElement('a');
      link.href = post.url;
      link.textContent = post.title;

      li.appendChild(link);
      res.appendChild(li);
    });
  }

  btn.addEventListener('click', searchPosts);
});
