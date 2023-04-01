import {React} from 'react';
import data from "./ListData.json";

function List(props) {
    return (
        <ul className='list'style={{width:"15%", height:"15%"}}>
            {data.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List