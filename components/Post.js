import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-white mt-6 rounded-md p-4'>
            <div className='flex items-center space-x-2'>
                <img className='rounded-full h-12 w-12' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Fabrizio_Romano_2021_%28cropped%29.jpg/330px-Fabrizio_Romano_2021_%28cropped%29.jpg' alt='' />
                <div className='flex flex-col ml-2'>
                    <p className='font-medium'>Fabrizio Romano</p>
                    {/* <p className='text-xs text-gray-500'>{new Date().toLocaleString()}</p> */}
                </div>
            </div>
            <p>Firmino to Al Ahli, HERE WE GO!!! @AlAhli</p>
        </div>
        {/* If any Image */}
        <div className='relative h-60 md:h-96 bg-white'>
            <Image src='https://external-preview.redd.it/fabrizio-romano-understand-roberto-firmino-has-now-reached-v0-n0NpEuEo5IPiCzFMCfdv8KNOGmhxqnKUvjFYAj76DSE.jpg?auto=webp&s=1d4c6e2b22720e81ecaf7971203dfdeee76eb6a1' objectFit="cover" layout="fill"/>
            
        </div>
         {/* Footer */}
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp className="h-4"></FiThumbsUp>
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post