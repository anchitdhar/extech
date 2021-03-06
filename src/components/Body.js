import React, { Component } from 'react';
import image from '../image/image.jpg';

export class Body extends Component {
    render() {
        let cards =[];
        for( let i=0;i<9;i++){
            cards.push(<div className="card w-50" style={{margin:"30px",border:"none"}}>
                        <img src={image} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <a className="card-title" href="#">Card title that wraps to a new line</a>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>)
        }
        return (
            <div>
                <div style={{paddingTop:"30px",paddingLeft:"10px",verticalAlign:"Top"}}>
                    <h2 style={{display:"inline-block"}}>Page Heading</h2>
                    <h5 style={{display:"inline-block",paddingLeft:"6px"}}>Sub Heading</h5>
                    <hr style={{marginTop:"0px",color:"e8e4e1",backgroundColor:"e8e4e1",height:".5",borderColor:"e8e4e1"}} />
                </div>
                <div className="card-columns">
                    {cards}
                </div>
            </div>
        );
    }
}

export default Body;
