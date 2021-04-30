// // XML HTTP REQUEST -> xhr

// const request = new XMLHttpRequest();

// request.open("DELETE", "https://jsonplaceholder.typicode.com/posts");

// request.addEventListener("load", function () {
//   console.log("Status: ", request.status);
//   console.log("Status text: ", request.statusText);
//   console.log("Response: ", request.responseText);
// });
// const requestBody = JSON.stringify({
//   title: "News title",
//   author: "Elgis",
// });

// request.send(requestBody);

//fetch

// fetch('https://jsonplaceholder.typicode.com/posts/')
//   //  .then((response) => console.log(response));
//   .then (
//     function(res) {
//       console.log(res)
//       return res.json()
//     }
//     ).then (
//       function(data) {
//         console.log(data)
//       }
//     )

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title: "title", author: "admin" }),
    headers: {
      lang: 'ru',
      authorization: '221100'
    }
  });
  const data = await response.json();

  console.log(data);
}
getPosts();
