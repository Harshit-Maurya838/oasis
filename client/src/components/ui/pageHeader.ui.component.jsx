import React from 'react'
import Breadcrumbs from '../utils/breadcrums.utils.component'

const PageHeader = () => {
  return (
    <section id='page_header'>
        <h1>SittingRoom</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
        Transform your sitting room with our elegant and functional seating options, 
        perfect for every modern home.
      </p>

      <Breadcrumbs />
    </section>
  )
}

export default PageHeader