


// // your friend
// let p = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log('fetching some data...');
//     resolve('some data');
//   }, 3000);
// });

// // you
// p.then(function(item) {
//   console.log(item);
// }).catch(function(item) {
//   console.log(item);
// });

// ---------------
// let dataInJson = '[{"rollNo": 1,"firstName": "Messi"}, {"rollNo": 2,"firstName": "Ronaldo"}, {"rollNo": 3,"firstName": "Neymar"}]'; 

// console.log(JSON.parse(dataInJson));

let req = new XMLHttpRequest();

req.open('GET', 'https://inshorts.deta.dev/news?category=entertainment');

req.send();

req.onload = function() {
  let arr = JSON.parse(this.response).data;
  let ul = document.querySelector('ul');

  for (let news of arr) {
    let div = document.createElement('div');
    // let img = document.createElement('img');
    // let p = document.createElement('p');

    // img.setAttribute('src', news.imageUrl);
    // p.innerText = news.title;

    // li.append(img, p);

    div.innerHTML = `
      <div class="card">
        <img src=${news.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
        </div>
      </div>
    `
    ul.appendChild(div);
  }
}

req.onerror = function() {
  console.log(this);
}