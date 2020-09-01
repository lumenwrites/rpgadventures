import React from 'react'
import { Link } from "gatsby"


export default function PostBox({ title, description, slug, image }) {
  return (
    <Link className="post-box" to={slug}>
      {image}
      {/* <div className="image-wrapper">
        <div className="thumbnail" style={{ background: `url('${image}')` }} />
      </div> */}
      <section className="description">
        <div className="title">{title}</div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </section>
    </Link>
  )
}

