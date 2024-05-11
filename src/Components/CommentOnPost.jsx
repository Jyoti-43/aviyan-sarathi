
import React, { useEffect } from 'react';

const CommentOnPost = ({ selectedPost }) => {
  const loadFacebookSDK = () => {
    if (typeof window !== 'undefined') {
      // Load the Facebook SDK asynchronously
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: 'YOUR_FACEBOOK_APP_ID',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v13.0',
        });
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  };

  useEffect(() => {
    loadFacebookSDK();
  }, []);
  useEffect(() => {
    // Use window.FB after SDK initialization
    if (typeof window !== 'undefined' && window.FB) {
      // Example: Log in the user
      window.FB.login(function (response) {
        if (response.authResponse) {
          console.log('User logged in successfully:', response.authResponse);
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  }, []);

  return (
    <div>
      {selectedPost && (
        <>
          <div className="post-meta">
            <span className="date">{selectedPost.category}</span>{' '}
            <span className="mx-1">&bullet;</span>{' '}
            <span>{selectedPost.date}</span>
          </div>
          <h1 className="mb-5">{selectedPost.title}</h1>
          <p>{selectedPost.content}</p>
          <figure className="my-4">
            {/* Your video or image rendering code */}
          </figure>
          {/* Facebook Comment Plugin */}
          {/* <div
            className="fb-comments"
            data-href={window.location.href}
            data-width=""
            data-numposts="5"
            data-order-by="time"
          ></div> */}
        </>
      )}
    </div>
  );
};

export default CommentOnPost;

// ---------------------------------------------------

// // import React from 'react';

// // const PostWithFacebookPlugin = ({ selectedPost, sortedPosts }) => {
// //   const renderFacebookPlugin = () => {
// //     if (typeof window !== 'undefined') {
// //       // Load the Facebook SDK asynchronously
// //       window.fbAsyncInit = function () {
// //         FB.init({
// //           appId: 'YOUR_FACEBOOK_APP_ID',
// //           autoLogAppEvents: true,
// //           xfbml: true,
// //           version: 'v13.0',
// //         });
// //       };
// //       (function (d, s, id) {
// //         var js,
// //           fjs = d.getElementsByTagName(s)[0];
// //         if (d.getElementById(id)) return;
// //         js = d.createElement(s);
// //         js.id = id;
// //         js.src = 'https://connect.facebook.net/en_US/sdk.js';
// //         fjs.parentNode.insertBefore(js, fjs);
// //       })(document, 'script', 'facebook-jssdk');
// //     }
// //   };

// //   React.useEffect(() => {
// //     renderFacebookPlugin();
// //   }, []);

// //   return (
// //     <div className="single-post">
// //       {selectedPost ? (
// //         <>
// //           <div className="post-meta">
// //             <span className="date">{selectedPost.category}</span>{' '}
// //             <span className="mx-1">&bullet;</span>{' '}
// //             <span>{selectedPost.date}</span>
// //           </div>
// //           <h1 className="mb-5">{selectedPost.title}</h1>
// //           <p>{selectedPost.content}</p>
// //           <figure className="my-4">
// //             <div className="video-fluid">
// //               {/* Your ReactPlayer code */}
// //             </div>
// //             <figcaption>{selectedPost.imageCaption}</figcaption>
// //           </figure>
// //           {/* Facebook Like, Comment, and Share buttons */}
// //           <div
// //             className="fb-like"
// //             data-href={window.location.href}
// //             data-width=""
// //             data-layout="standard"
// //             data-action="like"
// //             data-size="small"
// //             data-share="true"
// //           ></div>
// //           <div
// //             className="fb-comments"
// //             data-href={window.location.href}
// //             data-width=""
// //             data-numposts="5"
// //             data-order-by="time"
// //           ></div>
// //         </>
// //       ) : (
// //         // Display default post if selectedPost is not available
// //         <>
// //           <div className="post-meta">
// //             <span className="date">Culture</span>{' '}
// //             <span className="mx-1">&bullet;</span>{' '}
// //             <span>{sortedPosts[0]?.date}</span>
// //           </div>
// //           <h1 className="mb-5">{sortedPosts[0].title}</h1>
// //           <p>{sortedPosts[0]?.content}</p>
// //           <figure className="my-4">
// //             <img
// //               src={sortedPosts[0]?.image}
// //               alt=""
// //               className="img-fluid"
// //             />
// //             <figcaption>{sortedPosts[0]?.imageCaption}</figcaption>
// //           </figure>
// //           {/* Facebook Like, Comment, and Share buttons */}
// //           <div
// //             className="fb-like"
// //             data-href={window.location.href}
// //             data-width=""
// //             data-layout="standard"
// //             data-action="like"
// //             data-size="small"
// //             data-share="true"
// //           ></div>
// //           <div
// //             className="fb-comments"
// //             data-href={window.location.href}
// //             data-width=""
// //             data-numposts="5"
// //             data-order-by="time"
// //           ></div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default PostWithFacebookPlugin;
