const fs = require('fs').promises;
const glob = require("glob");
const emojis = [
  '😄','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😌','😂','😰','😅','😨','😱','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👋','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','🔠','🔡','🔤','🔼','🔽','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🚻','🚹','🚺','🚼','🚾','🚰','🈸','🛂','🛄','🛅','🛃','🉑','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◾','◽','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
];

const getRandomEmoji = function(){
  return emojis[Math.floor(Math.random() * emojis.length)];
};
const capitalizeFirstChar = str => {
  const temp = str.replace(/-/g, ' ').replace(/[^\sA-Za-z]/gi, '').trim();
  return temp.charAt(0).toUpperCase() + temp.slice(1);
}
const getNameH1 = name => `# ${getRandomEmoji()} ${capitalizeFirstChar(name)} ${name ? ' | ' : ''}Raining T`;
const getNameH2 = name => `## ${capitalizeFirstChar(name)}`;
const rootBreadCrumb = `> A place to paste re-usable stuff!`;
const readMe = 'README.md';

const generateTable = (items, path, title) => {
  title = title.trim() || 'Content'
  let result = `<table><thead><tr><th></th><th>${title}</th></tr></thead><tbody>`;
  let i = 0;
  for (let el in items) {
    i++;
    result += `<tr><td>${i}</td><td><a href="${(path + '/' + el).substring(2)}">${capitalizeFirstChar(el)}</a></td></tr>`;
  }
  result += '</tbody></table>';
  return result;
}
const generateBreadcrumb = (paths = []) => paths.length === 2 ? rootBreadCrumb : `> ${paths
  .filter(n => n)
  .reduce(
    (previousValue, currentValue) => [...previousValue, `${previousValue.pop() || '.'}/${currentValue}`],
    []
  )
  .map(folder => {
    const tempFolder = folder.substring(4);
    const lastSlashIndex = tempFolder.lastIndexOf('/') + 1;
    return `[${!tempFolder ? '🏠' : capitalizeFirstChar(tempFolder.substring(lastSlashIndex))}](/${tempFolder})`;
  })
  .join(" > ")
}`;


glob("./**/*.md", async (err, files) => {
  if (err) {
    console.error(err);
    return false;
  }

  let rows = {};
  await Promise.all(
    files.map(async (filePath) => {
      if(filePath.includes('node_modules')) return false;
      const correctFilePath = filePath.substring(2, filePath.length - 10);
      correctFilePath.split("/").reduce((dir, path) => {
        if(!dir[path]) dir[path] = {};
        return dir[path];
      }, rows);
    })
  );

  delete rows[''];
  const traverseFolders = async (path, level = rows) => {
    let content = '';
    const name = path.split('/').pop();
    const title = getNameH1(name) + "\n\n";
    const titleH2 = getNameH2(name) + "\n\n";
    const breadcrumb = generateBreadcrumb(path.split('/'));
    const childrenTable = [];

    // walk sub-folders
    for (const [key, value] of Object.entries(level)) {
      const isLeaf = Object.values(value).length === 0;
      if(isLeaf) {
        // console.log(key)
        // try {
        //   const content = await fs.readFile(`${path}/${readMe}`, "binary");
        //   table = content.match(/^#(?!include).*$/gm);
        // } catch (e) {
        //   console.log("Some error happened!", e);
        // }
      } else {
        const childTable = await traverseFolders(`${path}/${key}`, value);
        childrenTable.push(childTable);
      }
    }

    content += `\n\n${generateTable(level, path, capitalizeFirstChar(name))}`;
    content += `\n\n${childrenTable.join("\n\n")}`;
    await fs.writeFile(`${path}/${readMe}`, `${title}${breadcrumb}${content}`);

    return titleH2 + breadcrumb + content;
  }

  await traverseFolders('./', rows);
});
