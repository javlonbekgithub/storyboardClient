import React from 'react'
import { Home } from '../../components/home'
import { Random } from '../../components/the-story-day'
import { Search } from '../../components/search'
import { Categories } from '../../components/categories'
import { Subscribe } from '../../components/subscribe'
import './index.css'
import { Navigation } from '../../components/nav'

export class FirstPage extends React.PureComponent {
  scrollPage = index => {
    this.div.scrollTo({
      left:0,
      behavior:'smooth',
      top:index * window.innerHeight
    })
  }

render (){
  return (
    <div className='fpbg' ref = {(r) => this.div= r}>
      <Home />
      <Navigation scrollTo={this.scrollPage} />
      <Random/>
      <Search/>
      <Categories/>
      <Subscribe/>
    </div>    
  )
}
}

