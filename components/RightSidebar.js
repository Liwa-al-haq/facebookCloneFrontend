import React from 'react'
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center0'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
            <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
            </div>
        </div>
        <Contacts src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Fabrizio_Romano_2021_%28cropped%29.jpg/330px-Fabrizio_Romano_2021_%28cropped%29.jpg" name="Fabrizio Romano" status="Online"/>
        <Contacts src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Fabrizio_Romano_2021_%28cropped%29.jpg/330px-Fabrizio_Romano_2021_%28cropped%29.jpg" name="David Ornsestein" status="Offline"/>
        <Contacts src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gianni_Di_marzio_%28cropped%29.JPG/330px-Gianni_Di_marzio_%28cropped%29.JPG" name="De Marzio" status="Online"/>
    </div>
  )
}

export default RightSidebar