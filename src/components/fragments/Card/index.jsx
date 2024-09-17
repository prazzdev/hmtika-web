import Link from "next/link";

export default function Card({
  redirectTo,
  thumbnail,
  category,
  title,
  description,
}) {
  let target;
  if (redirectTo == undefined) {
    target = "";
  } else {
    target = redirectTo;
  }
  return (
    <Link
      href={target}
      className="relative bg-gray-200 shadow-md mb-8 p-6 rounded-lg lg:min-w-[20svw] lg:max-w-[20svw] lg:min-h-[54svh] text-gray-800"
    >
      <img
        src={thumbnail}
        alt=""
        className="rounded-md w-full max-w-[300px] h-[180px] object-center object-cover"
      />
      <div className="mt-6 mb-2">
        <span className="block mb-1 font-bold text-pteal text-xs uppercase tracking-widest">
          {category}
        </span>
        <h2 className="font-semibold text-pgray text-xl tracking-wide">
          {title}
        </h2>
      </div>
      <p className="text-justify text-sgray text-sm">{description}</p>
    </Link>
  );
}
