import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl,author,date,source} = this.props;
    return (
        <div className="my-3">
           
            <div className="card" style={{width: "18rem"}}>
            
                <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
                <p style={{zindex:"1",color:"red",fontSize:"10px",fontWeight:"bold"}}>{source}</p>    
                <div className="card-body">
                    
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6>{author? author:"UNKONWN"}</h6> 
                    <p>{date}</p>   
                     <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                   
                
                </div>
            </div>
        </div>
    )
}}
