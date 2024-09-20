import {
  getIdForString,
  getTopLevelDomain,
  getAllRootColorKeyWords,
} from "./tools.js";
function colorInit() {
  getAllRootColorKeyWords().then((keyWords) => {
    document.documentElement.setAttribute(
      keyWords[getIdForString(getTopLevelDomain(), keyWords.length)],
      ""
    );
  });
}
colorInit();

async function getGamesList() {
  let result = await fetch("./freegames.json", { method: "GET" });
  return await result.json();
}

async function getGamesListApi(params) {
  const baseUrl = "https://gamemonetize.com/feed.php";
  const queryParams = new URLSearchParams(params);
  let result = await fetch(`${baseUrl}?${queryParams.toString()}`, {
    method: "GET",
  });
  return await result.json();
}

export { getGamesList, getGamesListApi };
