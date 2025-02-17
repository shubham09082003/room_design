import WorkCard from "./WorkCard"

function Work() {   
  return (
    <div>
        <div>
            <h1 className='text-4xl font-bold text-white text-center mt-20'>How it <span className='text-primary'>Works</span></h1>
            <p className='text-center text-gray-400'>Transform your blank room into stunning AI-powered room design in three simple steps</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 mt-10 sm:gap-4 md:flex-row lg:flex-row">
            <WorkCard image="/upload.png" title='Upload Image' description='Start by uploading any room photo you like to enhance'/>
            <WorkCard image="/magic-wand.png" title='AI Magic' description='Our advanced AI transforms your photo into stunning portraits'/>
            <WorkCard image="/download.png" title='Download Image' description='Get your enhanced portraits in multiple styles instantly'/>
        </div>
    </div>
  )
}

export default Work