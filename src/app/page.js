
import React from 'react'
import PostForm from './_components/PostForm'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center font-semibold' style={{minHeight:"calc(100vh - 4rem"}}>
      <PostForm />
      
      {/* <p className=''>This Page is in working state, Please refer to the other pages.</p>
      <p className="">Thank you.</p> */}
    </div>
  )
}
