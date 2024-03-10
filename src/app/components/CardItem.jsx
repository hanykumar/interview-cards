import React from "react";

const CardItem = React.memo(({card}) => {
    return ( <div className={`card-item card-${card.color}`} >
        <div>
            {card.rank}
        </div>
        <div className="card-suit">
            {card.icon}
        </div>
    </div>)
})
export default CardItem;