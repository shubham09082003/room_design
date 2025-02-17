import React from 'react'

function Footer() {
  return (
    <div>
        

<footer className="bg-none rounded-lg shadow-sm m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 AI Room Design. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="hover:underline me-4 md:me-6">Linkedin</a>
        </li>
        <li>
            <a href="https://github.com/shubham09082003/room_design" className="hover:underline me-4 md:me-6">Github</a>
        </li>
        <li>
            <a href="/" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="/" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer