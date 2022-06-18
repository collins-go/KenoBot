const {Sequelize, sequelize}  = require('./connect');


const CurrencyShop = 
require('./models/CurrencyShop.js')(sequelize, Sequelize.DataTypes);
require('./models/Users.js')(sequelize, Sequelize.DataTypes);
require('./models/UserItems.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

const abilityEmoji = ':ability:980090964876070963'; //green
const proficiencyyEmoji = ':proficiency:980090964972539974'; //yellow
const boostEmoji = ':boost:980090964850905138'; //blue
const difficultyEmoji = ':difficulty:980090964859289640';
const challengeEmoji = ':challenge:980090964867678248';
const setbackEmoji = ':setback:980090965245186130';
const successEmoji = ':success:980090964964151306';
const advantageEmoji = ':advantage:980090964859314236';
const triumphEmoji = ':triumph:980090965199048734';
const failureEmoji = ':failure:980090964905451550';
const threatEmoji = 'threat:980090964905443328';
const despairEmoji = ':despair:980090965043867678';


// <${abilityEmoji}>
// <${proficiencyEmoji}>
// <${boostEmoji}>
// <${difficultyEmoji}>
// <${challengeEmoji}>
// <${setbackEmoji}>
// <${successEmoji}>
// <${advantageEmoji}>
// <${triumphEmohi}>
// <${failureEmoji}>
// <${threatEmoji}>
// <${despairEmoji}>
// 



sequelize.sync({ force }).then(async () => {
    const shop = [
      //CurrencyShop.upsert({ name: '', search_name: '', cost: 0, item_encumberance: 0, item_rarity: 0, item_description: ``, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Comlink (handheld)', search_name: 'comlink (handheld)', cost: 25, item_encumberance: 0, item_rarity: 0, item_description: `This piece of gear is used to communicate between other comlinks. The handheld versions are only viable for extreme distances on planets, reaching up to low orbit. However, long range versions can usually reach the entire planet in range.`, item_restricted: `No`}),
        CurrencyShop.upsert({ name: 'Field Ration Pack', search_name: 'field ration pack', cost: 5, item_encumberance: 0, item_rarity: 0, item_description: `Single meal`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Mk. III Modular Backpack', search_name: 'mk. iii modular backpack', cost: 75, item_encumberance: 0, item_rarity: 1, item_description: `Increases encumbrance threshold by 2. Extra pockets increase the encumbrance threshold by 1 (6 can be attached)`, item_restricted: `No`}),
        CurrencyShop.upsert({ name: '3-MAL Secure Comlink', search_name: '3-mal secure comlink', cost: 250, item_encumberance: 0, item_rarity: 4, item_description: `This is an extremely small comlink with military-grade encryption, favoured by the rebel alliance and civil emergency services. Add 1 <${setbackEmoji}> die to intercept and decrypt the signal. Monitoring a clear frequency on a civilized world adds 2 <${boostEmoji}><${boostEmoji}> dice to Knowledge check related to current events.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Atgar Artillery Remote', search_name: 'atgar artillery remote', cost: 400, item_encumberance: 1, item_rarity: 7, item_description: `A device used to link a single Gunnery weapon to an Atgar Artillery Remote with a Computers (<${difficultyEmoji}><${difficultyEmoji}><${difficultyEmoji}>) check. If the weapon is an Atgar Space Defense Corporation model, this check is (<${difficultyEmoji}><${difficultyEmoji}>) instead. If the check succeeds, the weapon gains the Inaccurate 2 quality and the holder of the remote can fire the linked weapon via the remote from up to medium range.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Bespin Motors Remote DVI Activator', search_name: 'bespin motors remote dvi activator', cost: 300, item_encumberance: 0, item_rarity: 4, item_description: `Sometimes, one needs to make a speedy getaway, but starships take their time to start up and get through their pre-flight checks. This remote allows one to jump-start their ship before they've arrived so that they can lift-off immediately upon arrival. May activate a ship from 5 km away, running pre-flight checks to have it ready to go. May potentially pilot a slave circuit with a Daunting (<${difficultyEmoji}><${difficultyEmoji}><${difficultyEmoji}><${difficultyEmoji}>) Piloting check.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Carbanti United Electronics Whistler', search_name: 'carbanti united electronics whistler', cost: 1250, item_encumberance: 3, item_rarity: 6, item_description: `This unit is used to encrypt messages with a cypher that is all but uncrackable, used by diplomats and military organisations to send the most secret messages to operatives. Without decryption key, decoding a message sent through this equipment requires a Formidable (<${difficultyEmoji}><${difficultyEmoji}><${difficultyEmoji}><${difficultyEmoji}><${difficultyEmoji}>) check and sophisticated equipment.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Chedak Communications X-500 Portable HoloNet Relay', search_name: 'chedak communications x-500 portable holonet relay', cost: 75000, item_encumberance: 15, item_rarity: 7, item_description: `Although reserved primarily for military communications, the HoloNet is still used by civilians for communications and media transmission instantly across the galaxy. A relay such as this one may be the only option colonists have to communicate across the galaxy. Allows communication using the HoloNet.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Cirenian Communications Pioneer Long-Range Transceiver', search_name: 'cirenian communications pioneer long-range transceiver', cost: 1000, item_encumberance: 5, item_rarity: 5, item_description: `Also known as subspace transceivers, this equipment is a portable version of what is found on virtually all starships. Often this is used by smugglers and pirates who do not want to use the public HoloNet. Range up to 25 lightyears (further if bounced through a network within range).`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Combat Scanner', search_name: 'combat scanner', cost: 2000, item_encumberance: 1, item_rarity: 6, item_description: `Typically built into a helmet, these scanners provide users with critical battlefield data. The scanner includes an encrypted long-range comlink and a set of sensors. Remove (<${setbackEmoji}><${setbackEmoji}>) added to checks due to darkness/ see normally in dark conditions. Enemies add (<${setbackEmoji}><${setbackEmoji}>) )to checks made to intercept or decrypt data broadcasts.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Comlink (long-range)', search_name: 'comlink (long-range)', cost: 200, item_encumberance: 2, item_rarity: 1, item_description: `This piece of gear is used to communicate between other comlinks. The handheld versions are only viable for extreme distances on planets, reaching up to low orbit. However, long range versions can usually reach the entire planet in range.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'DH77 Headcomm', search_name: 'dh77 headcomm', cost: 400, item_encumberance: 0, item_rarity: 3, item_description: `This comlink is the standard one used by Imperial stormtroopers. However, due to the size specifications, it lacks power to reach long ranges. Transmits up to Medium range (Planetary Scale). Add (<${setbackEmoji}><${setbackEmoji}><${setbackEmoji}>) to decrypting intercepted`, item_restricted: `Yes` }),
        CurrencyShop.upsert({ name: 'Earbud Comlink', search_name: 'earbud comlink', cost: 75, item_encumberance: 0, item_rarity: 5, item_description: `This small comlink is convenient for users that need their hands free or a more inconspicuous form of communication. Usable at long range. Noticing the earbud comlink requires a (<${difficultyEmoji}><${difficultyEmoji}><${difficultyEmoji}>) Perception check.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'False Voice Transmitter', search_name: 'false voice transmitter', cost: 1400, item_encumberance: 4, item_rarity: 6, item_description: `The FVT is a combination of multiple pieces of technology which allows an operative to take a voice sample and then transmit messages via comlink with the replicated voice. Upgrade ability of Charm/Coercion/Deception/Leadership/Negotiation checks while impersonating another individual once.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: 'Hardened Comlink', search_name: 'hardened comlink', cost: 450, item_encumberance: 4, item_rarity: 5, item_description: `This military grade comlink is built to withstand battlefield use and features satellite uplink capability. These are also encrypted and generally housed in a helmet. Add (<${failureEmoji}><${failureEmoji}>) result to any checks made to decode transmissions. Add (<${successEmoji}><${successEmoji}>) result to any checks user makes to break through a comms jammer.`, item_restricted: `No` }),
        CurrencyShop.upsert({ name: '', search_name: '', cost: 0, item_encumberance: 0, item_rarity: 0, item_description: ``, item_restricted: `No` }),
        CurrencyShop.upsert({ name: '', search_name: '', cost: 0, item_encumberance: 0, item_rarity: 0, item_description: ``, item_restricted: `No` }),
        CurrencyShop.upsert({ name: '', search_name: '', cost: 0, item_encumberance: 0, item_rarity: 0, item_description: ``, item_restricted: `No` }),
        CurrencyShop.upsert({ name: '', search_name: '', cost: 0, item_encumberance: 0, item_rarity: 0, item_description: ``, item_restricted: `No` }),
        CurrencyShop.upsert({ name: '', search_name: '', cost: 0, item_encumberance: 0, item_rarity: 0, item_description: ``, item_restricted: `No` }),
        CurrencyShop.upsert({ name: '', search_name: '', cost: 0, item_encumberance: 0, item_rarity: 0, item_description: ``, item_restricted: `No` }),
    ];

    await Promise.all(shop);
    console.log('Database synced');

    sequelize.close();
}).catch(console.error);