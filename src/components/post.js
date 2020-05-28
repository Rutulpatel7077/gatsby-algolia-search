import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"

const Post = ({ hit }) => {
  const title = hit.frontmatter.title || hit.fields.slug
  const slug = hit.fields.slug

  return (
    <article key={slug}>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={slug}>
            {title}
          </Link>
        </h3>
      </header>
      <small>{hit.date}</small>
      <section>
        {/* <p
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
        /> */}
        <p>
          <Highlight tagName="mark" hit={hit} attribute="excerpt" />
        </p>
      </section>
    </article>
  )
}

export default Post
