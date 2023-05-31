import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Load from './Load';
import PropTypes from 'prop-types'

export default class News extends Component {
   static defaultProps={
    category:"business",
   }  
 constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
             page:1
        }
    }
     updatenews = async ()=>{
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d5891c5b3a5b4a4d87afc7a0d00465fd&page=${this.state.page}&pageSize=5`;
        this.props.setProgress(30);
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(70);
        let parsedData = await data.json()
        console.log(parsedData);  
            this.setState({
            page: this.state.page,
            articles: parsedData.articles,
              loading:false
          })
 this.props.setProgress(100);
    }
async componentDidMount(){ 
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d5891c5b3a5b4a4d87afc7a0d00465fd&page=1&pageSize=5`;
        this.props.setProgress(50);
        let data = await fetch(url);
        this.props.setProgress(70);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({loading:false})
        this.props.setProgress(90);
        this.setState({articles: parsedData.articles, 
           totalResults: parsedData.totalResults})
            this.props.setProgress(100);
        }
 handlePrevClick = async ()=>{
       this.setState({
            page: this.state.page - 1,
          })
this.updatenews(this.state.page);
    }
    
     handleNextClick = async ()=>{
        console.log("Next"); 
        this.setState({
                page: this.state.page + 1,
            })
     this.updatenews(this.state.page);
     }

    render() { 
        return (
           <>
          <div className="container my-3">
                <h1>NewsBook - Top Headlines</h1> 
             
              
               <div style={{display:"flex",justifyContent:"center"}}>
                { this.state.loading && <Load/>}
                </div>
              
             <div className="row"> 
                {this.state.articles.map((element)=>{
                     return <div className="col-md-4" key={element.url}>
                        <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.nam}/>
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
               
            </div>
          
          </> 
        )
    }
}