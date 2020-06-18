import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div style={{position:"fixed",left:"0",bottom:"0",width:"100%",textAlign:"center"}}>
                <p>Copyright&copy; Website 2020</p>
            </div>
        )
    }
}

export default Footer
