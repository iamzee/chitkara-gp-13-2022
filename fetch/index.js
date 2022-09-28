let p = fetch('https://inshorts.deta.dev/news?category=science');

p.then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
});