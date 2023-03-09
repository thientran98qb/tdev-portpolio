import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query MyQuery {
    posts(orderBy: createdAt_DESC) {
      title
      tags
      slug
      createdAt
      coverImage {
        id
        url
      }
      content {
        html
      }
      id
      author {
        biography
        name
        picture {
          url
        }
      }
    }
  }
`
export default GET_POSTS
