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
  let assignParams = Object.assign(
    { format: 0, num: 100, page: 1, platform: 1, links: 1 },
    params
  );
  const queryParams = new URLSearchParams(assignParams);
  let result = await fetch(`${baseUrl}?${queryParams.toString()}`, {
    method: "GET",
  });
  return await result.json();
}
let getGamesListCategory=['IO','2Player','3D','Adventure','Arcade','Bejeweled','Boys','Clicker','Cooking','Girls','Hypercasual','Multiplayer','Puzzle','Racing','Shooting','Sports','Stickman','Baby Hazel']








export { getGamesList, getGamesListApi,getGamesListCategory };
