import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    console.log("constructor calling");
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  }


  async componentDidMount(){
    console.log("cdm");
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=324ef4f138194642b74d8d5f4e342d88&page=1";
    let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({articles: parsedData.articles})
  }

  handlePrevClick=()=>{
      console.log("prev clk");
     
  }
    handleNextClick=()=>{
    console.log("next clk");
  
  } 

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>News-Live - Top Headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
               return <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title?element.title.slice(0,45):""}
                    description={element.description?element.description.slice(0,88):""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}/>
                </div> 
            })}
          </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark"onClick={this.handlePrevClick}> &larr; Previous </button>
            <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      </div>
    );
  }
}

export default News;
