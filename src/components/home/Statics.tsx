import React from 'react'

export default function Statics() {
  return (
    <div className='flex justify-around w-[95%] bg-[#212121] rounded-2xl border border-[#3a3a3a] px-10 py-5'>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-4xl font-bold text-white'>2.5M+</span>
        <span className='text-gray-400'>PROFESSIONALS</span>
      </div>
      <span className='border-r border-[#3a3a3a]'></span>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-4xl font-bold text-white'>85K+</span>
        <span className='text-gray-400'>LIVE JOBS</span>
      </div>
      <span className='border-r border-[#3a3a3a]'></span>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-4xl font-bold text-white'>12K+</span>
        <span className='text-gray-400'>COMPANIES</span>
      </div>
      <span className='border-r border-[#3a3a3a]'></span>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-4xl font-bold text-white'>98%</span>
        <span className='text-gray-400'>MATCH RATE</span>
      </div>
    </div>
  )
}
