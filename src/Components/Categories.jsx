import React, { useEffect, useState } from "react";
import "./Styles/Categories.css";
import Card from "./Cards1";
import history from './history';

function Category(props) {

    const [categoryData, setCatData] = useState([]);
    var catValueDict = { 'ml': 10, 'cc': 20, 'bd': 30, 'wd': 40 };

    async function fetchMongoDataOfCategory(cat) {
        await fetch('http://localhost:9000/fetchData/category',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category: cat }),
            })
            .then(res => res.json())
            .then(res => { setCatData(res) });
    }

    useEffect(() => {
        fetchMongoDataOfCategory(catValueDict[props.cat]);
    }, []);

    return (
        <div className="body">
            <div className="left">
                <a className="newPost"><button type='button' onClick={() => { history.push('/new-blog') }}>New Post</button></a>
            </div>
            <div className="middle">
                {categoryData.map(item =>
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

export default Category;