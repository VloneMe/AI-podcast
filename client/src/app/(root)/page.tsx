  import { PodcastCard } from '@/components/PodcastCard'
import { Button } from '@/components/ui/button'
import { podcastData } from '@/constants'
import React from 'react'

export default function Home() {
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>

        <div className='podcast_grid'>
          {podcastData.map(({id, title, imgURL, description}) => (
            <PodcastCard  key={id}
                          podcastId={id}
                          title={title}
                          imgURL={imgURL}
                          description={description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
