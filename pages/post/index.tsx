import React from 'react'
import axios from 'axios'
import { client } from '@/services'
import PostItem from '@/components/PostItem'
import { useQuery } from '@apollo/client'
import GET_POSTS from '@/models/getListPosts'
import clientApolo from '@/services/apoloClient'

interface Post {
  id: string
  createdAt: string
  slug: string
  title: string
  content: {
    html: string
  }
  tags: [],
  coverImage: {
    url: string
  },
  author: {
    biography: string
    name: string
    picture: {
      url: string
    }
  }
}
type Props = {
  posts: Post[]
}

const PostPage = ({posts}: Props) => {
  return (
    <div className='grid grid-cols-3 gap-2 p-2'>
      {posts.map(post => (
        <PostItem
          img_thumb={post.coverImage.url}
          created_at={post.createdAt}
          title={post.title}
          key={post.id}
          image_author={post.author.picture.url}
          desc_author={post.author.biography}
          name_author={post.author.name}
          tags={post.tags}
        />
      ))}
    </div>
  )
}

export default PostPage

export async function getStaticProps() {
  const { data } = await clientApolo.query({
    query: GET_POSTS
  });

  return {
    props: {
      posts: data.posts
    }, // will be passed to the page component as props
  }
}
