import FakeData from "@/Shared/FakeData"
import CarItem from "./CarItem"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const MostSearchedCar = () => {

// console.log(FakeData.carList)

  return (
    <div className="mx-24">
        <h2 className="font-bold text-3xl text-center my-16">Most Searched Cars</h2>

        <Carousel>
            <CarouselContent>
                {/* <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem> */}
                {FakeData.carList.map((car, index) => (
                    // to show 4 items in the carousel at a time
                    <CarouselItem key={index} className="basis-1/4"> 
                        <CarItem car={car} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>


        
    </div>
  )
}

export default MostSearchedCar