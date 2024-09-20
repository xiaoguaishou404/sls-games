import {
  getIdForString,
  getTopLevelDomain,
  getAllRootColorKeyWords,
} from "./tools.js";
function colorInit(){
    getAllRootColorKeyWords().then((keyWords) => {
       
      document.documentElement.setAttribute(keyWords[ getIdForString(getTopLevelDomain(), keyWords.length)], "");
        
       
      });
}
colorInit()

async function getGamesList() {
  let result = await fetch('./freegames.json', { method: 'GET' })
  return await result.json();
}

export { 
    getGamesList
 };