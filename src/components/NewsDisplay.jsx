import { useEffect, useState } from "react"
import Item from "./Item";


const NewsDisplay = ({category}) => {

    const [newsArticles,setnewsArticles]=useState([]);

    useEffect(()=>{
        let  apiUrl=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
        fetch(apiUrl).then(response=>response.json()).then(data=>setnewsArticles(data.articles));
   
    },[category])
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {newsArticles.map((news,index)=>{

            return <Item key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsDisplay