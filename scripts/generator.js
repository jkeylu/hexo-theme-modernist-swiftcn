hexo.extend.generator.register(function (locals, render, callback) {
  var authors = [];
  locals.posts.forEach(function (post, i) {
    if (authors.indexOf(post.github) < 0)
      authors.push(post.github);
  });

  authors.forEach(function (author, i) {
    if (author == 'swiftcn') return;

    var path = 'author/' + author + '/index.html';
    render(path, 'author', {
      github: author,
      posts: locals.posts.find({github: author})
    });
  });

  render('author/swiftcn/index.html', 'author', {
    github: 'swiftcn',
    posts: locals.posts.find({
      $or: [
        {github: 'swiftcn'},
        {github: ''},
        {github: null}
      ]
    })
  });
  callback();
});
