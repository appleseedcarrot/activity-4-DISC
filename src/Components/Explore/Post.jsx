import './Post.css'

export default function Post({filter}) {

  return (
    <div className={"post"}>
      <div className={"post-image"}> </div>
      <div className={"post-filters"}> <p> {filter} </p> </div>
    </div>
  );
}