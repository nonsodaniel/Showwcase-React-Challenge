import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <div className='no-match'>
            <h1 className='text-center font-3'>Wrong Action! This page doesn't exist</h1>
            <p className='text-center'>
                Kindly click on the  <Link to='/'><b><i>Homepage</i></b></Link>   to go back home.
             </p>
        </div>
    )
}

export default NoMatch
