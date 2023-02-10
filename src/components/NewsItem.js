import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let{title,description,imgUrl,newsUrl,author,time,source}=this.props;
    return (
        <>
      <div className='my-3'>
        <div className="card">
        <img src={!imgUrl?"https://macreports.com/wp-content/uploads/2020/06/cannot-load-photo.png":imgUrl}className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left: "85%"}}>{source}<span className="visually-hidden">unread messages</span></span></h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {author} on {new Date(time).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
    </div>
    </>
    )
  }
}

export default NewsItem