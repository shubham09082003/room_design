"use client"

import React, { useState } from 'react'
import ImageSelection from './_component/ImageSelection'
import RoomType from './_component/RoomType'
import DesignType from './_component/DesignType'
import AdditionalReq from './_component/AdditionalReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/config/firebaseConfig';
import { useUser } from '@clerk/nextjs'
import CustomLoading from './_component/CustomLoading'
import AiOutputDialog from '../_component/AiOutputDialog'


function CreateNew() {  
    
    const {user} = useUser();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const [aiOutputImage, setAiOutputImage] = useState();
    const [openOutputDialog, setOpenOutputDialog] = useState(false);
    const [originalImage, setOriginalImage] = useState();

    const onHandleInputChange = (value,feildName) => {  
        setFormData(prev => ({...prev, [feildName]: value}));
        console.log(formData);
    }

    const generateAiImage = async () => {
        setLoading(true);
        const rawImageUrl = await SaveRawImageToFireBase();
        const response = await axios.post('/api/redesign-room',{
            imageUrl: rawImageUrl,
            roomType: formData?.roomType,
            designType: formData?.designType,
            additionalReq: formData?.additionalReq || "",
            userEmail: user?.primaryEmailAddress?.emailAddress
        });
        setAiOutputImage(response.data.result);
        setOpenOutputDialog(true);
        setLoading(false);
    }

    const SaveRawImageToFireBase = async () => {
        const fileName = Date.now()+"_raw.png";
        const imageRef = ref(storage,'room-redesign/'+fileName);

        await uploadBytes(imageRef,formData.roomImage).then(res =>{
            console.log('file uploaded...');
        });

        const url = await getDownloadURL(imageRef);
        console.log(url);
        setOriginalImage(url);
        return url;

    }




  return (
    <div>
        <h2 className='text-3xl font-bold text-center text-primary'>Redesign your room with the Magic of AI</h2>
        <p className='text-center text-gray-500'>Transform any room with in a click. Select your space, choose your style, and let the AI do the rest.</p>

        <div className = 'grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
            {/* {image section} */}
            <ImageSelection selectedImage={value => onHandleInputChange(value,'roomImage')}/>

            {/* {form section} */}
            <div>
                <RoomType selectedRoomType={value => onHandleInputChange(value,'roomType')}/>

                <DesignType selectedDesignType={value => onHandleInputChange(value,'designType')}/>

                <AdditionalReq additionalRequirementInput={value => onHandleInputChange(value,'additionalReq')}/>

                <Button className='w-full mt-5' onClick={generateAiImage}>Generate Design</Button>

                <p className='text-gray-500 text-sm text-center mt-5 mb-52'>1 credit is used to redesign your room</p>
            </div>
        </div>
        <CustomLoading loading={loading}/>
        <AiOutputDialog openDialog={openOutputDialog} closeDialog={ () => setOpenOutputDialog(false)}
            originalImage={originalImage}
            aiImage={aiOutputImage}
        />
    </div>    

  )
}



export default CreateNew