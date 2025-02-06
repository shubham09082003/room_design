import React from 'react'
import { Textarea } from '@/components/ui/textarea'

function AdditionalReq({additionalRequirementInput}) {
  return (
    <div className='mt-5'>
        <label className='text-gray-500'> Enter Additional Requirements (Optional)</label>
        <Textarea placeholder='Additional Requirements' className='h-[100px] mt-3' onChange={e => additionalRequirementInput(e.target.value)}/>
    </div>
  )
}

export default AdditionalReq