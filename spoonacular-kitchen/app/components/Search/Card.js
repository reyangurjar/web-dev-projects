import Link from "next/link"

const Card = ({name,img,id}) => {
  return (
    <div className="card card-compact w-60 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt={name + "image"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-center">
     <Link className="btn btn-primary w-full" href={`/recipe/${id}`}>Make Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
