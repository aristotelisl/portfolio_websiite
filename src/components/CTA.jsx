import React from 'react'
import { Link } from 'react-router-dom'
import { linkedin, github } from '../assets/icons'

const CTA = () => {
  return (
    <section className='flex-col mt-4'>
      <div className='flex items-center mb-2'>
        <p className='cta-text'>Have any job opportunities? <br className='sm:block hidden'/>
        I would love to talk about them!</p>
        <Link to='/contact' className='btn'>Contact</Link>
      </div>

      <div className='flex gap-3 items-center'>
        <p className='font-semibold'>aristotelisl002@gmail.com</p>
        <Link to='https://www.linkedin.com/in/aloucaides/' target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="github" className='w-6 h-6 object-contain ml-1'/>
        </Link>
        <Link to='https://github.com/aristotelisl/' target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className='w-6 h-6 object-contain ml-1'/>
        </Link>
      </div>
    </section>
  )
}

export default CTA