import React, {useEffect, useState} from 'react';
import axios from "axios";
import ListItem from "./ListItem";
import Details from "./Details";

const List = () => {
    const listUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
    const cardUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';
    const [jsonData, setJsonData] = useState();
    const [card, setCard] = useState();
    const [activeId, setActiveId] = useState('')


    const getCard = (props) => {
        axios.get(`${cardUrl}${props.id}.json`)
            .then((data) => setCard(data.data));

    }

    useEffect(() => {
        axios.get(listUrl).then((data) => {
            setJsonData(data.data)
        })

    }, []);

    return (
        <div className='componentsWrapper'>
            <div className="listItems">
                {jsonData ? jsonData.map((i, index) =>
                    <ListItem key={index} id={i.id} name={i.name} getCard={getCard} setActive={setActiveId} active={activeId}/>
                ) : ''}
            </div>
            {card ?
                <Details info={card} />
                : ''}
        </div>
    );
};

export default List;
