const commentFormHandler = async function (event) {
  event.preventDefault();
  const blog_id = document.querySelector('.new-comment-form').dataset.blogid;
  const comment_description = document
    .querySelector('#comment_description')
    .value.trim();
  if (comment_description) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        blog_id,
        comment_description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Post added.');
    document.location.reload();
  }
};
//when user clicks to add new comment, it is saved to table in reference to its parent post
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
