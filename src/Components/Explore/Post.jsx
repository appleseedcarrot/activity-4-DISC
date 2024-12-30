import './Post.css'

export default function Post({filter}) {

  return (
    <div class="post">
      <div class="post-image"> </div>
      <div class="post-filters"> <p> {filter} </p> </div>
    </div>
  );
}