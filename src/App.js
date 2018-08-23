import React, { Component } from "react";
import Button from "./components/Button";
import ShuffleButton from "./components/ShuffleButton";
import CardList from "./components/CardList";

const tarotDeck = [
  {
    index: 0,
    card: "AS",
    flipped: false,
    name: "The Fool",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg",
    description: "beginnings, innocence, spontanity, free spirit",
    inverse: "Naivety, foolishness, recklessness, risk-taking"
  },
  {
    index: 1,
    card: "AD",
    flipped: false,
    name: "The Magician",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
    description: "Power, skill, resourcefulness, action, concentration",
    inverse: "Manipulation, poor planning, latent talents"
  },
  {
    index: 2,
    card: "AH",
    flipped: false,
    name: "The High Preistess",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg",
    description: "Intuition, Higher powers, mystery, subconscious mind",
    inverse: "Hidden agendas, need to listen to inner voice"
  },
  {
    index: 3,
    card: "AC",
    flipped: false,
    name: "The Empress",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg",
    description: "Fertility, femininity, beauty, nature, abundance",
    inverse: "Creative block, dependence on others"
  },
  {
    index: 4,
    card: "KS",
    flipped: false,
    name: "The Emperor",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg",
    description: "Authority, father-figure, structure, solid foundation",
    inverse: "Domination, excessive control, rigidity, inflexibility"
  },
  {
    index: 5,
    card: "KD",
    flipped: false,
    name: "The Heirophant",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg",
    description:
      "Religion, group identification, conformity, tradition, beliefs",
    inverse: "Restriction, challenging the status quo"
  },
  {
    index: 6,
    card: "KH",
    flipped: false,
    name: "The Lovers",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
    description: "Love, union, relationships, values alignment, choices",
    inverse: "Disharmony, imbalance, misalignment of values"
  },
  {
    index: 7,
    card: "KC",
    flipped: false,
    name: "The Chairot",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
    description: "Control, will power, victory, assertion, determination",
    inverse: "Lack of control and direction, aggression"
  },
  {
    index: 8,
    card: "QS",
    flipped: false,
    name: "Stregnth",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
    description: " Strength, courage, patience, control, compassion",
    inverse: "Weakness, self-doubt, lack of self-discipline"
  },
  {
    index: 9,
    card: "QD",
    flipped: false,
    name: "The Hermit",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg",
    description: "Soul-searching, introspection, being alone, inner guidance",
    inverse: "Isolation, loneliness, withdrawal"
  },
  {
    index: 10,
    card: "QH",
    flipped: false,
    name: "Wheel of Fortune",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    description: "Good luck, karma, life cycles, destiny, a turning point",
    inverse: "Bad luck, negative external forces, out of control"
  },
  {
    index: 11,
    card: "QC",
    flipped: false,
    name: "Justice",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e0/RWS_Tarot_11_Justice.jpg",
    description: "Justice, fairness, truth, cause and effect, law",
    inverse: "Unfairness, lack of accountability, dishonesty"
  },
  {
    index: 12,
    card: "JS",
    flipped: false,
    name: "The Hanged Man",

    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    description: "Suspension, restriction, letting go, sacrifice",
    inverse: "Martyrdom, indecision, delay"
  },
  {
    index: 13,
    card: "JD",
    flipped: false,
    name: "Death",

    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg",
    description: "Endings, beginnings, change, transformation, transition",
    inverse: "Resistance to change, unable to move on"
  },
  {
    index: 14,
    card: "JH",
    lipped: false,
    name: "Temperance",

    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f8/RWS_Tarot_14_Temperance.jpg",
    description: "Balance, moderation, patience, purpose, meaning",
    inverse: "Imbalance, excess, lack of long-term vision"
  },
  {
    index: 15,
    card: "JC",
    flipped: false,
    name: "The Devil",

    image:
      "https://upload.wikimedia.org/wikipedia/en/5/55/RWS_Tarot_15_Devil.jpg",
    description: "Bondage, addiction, sexuality, materialism",
    inverse: "Detachment, breaking free, power reclaimed"
  },
  {
    index: 16,
    card: "0S",
    flipped: false,
    name: "The Tower",

    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
    description: "Disaster, upheaval, sudden change, revelation",
    inverse: "Avoidance of disaster, fear of change"
  },
  {
    index: 17,
    card: "0D",
    flipped: false,
    name: "The Star",

    image:
      "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg",
    description: "Hope, spirituality, renewal, inspiration, serenity",
    inverse: "Lack of faith, despair, discouragement"
  },
  {
    index: 18,
    card: "0H",
    flipped: false,
    name: "The Moon",

    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg",
    description: "Illusion, fear, anxiety, insecurity, subconscious",
    inverse: "Release of fear, unhappiness, confusion"
  },
  {
    index: 19,
    card: "0C",
    flipped: false,
    name: "The Sun",

    image:
      "https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg",
    description: "Fun, warmth, success, positivity, vitality",
    inverse: "Temporary depression, lack of success"
  },
  {
    index: 20,
    card: "9S",
    flipped: false,
    name: "Judgement",

    image:
      "https://upload.wikimedia.org/wikipedia/en/d/dd/RWS_Tarot_20_Judgement.jpg",
    description: "Judgement, rebirth, inner calling, absolution",
    inverse: "Self-doubt, refusal of self-examination"
  },
  {
    index: 21,
    card: "9D",
    flipped: false,
    name: "The World",

    image:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/RWS_Tarot_21_World.jpg",
    description: "Completion, integration, accomplishment, travel",
    inverse: "Lack of completion, lack of closure"
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarot: tarotDeck,
      data: [],
      cards: [],
      deck_id: null,
      code: null
    };
  }
  componentDidMount() {
    this.getDeckId();
  }

  getDeckId = async () => {
    //GRAB A DECK OF 22 SPECIFIC CARDS
    const response = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,AC,AD,AH,KS,KD,KC,KH,QS,QD,QH,QC,JS,JD,JH,JC,0S,0D,0H,0C,9S,9D"
    );
    const data = await response.json();

    this.setState({ data: [] });

    this.setState({ deck_id: data.deck_id });
  };

  getThreeCards = async () => {
    //maybe put a deck reshuffle here
    const response = await fetch(
      "https://deckofcardsapi.com/api/deck/" +
        this.state.deck_id +
        "/draw/?count=3"
    );
    const data = await response.json();

    const cards = data.cards.map(card =>
      tarotDeck.find(tarot => tarot.card === card.code)
    );

    for (let i = 0; i < cards.length; i++) {
      let number = Math.round(Math.random());

      if (number === 0) {
        cards[i].flipped = false;
      } else {
        console.log("next part ran");
        cards[i].flipped = true;
      }
    }
    this.setState({ cards: cards });

    console.log("these are the card codes");
    console.log(cards);
  };

  onShuffle = async () => {
    await fetch(
      "https://deckofcardsapi.com/api/deck/" + this.state.deck_id + "/shuffle/"
    );
  };

  displayTarotCards;

  render() {
    return (
      <div className="App">
        <div>
          <Button onGetThreeCards={this.getThreeCards} />

          <CardList
            cards={this.state.cards}
            getThreeCards={this.getThreeCards}
          />
          <ShuffleButton onShuffle={this.onShuffle} />
        </div>
      </div>
    );
  }
}

export default App;
