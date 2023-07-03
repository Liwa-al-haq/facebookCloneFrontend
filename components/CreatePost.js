import Image from "next/image";
import { React, useState, useRef } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { RiDeleteBin6Line } from "react-icons/ri";


const CreatePost = () => {
    const { data: session } = useSession();
  return (
    <div className='bg-white rounded-md shadows-md text-gray-500 p-2 '>
        <div className='flex space-x-4 p-4 items-center'>
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className='flex flex-1'>
            <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type='text' placeholder={`What's on your mind, ${session?.user.name}?`} />
            <button hidden type='submit'>Submit</button>
        </form>
        </div>
        <div className='flex justify-evenly py-2'>
            <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer ">
                <HiOutlineVideoCamera className='h-8 w-8 text-red-500' size={20}/>
                <p className='font-semibold text-gray-600 '>Live Video</p>
            </div>
            <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer ">
                <IoMdPhotos className='h-8 w-8 text-green-500' size={20}/>
                <p className='font-semibold text-gray-600 '>Photo/Video</p>
            </div>
            <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer ">
                <BsEmojiSmile className='h-8 w-8 text-yellow-500' size={20}/>
                <p className='font-semibold text-gray-600 '>Activity</p>
            </div>
        </div>
    </div>
  )
}

export default CreatePost