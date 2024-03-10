import Card from '../models/Card'
const CardsDeck = [];
const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

suits.forEach((suit) => 
    ranks.forEach((rank) => {
        CardsDeck.push(new Card(rank, suit))
    })
)
export default CardsDeck;