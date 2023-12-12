const items = [
    {
      "id": 1,
      "name": "B.F. Sword",
      "effect": "10 Attack Damage",
      "damage": 10,
      "image": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/bf_sword.png"
    },{
      "id": 2,
      "name": "Chain Vest",
      "effect": "20 Armor",
      "damage": 20,
      "image": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/chain_vest.png"
    },
    {
      "id": 3,
      "name": "Giant's Belt",
      "effect": "150 Health",
      "damage": 150,
      "image": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/gaints_belt.png"
    },
    {
      "id": 4,
      "name": "Needlessly Large Rod",
      "effect": "10 Ability Power",
      "damage": 10,
      "image": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/needlessly_large_rod.png"
    },
    {
      "id": 5,
      "name": "Negatron Cloak",
      "effect": "20 Magic Resist",
      "damage": 20,
      "image": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/negatron_cloak.png"
    },
    ];

const champions = [
    {
      "id": 1,
      "name": "Ahri",
      "cost": 4,
      "Origin": ["K/DA"],
      "Class": ["Spellweaver"],
      "ability": {
        "name": "idol's Charm",
        "description": "Blow a kiss at the current target. It deals magic damage and briefly Stuns them. If the target has been kissed before, deal more magic damage instead."
      },
      "skills": {
        "skills1": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/blue_buff.png",
        "skills2": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/giant_slayer.png",
        "skills3": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/jeweled_guantlet.png"
       },
      "image": "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft10_ahri_mobile.tft_set10.png"
    },
    {
      "id": 2,
      "name": "Akali K/DA",
      "cost": 4,
      "Origin": ["K/DA"],
      "Class": ["Executioner", "Breakout"],
      "ability": {
        "name": "Unrelenting Flow",
        "description": "Throw a shuriken at the farthest unmarked enemy, marking them. Dash to every marked enemy, striking them for physical damage and dealing physical damage to enemies dashed through."
      },
      "skills": {
        "skills1": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/bloodthirster.png",
        "skills2": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/hand_of_justice.png",
        "skills3": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/titans_resolve.png"
       } ,
      "image": "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft10_akali_mobile.tft_set10.png"
    },
    {
      "id": 3,
      "name": "Akali True Damage",
      "cost": 4,
      "Origin": ["True Damage"],
      "Class": ["Executioner", "Breakout"],
      "ability": {
        "name": "Deep Cuts",
        "description": "Deal physical damage three times split between the three closest enemies within 3 hexes. For each enemy that survives all three waves, refund Mana."
      },
      "skills": {
        "skills1": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/bloodthirster.png",
        "skills2": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/hand_of_justice.png",
        "skills3": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/titans_resolve.png"
       } ,
      "image": "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft10_akali_truedamage_mobile.tft_set10.png"
    },
    {
      "id": 4,
      "name": "Amumu",
      "cost": 3,
      "Origin": ["Emo"],
      "Class": ["Guardian"],
      "ability": {
        "name": "Thrash",
        "description": "Deal %Ability Power+ 150% of Armor magic damage to adjacent enemies. Every 3rd cast hits enemies within 2 hexes and Stuns them for 1.5 second."
      },
      "skills": {
        "skills1": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/bramble_vest.png",
        "skills2": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/dragons_claw.png",
        "skills3": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/warmogs_armor.png"
       } ,
      "image": "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft10_amumu_mobile.tft_set10.png"
    },
    {
      "id": 5,
      "name": "Annie",
      "cost": 1,
      "Origin": ["Emo"],
      "Class": ["Spellweaver"],
      "ability": {
        "name": "Dark Disintegrate",
        "description": "Deal magic damage to the current target. After 4 casts, gain 50% Attack Speed and casts deal magic damage to another nearby enemy."
      },
      "skills": {
        "skills1": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/nashors_tooth.png",
        "skills2": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/spear_of_shojin.png",
        "skills3": "https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/spear_of_shojin.png"
       } ,
      "image": "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft10_annie_mobile.tft_set10.png"
    }
  ];

  const displayChampion = (items) => {
    const rootElement = document.getElementById("items");
      rootElement.innerHTML = items.map((item) => {
        let { name,cost,Origin,Class,image,skills } = item;
        return `<li data-category="" data-price="">
        <picture>
            <img src="${image}" alt="">
        </picture>
        <div class="detail">
            <p class="icon">
               <span><img src="${skills.skills1}" alt=""></span>
               <span><img src="${skills.skills2}" alt=""></span>
               <span><img src="${skills.skills3}" alt=""></span>
            </p>
            <strong>${name}</strong>
            <span>Class: ${Class}</span>
            <small>Origin: ${Origin}</small>
        </div>
        <h4>cost: ${cost}</h4>
    </li>`;
      }).join("");
    
  };
  //initial display champions
  displayChampion(champions)

  const displayItems = (items) => {
    const rootElement = document.getElementById("items");
      rootElement.innerHTML = items.map((item) => {
        let { name,effect,image } = item;
        return `<li data-category="" data-price="">
        <picture>
            <img src="${image}" alt="">
        </picture>
        <div class="detail">
            <p class="icon">
               <span><img src="${image}" alt=""></span>
               <span><img src="${image}" alt=""></span>
               <span><img src="${image}" alt=""></span>
            </p>
            <strong>${name}</strong>
            <small>Effect: ${effect}</small>
        </div>
        <h4> </h4>
    </li>`;
      }).join("");
    
  };

  let indicator = document.querySelector(".indicator").children;


  const championsBtn = document.getElementById("Champions");
  championsBtn.addEventListener("click", () => {
    indicator[1].classList.remove('active');
    indicator[0].classList.add('active')
    updateFiltersAndDisplayItems()})

  const itemsBtn = document.getElementById("Items");
  itemsBtn.addEventListener("click", () => {
    indicator[0].classList.remove('active');
    indicator[1].classList.add('active')

    updateFiltersAndDisplayItems()})

  //Search bar start --
// Event listener for the search bar
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", () => updateFiltersAndDisplayItems());
// -- Search bar end

const sorting = document.getElementById("select");
sorting.addEventListener("click", () => updateFiltersAndDisplayItems())


function updateFiltersAndDisplayItems() {
  let filteredItems;
  let filteredChampions;
  const searchData = searchBar.value.toLowerCase();

  if (indicator[1].classList.contains("active")) {
    if (searchData !== "") {
      filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchData)
      );
    } else {
      filteredItems = [...items];
    }

    // Apply sorting based on the selected option
    const sortOption = document.getElementById("select").value;
    console.log(sortOption)
    switch (sortOption) {
      case "LowToHigh":
        filteredItems.sort((a, b) => a.damage - b.damage);
        break;
      case "HighToLow":
        filteredItems.sort((a, b) => b.damage - a.damage);
        break;
      case "AZ":
        filteredItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ZA":
        filteredItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // No sorting
        break;
    }

    displayItems(filteredItems);
  }

  if (indicator[0].classList.contains("active")) {
    if (searchData !== "") {
      filteredChampions = champions.filter((item) =>
        item.name.toLowerCase().includes(searchData)
      );
    } else {
      filteredChampions = [...champions];
    }

    // Apply sorting based on the selected option
    const sortOption = document.getElementById("select").value;
    console.log(sortOption)
    switch (sortOption) {
      case "LowToHigh":
        filteredChampions.sort((a, b) => a.cost - b.cost);
        break;
      case "HighToLow":
        filteredChampions.sort((a, b) => b.cost - a.cost);
        break;
      case "AZ":
        filteredChampions.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ZA":
        filteredChampions.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // No sorting
        break;
    }

    displayChampion(filteredChampions);
  }
}

