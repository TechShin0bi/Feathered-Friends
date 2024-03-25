import { CarouselItem } from "@/types/common";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ClientFeedbackItem: React.FC<CarouselItem> = ({ feedback, id, imageUrl, name, rating }) => {
  return (
    <div className="flex flex-col items-center p-2 md:h-64 md:w-64">
      <Image
        src={imageUrl}
        alt={name}
        height={100}
        width={100}
        className="h-28 w-20 rounded-md"
        // className="w-20 h-20 rounded-full"
      />
      <div className="text-lg font-bold text-black">{name}</div>
      <Rating
        initialRating={rating}
        emptySymbol={<FaStar className="far fa-star text-gray-400" />}
        fullSymbol={<FaStar className="fas fa-star text-yellow-500" />}
        readonly
      />
      <div className="text-gray-700 font-light self-start">{feedback}</div>
    </div>
  );
};

export default ClientFeedbackItem