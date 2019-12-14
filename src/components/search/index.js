import React from 'react'
import './index.scss'
// import { StoryList } from '../story-list'
import { SingleStory } from '../for-del'

export class Search extends React.PureComponent {
    state ={
        classforsearch:'searchinput',
        list:false
    }

    searchsmall = (e) => {
     e.which === 13 && this.setState({
         classforsearch:'searchinputsmall',
         list:true
        })
        
    }        
    
    render(){
    return (
        <div className='searchbg'>
            <input 
            className={this.state.classforsearch}
            placeholder='Search'
            onKeyPress={this.searchsmall}
            >
            </input>
           {this.state.list && <div className='searchItem'>
                {new Array(20).fill(0).map((_,i)=> (
                    // <StoryList key={i}/>
                    <SingleStory key = {i}/>
                ))
            }
            </div>}
        </div>
    )
}
}
