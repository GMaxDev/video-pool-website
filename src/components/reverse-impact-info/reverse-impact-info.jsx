/* eslint-disable react/prop-types */

export default function ReverseImpactInfo({ title, content, imgSrc }) {
  return (
    <div className="bg-gray-100 grid grid-cols-7 grid-rows-7 h-[37rem] gap-x-4">
      <div className="col-start-5 col-end-7 row-start-2 row-end-7 ">
        <img
          className="rounded-3xl h-full w-full object-cover"
          src={imgSrc}
          alt=""
        />
      </div>

      <h3 className="col-start-2 col-end-4 row-start-3 row-end-5 text-5xl font-semibold">
        {title}
      </h3>

      <p className="col-start-2 col-end-4 row-start-5 row-end-6">{content}</p>
    </div>
  );
}
