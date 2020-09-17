import React from 'react'
import { Link } from 'react-router-dom'

const NoData = () => {
    return (
        <div>
            <h1 className='text-center font-3'>No data Aailable!</h1>
            <p className='text-center'>
                Kindly click on the  <Link>
                    <b> Add New Education</b>
                </Link>  button above to get started
             </p>
        </div>
    )
}

export default NoData
