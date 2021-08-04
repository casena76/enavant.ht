import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'

import Colors from 'utils/colors'
import PostInterface from 'interfaces/PostInterface'
import Link from 'next/link'

export default function ArticleCard({ post }: { post: PostInterface }) {
  return (
    <div style={{
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.35)"
    }}>
      <img style={{
        display: "block",
        maxWidth: "100%"
      }} src={post.image_url}
      />

      <div style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
      }}>
        <h3 style={{
          fontSize: 18,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: Colors.blue,
          marginBottom: 15
        }}>{post.title}</h3>
        {/* <h4 style={{
          fontSize: 13,
          color: Colors.gray,
          display: "flex",
          marginBottom: 15
        }}><FaRegCalendarAlt style={{ marginRight: 5 }} /> {post.date} (25 Juin 2020)</h4> */}
        <div style={{
          color: Colors.gray,
          fontSize: 12,
          lineHeight: 1.7
        }}>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <p>
            <Link passHref href="/post/:slug" as={`/post/${post.slug}`}>
              <a style={{ color: Colors.orange, fontWeight: "bold" }}>Lire plus...</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}