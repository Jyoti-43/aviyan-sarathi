import React from 'react';

const PostWithFacebookPlugin = ({ url, width, numPosts }) => {
  return (
    <div className="fb-comments" data-href={url} data-width={width} data-numposts={numPosts}></div>
  );
};

export default PostWithFacebookPlugin;
