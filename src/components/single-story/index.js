import React from 'react'
import styles from './index.module.sass'

export const SingleStory = () => (
    <div className={styles.eachLI}> 
        <img 
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhv2rcwuHJqisHjavJMU2w4gAbgepqmxAYOT8edygWrkZrcCbeSg'
         alt='img'
         className={styles.Limg}
         >
         </img>
         <div className = {styles.storytext}>
            <h1>alHafidiyy</h1> 
            <p>
                
            Line 20:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

            </p>
         </div>
     </div>
 )