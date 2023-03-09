import Image from 'next/image';
import React from 'react'

interface PostItemTypeProps {
  img_thumb: string;
  title: string;
  created_at: string;
  image_author: string;
  name_author: string;
  desc_author: string;
  tags: []
}

const PostItem = ({img_thumb, title, created_at, desc_author, image_author, name_author, tags}: PostItemTypeProps) => {
  return (
    <div className='border rounded p-2 bg-white cursor-pointer hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>
      <div className='drop-shadow-lg'>
        <Image
          className="object-cover"
          src={img_thumb}
          height={100}
          width={1000}
          alt=""
        />
        {/* <p>{description}</p> */}
        <div className='py-2'>
          <h3 className='text-center font-bold text-lg'>{title}</h3>
          <p className='text-center text-sm'>{
            new Date(created_at).toLocaleDateString('vi-VN', {
              day: "numeric",
              month: "long",
              year: "numeric"
            })
          }</p>
          <div className='flex items-center justify-center gap-2 py-3'>
            {tags.map(tag => <span className='p-1 bg-pink-500 rounded text-white'>#{tag}</span>)}
          </div>
          <div className='border-t-2 border-slate-100 pt-1'>
            <p className='py-2 underline text-slate-500'>Author: </p>
            <div className='flex items-center gap-2'>
              <Image
                className='object-cover w-[50px] h-[50px] rounded-full'
                src={image_author}
                alt={name_author}
                height={50}
                width={50}
              />
              <div className='flex items-center'>
                <p>{name_author}</p>
                <p>{desc_author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem
