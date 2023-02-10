import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    constructor(){
        // You Have to write super inside a constructor to call it properly and to evade error
        super();
        this.state={
           articles:[],
           loading:false

        }
    }
    async componentDidMount(){
        console.log("Worked!")
        // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a3e874505530494b8b88704bbde65836`;
        let url=`https://gnews.io/api/v4/top-headlines?country=us&category=${this.props.category}&apikey=7f048bc899036364eac02e20e26fc37d`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles:parsedData.articles});
    }
  render() {
    return (
      <div className='container my-4'>
        <div className="row">
          {this.state.articles&& this.state.articles.map((element) => {
             return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0, 36) : ""} description={element.description?element.description.slice(0, 100): ""} imgUrl={element.image} newsUrl={element.url} category={element.category} author={element.author?element.author:"unknown"} time={element.publishedAt} source={element.source.name?element.source.name:"unknown"}/>
            </div>
            })}
        </div>
        
      </div>
    )
  }
}

export default News