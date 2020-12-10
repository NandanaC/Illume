import React, { useEffect, useState } from "react";
import "./Styles/Body1.css";
import Card from "./Cards1";
import history from './history';


function Body(props) {
    console.log(props.user);
    const [data, setData] = useState([]);

    async function fetchMongoData() {
        await fetch('http://localhost:9000/fetchData')
            .then(res => res.json())
            .then(res => setData(res['array']));
    }

    useEffect(() => {
        fetchMongoData();
    }, []);

    return (
        <div className="body">
            <div className="left">
                <a className="newPost"><button type='button' onClick={() => { history.push({ pathname: '/new-blog', state: { user: props.user } }) }}>New Post</button></a>
            </div>
            <div className="middle">
                {data.map(item =>
                    (<div className="blogCard" key={item.BlogID}>
                        <Card key={item.BlogID} id={item.BlogID} title={item.title} desc={item.desc} day={item.BlogID.slice(0, 3)}
                            month={item.BlogID.slice(3, 6)} year={item.BlogID.slice(6, 10)} date={item.BlogID.slice(10, 12)} />
                    </div>))}
            </div>
            <div className="right">
            </div>
        </div>
    );
}

export default Body;