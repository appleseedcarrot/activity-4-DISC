import './Post.css'

export default function Post({filter, description, picture_url}) {

  return (
    <div className={"post"}>
      <div className={"post-image"}> 
        <img src={picture_url} />
      </div>
      <div className={"post-filters"}> 
        <p> {filter} </p>
        <p> {description} </p> 
      </div>
    </div>
  );
}