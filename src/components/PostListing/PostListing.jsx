import React from "react";
import { Link } from "gatsby";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {
            /* Your post list here. */
            postList.map((post) => (
              <div class="p-4 lg:w-1/3">
                <Link to={post.path} key={post.title}>
                  <div class="h-full bg-gray-100 bg-opac</Link>ity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {post.title}
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default PostListing;


