import Image from 'next/image';
import React from 'react'


interface PodcastProps {
    podcastId: number;
    title: string;
    imgURL: string;
    description: string
}

export const PodcastCard = (
    { podcastId, title, imgURL, description }: PodcastProps
) => {
  return (
    <div className='cursor-pointer'>
        <figure className='flex flex-col gap-2'>
            <Image  src={imgURL}
                    alt={title}
                    width={174}
                    height={174}
                    className='aspect-square w-full rounded-xl h-fit 2xl:size-[200px]'
            />
            <div className='flex flex-col'>
                <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
                <h2 className='text-12 truncate font-normal capitalize text-white-4'
                >{description}</h2>
            </div>
        </figure>
    </div>
  )
}