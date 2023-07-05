import Image from "next/image";
import { React, useState, useRef } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addPost } from "@/public/src/features/postSlice";

const CreatePost = () => {
    const FACEBOOK_CLONE_ENDPOINT = "http://localhost:3000/api/posts";
    const { data: session } = useSession();
    const inputRef=useRef(null);
    const hiddenFileInput = useRef(null);  
    const dispatch = useDispatch();
    const handleClick = (event) => {
        hiddenFileInput.current.click();
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                setImageToPost(e.target.result);
            }   
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    const[imageToPost, setImageToPost] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        const formData = new FormData();
    
        formData.append("file", imageToPost);
        console.log("imagetopost: " + imageToPost);
        formData.append("post", inputRef.current.value);
        formData.append("name", session?.user.name);
        formData.append("email", session?.user.email);
        formData.append("profilePic", session?.user.image);
    
        axios
          .post(FACEBOOK_CLONE_ENDPOINT, formData, {
            headers: { Accept: "application/json" },
          })
          .then((response) => {
            inputRef.current.value = "";
            dispatch(addPost(response.data));
            console.log(response.data);
            dispatch(addPost(response.data));
            removeImage();
          })
          .catch((error) => {
            console.log(error);
          });
      };
    

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
            <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type='text' red={inputRef} placeholder={`What's on your mind, ${session?.user.name}?`} />
            <button hidden type='submit' onClick={handleSubmit}>Submit</button>
        </form>
        </div>
        {imageToPost && (
            <div 
            onClick={removeImage} className='flex items-center space-x-4 filter hover:brightness-210 transition duration-150 cursor-pointer px-4 py-2'>
                <img className='h-10 object-contain' src={imageToPost} alt='' />
            <RiDeleteBin6Line className='h-8 hover:text-red-500' />
            </div>
        )
        
        }
        <div className='flex justify-evenly py-2'>
            <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer ">
                <HiOutlineVideoCamera className='h-8 w-8 text-red-500' size={20}/>
                <p className='font-semibold text-gray-600 '>Live Video</p>
            </div>
            <div 
            onClick={handleClick}
            className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer ">
                <IoMdPhotos className='h-8 w-8 text-green-500' size={20}/>
                <p className='font-semibold text-gray-600 '>Photo/Video</p>
                <input type="file" ref= {hiddenFileInput}  hidden accept="imgae/*" onChange={addImageToPost} />
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