import React from 'react'
import PageLayout from '../../components/Layout/pageLayout'

const error = () => {
    return (
        <PageLayout>
            <div className='min-h-[80vh] flex justify-center items-center'>
                Sorry We encountered some error
            </div>
        </PageLayout>
    )
}

export default error