"use client";
import { useEffect, useState, useMemo } from "react";
import { Phone, MapPin, Share2, MessageCircle } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "./ui/carousel";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

const Gallery3 = ({ images }: GalleryProps) => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);


  const mainImage = useMemo(
    () =>
      images.map((image, index) => (
        <CarouselItem key={index} className="relative aspect-video w-full h-[500px] md:w-screen md:h-screen">
          <Image
            src={image}
            alt={`Carousel Main Image ${index + 1}`}
            fill
            className='object-cover ml-4'
          />
            <div className='absolute h-screen top-0 bg-black md:opacity-40 opacity-60 w-full'></div>

            <div className="absolute md:top-1/2 top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
              <img
                src="/Image/mainmiddle.jpeg"
                alt="고시원 썸네일"
                className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full mx-auto mb-4"
              />
              <div className="text-[22px] md:text-[20px] md:w-screen w-[300px] font-bold text-[#fff] whitespace-pre-line">
                강대리빙텔 강대고시텔 고시원
              </div>
              <p className="text-[15px] md:text-base text-[#ffffff99]">
                춘천고시텔, 강대리빙텔, 강대고시텔, 춘천고시원, 강대고시원
              </p>
              <div className="mt-2"></div>

               <div className="md:hidden block grid grid-cols-4 p-4 text-center">
                  <a href="tel:01012345678" className="flex flex-col items-center hover:text-blue-400">
                     <button className="bg-[#7f88e8] mb-1 flex items-center justify-center w-[44px] h-[44px] xs:w-11 xs:h-11 text-white rounded-full shadow-lg transition-transform hover:scale-110" 
                    >
                    <Phone className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-[13px] text-[rgba(255,255,255,.7)]">전화문의</span>
                  </a>
                  <a href="https://maps.google.com/?q=강대리빙텔" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-blue-400">
                     <button className="bg-[#7f88e8] mb-1 flex items-center justify-center w-[44px] h-[44px] xs:w-11 xs:h-11 text-white rounded-full shadow-lg transition-transform hover:scale-110" 
                    >
                    <MapPin className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-[13px] text-[rgba(255,255,255,.7)]">오시는길</span>
                  </a>
                  <a href="https://example.com/share" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-blue-400">
                    <button className="bg-[#7f88e8] mb-1 flex items-center justify-center w-[44px] h-[44px] xs:w-11 xs:h-11 text-white rounded-full shadow-lg transition-transform hover:scale-110" 
                    >
                    <Share2 className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-[13px] text-[rgba(255,255,255,.7)]">공유</span>
                  </a>
                  <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-blue-400">
                    <button className="bg-[#7f88e8] mb-1 flex items-center justify-center w-[44px] h-[44px] xs:w-11 xs:h-11 text-white rounded-full shadow-lg transition-transform hover:scale-110" 
                    >
                    <MessageCircle className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-[13px] text-[rgba(255,255,255,.7)]">카톡문의</span>
                  </a>
                </div>
            </div>

            
                   
        </CarouselItem>
      )),
    [images],
  );


  useEffect(() => {
    if (!mainApi || !thumbnailApi) {
      return;
    }

    const handleTopSelect = () => {
      const selected = mainApi.selectedScrollSnap();
      setCurrent(selected);
      thumbnailApi.scrollTo(selected);
    };

    const handleBottomSelect = () => {
      const selected = thumbnailApi.selectedScrollSnap();
      setCurrent(selected);
      mainApi.scrollTo(selected);
    };

    mainApi.on("select", handleTopSelect);
    thumbnailApi.on("select", handleBottomSelect);

    return () => {
      mainApi.off("select", handleTopSelect);
      thumbnailApi.off("select", handleBottomSelect);
    };
  }, [mainApi, thumbnailApi]);

  const handleClick = (index: number) => {
    if (!mainApi || !thumbnailApi) {
      return;
    }
    thumbnailApi.scrollTo(index);
    mainApi.scrollTo(index);
    setCurrent(index);
  };

  return (
    <div className="w-full sm:w-auto">
      <Carousel setApi={setMainApi}>
        <CarouselContent>{mainImage}</CarouselContent>
         <Carousel className="absolute right-1 bottom-0 pr-2" setApi={setThumbnailApi}>
      </Carousel>      
      </Carousel>
    </div>
  );
};


export default Gallery3;