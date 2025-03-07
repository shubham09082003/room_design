import React, { useState } from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AiOutputDialog from './AiOutputDialog';

function RoomDesignOutput({room}) {

    const [openDialog,setOpenDialog] = useState(false);

  return (
    <div className='shadow-md shadow-white rounded-md cursor-pointer border-2 p-2 border-gray-500' onClick={() => setOpenDialog(true)}>
        <ReactBeforeSliderComponent
        firstImage={{
            imageUrl : room?.aiImage,
        }}
        secondImage={{
            imageUrl : room?.imageUrl
        }}
    />
        <div className='p-4'>
            <h2 className='text-white'>Room Type : {room.roomType}</h2>
            <h2 className='text-white'>Design Type:{room.designType}</h2>
        </div>
        <AiOutputDialog aiImage={room.aiImage} originalImage={room.imageUrl}
            closeDialog={() => setOpenDialog(false)}
            openDialog={openDialog}
        />
    </div>
  )
}

export default RoomDesignOutput