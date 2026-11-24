import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBooks() {
  return (
    <div className='bg-gray-200 p-10 my-20 mx-50'>
      <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
      {/* Grid */}
      <div className='md:grid grid-cols-2 mt-10 w-full'>
       {/* 1st section */}
       <div className='px-5'>
        <div className='mb-3'>
            <input type="text" placeholder='Book Title' className='w-full p-2 bg-white rounded'/>
        </div>
         <div className='mb-3'>
            <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded'/>
        </div>
         <div className='mb-3'>
            <input type="text" placeholder='Book cover Image URL' className='w-full p-2 bg-white rounded'/>
        </div>
         <div className='mb-3'>
            <input type="text" placeholder='Total pages' className='w-full p-2 bg-white rounded'/>
        </div>
         <div className='mb-3'>
            <input type="text" placeholder='Original price' className='w-full p-2 bg-white rounded'/>
        </div>
         <div className='mb-3'>
            <input type="text" placeholder='Discount Price' className='w-full p-2 bg-white rounded'/>
        </div>
       <div className='mb-3'>
            <textarea type="text" rows={'5'} placeholder='Abstract' className='w-full p-2 bg-white rounded'/>
        </div>
       </div>
       {/* 2nd section */}
       <div className='px-5'>
       <div className='mb-3'>
            <input type="text" placeholder='Publisher' className='w-full p-2 bg-white rounded'/>
        </div>
        <div className='mb-3'>
            <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded'/>
        </div>
        <div className='mb-3'>
            <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded'/>
        </div>
        <div className='mb-3'>
            <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded'/>
        </div>
        {/* Upload book images */}
        <div className='my-10 flex justify-center items-center'>
            <label htmlFor="bookImages">
                <input type="file" id='bookImages' hidden />
                <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/previews/020/995/194/original/3d-minimal-file-document-upload-icon-cloud-computing-concept-laptop-with-an-upload-icon-and-progress-bar-3d-illustration-png.png" alt="no image" />
            </label>
        </div>
        {/* Preview uploaded images */}
        <div className='flex justify-center items-center mb-3'>
         <img width={'70px'} height={'70px'}  src="https://m.media-amazon.com/images/I/81q77Q39nEL._SL1500_.jpg" alt="bookcard" />
         <label htmlFor="bookUpload">
            <input type="file" id='bookUpload' hidden/>
            <FaPlus className='text-2xl ms-3'/>
         </label>
        </div>
       </div>
      </div>
      {/* reset and add books */}
      <div className='flex md:justify-end mt-10 px-5 justify-center w-full'>
        <button className='bg-gray-600 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-600'>RESET</button>
        <button className='bg-blue-600 text-white px-3 py-2 rounded hover:bg-white hover:text-blue-600 ms-5'>ADD BOOK DETAILS</button>
      </div>
    </div>
  )
}

export default UploadBooks
