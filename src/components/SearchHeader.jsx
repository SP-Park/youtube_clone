import React, { useEffect, useState } from 'react'
import { BsYoutube, BsSearch } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'

function SearchHeader() {
  const { keyword } = useParams()
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/videos/${text}`)
  }

  useEffect(() => {
    setText(keyword || '')
  }, [keyword])

  return (
    <section className='w-full flex p-4 text-2xl border-b border-zinc-700 mb-4'>
        <Link to='/' className='flex items-center'>
            <BsYoutube className='text-5xl text-brand'/>
            <h1 className='font-bold ml-2 text-3xl'>Youtube_clone</h1>
        </Link>
        <form className='w-full flex justify-center' onSubmit={handleSubmit}> 
            <input 
                className='w-7/12 p-2 outline-none bg-black text-gray-50'
                type='text' placeholder='Search anything....'  
                value={text} onChange={(e) => setText(e.target.value)}
            />
            <button className='bg-zinc-600 px-4'>
                <BsSearch />
            </button>
        </form>
    </section>
  )
}

export default SearchHeader
