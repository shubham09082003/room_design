"use client"

import Image from 'next/image'
import React, { useState } from 'react'

function ImageSelection({selectedImage}) {

    const [file, setFile] = useState(null);

    const handleImageUpload = (e) => {
        setFile(e.target.files[0]);
        selectedImage(e.target.files[0]);
    }

  return (
    <div>
        <label>Select Image of your room</label>
        <div className='mt-3'>
            <input type='file' accept='image/*' id='upload-image' style={{display: 'none'}} onChange={handleImageUpload}/>
            <label htmlFor='upload-image'>
                <div className={`p-28 border rounded-xl border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-lg
                    ${file && 'p-0 bg-white'}
                `}>

                   {!file?  <Image src='/upload.png' alt='uploadImage' width={70} height={70}/> :
                    <Image src={URL.createObjectURL(file)} alt='uploadedImage' width={300} height={300}
                        className='w-[300px] h-[300px] object-cover'
                    />
                   }
                </div>
            </label>
        </div>
    </div>



  )
}

export default ImageSelection