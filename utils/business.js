import { getAllRootColorKeyWords } from "./tools.js";

function colorInit() {
  getAllRootColorKeyWords().then((keyWords) => {
    document.documentElement.setAttribute(
      'color-scheme',
      keyWords[Math.floor(Math.random() * keyWords.length)]
    );
  });
}
colorInit();

async function getGamesListApi(params) {
  const baseUrl = "https://gamemonetize.com/feed.php";
  // json格式format: 0 
  const queryParams = new URLSearchParams({ format: 0, ...params });
  let result = await fetch(`${baseUrl}?${queryParams.toString()}`, {
    method: "GET",
  });
  return await result.json();
}

export { getGamesListApi };
