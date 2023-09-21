import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          <div className="">
            <span>Published by </span>
            <a target="_blank" href={`https://github.com/${post.user}`}>{post.user}</a>
          </div>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
