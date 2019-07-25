import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
    
    render() {
        return (
            <div>
                <Link to='/'><img src='https://sitejerk.com/images/apple-music-logo-transparent-9.png' className='logo'/></Link>
            </div>
        )
    }
}

export default Logo