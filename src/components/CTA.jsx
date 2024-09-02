import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have any job opportunities? <br className='sm:block hidden'/>
        I would love to hear about them!</p>
        <Link to='/contact' className='btn'>Contact</Link>
    </section>
  )
}

export default CTA