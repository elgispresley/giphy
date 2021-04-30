const API_KEY = "KidEyBEO8CIX0dWWf92oSLw0I0kB1T4C";

const $searchInput = document.getElementById("searchInput");
const $searchBtn = document.getElementById("searchBtn");

const API_URL = "https://api.giphy.com/v1/gifs/search";

const $content = document.getElementById("content");
const $limitInput = document.getElementById("limit");
const $selectLang = document.getElementById("select-lang");

//Рефакторинг кода:

//Отправить запрос на giphy

function showGifs(data) {
  data.forEach(function (gif) {
    const $iframe = document.createElement("iframe");

    $iframe.src = gif.embed_url;

    $iframe.width = 150;
    $iframe.height = 150;
    $content.append($iframe);
  });
}

async function searchGifs(options) {
  try {
    const response = await fetch(
      API_URL +
        `?api_key=${API_KEY}&q=${options.keyword}&limit=${options.limit}&lang=${options.lang}`
    );
    if (!response.ok) {
      return;
    }

    const { data } = await response.json();

    return data;
  } catch (e) {
    alert("Ошибка в коде, или дело в интернете", e.message);
  }
}

$searchBtn.addEventListener("click", async function () {
  $content.innerHTML = "";
  if (!$searchInput.value || !$limitInput.value || !$selectLang.value) {
    alert("Заполните обязательно поля!");
    return;
  }

  const gifs = await searchGifs({
    keyword: $searchInput.value,
    limit: $limitInput.value,
    lang: $selectLang.value,
  });

  showGifs(gifs);
});

$searchInput.addEventListener("keydown", async function (event) {
  if (event.keyCode === 13) {
    if (!$searchInput.value || !$limitInput.value || !$selectLang.value) {
      alert("Заполните обязательно поля!");
      return;
    }
  }
  
  const gifs = await searchGifs({
    keyword: $searchInput.value,
    limit: $limitInput.value,
    lang: $selectLang.value,
  });

  showGifs(gifs);
});

//Полученый ответ

//fetch
