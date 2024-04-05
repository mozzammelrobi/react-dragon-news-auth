import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";
import { useEffect, useState } from "react";


const News = () => {
    const [news, setNews] = useState([])
const newsD = useLoaderData()
    const {id} = useParams()

    // console.log( newsD)

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    // console.log(news)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl font-bold ">news details</h2>
                    <p>{id}</p>
                </div>
                <div>
                   <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;