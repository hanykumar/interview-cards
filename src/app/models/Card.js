const cardColor = {
    'Clubs': 'black',
    'Spades': 'black',
    'Hearts': 'red',
    'Diamonds': 'red'
}
const cardIcon = {
    'Clubs': '♣',
    'Spades': '♠',
    'Hearts': '♥',
    'Diamonds': '♦'
}
class Card {
    constructor(rank, suit){
        this.id = `${rank} ${suit}`;
        this.rank = rank;
        this.suit = suit;
        this.color = cardColor[suit],
        this.icon = cardIcon[suit]
    }
}
export default Card;