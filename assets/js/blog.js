ghost.init({
clientId: "ghost-frontend",
clientSecret: "55cda42b54a4"
});

function onSuccess(data) {
var $result = $('#blog-posts');
$.each(data.posts, function (i, post) {
$result.append( '<figure class="effect-spaceout">' +
'<img alt="Projektowanie stron www" src="https://blog.spaceout.pl/' + post.feature_image + '">' +
'<figcaption>' +
  '<h2>' + post.title + '</h2>' +
    '<p> Czytaj więcej </p>'  +
  '<a rel="follow" href="https://blog.spaceout.pl/' + post.url + '"> Zobacz Wpis </a></div></figure>'
);
});
}

jQuery(document).ready(function () {
$.get(
ghost.url.api('posts', {limit: 4})
).done(onSuccess);
});
