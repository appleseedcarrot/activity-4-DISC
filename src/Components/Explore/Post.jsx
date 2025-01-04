import './Post.css'

export default function Post({filter, description, picture_url}) {

  return (
    <div class="post">
      <div class="post-image"> 
        <img src={picture_url} />
      </div>
      <div class="post-filters"> 
        <p> {filter} </p>
        <p> {description} </p> 
      </div>
    </div>
  );
}