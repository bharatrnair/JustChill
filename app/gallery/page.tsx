import Image from "next/image";

const Gallery = () => {
  return (
    <div className="grid gap-4">
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src={
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          }
          alt=""
          width={500}  
          height={500}
          layout="responsive"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
            width={500} 
            height={500}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
            width={500} 
            height={500}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
            width={500} 
            height={500}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
            width={500}  
            height={500}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
