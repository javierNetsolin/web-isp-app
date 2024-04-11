import {Card, CardBody, CardFooter, Image} from "@nextui-org/react"

//Icons
import addBasket from '../assets/add-to-basket.svg'
import questionmark from '../assets/circle-questionmark.svg'
import dollar from '../assets/dollar.svg'
import store from '../assets/store.svg'
import cuteRobot from '../assets/cute-robot.svg'
import fileText from '../assets/file-text.svg'

export default function HomePage(){
    const list = [
        {
          title: "Planes",
          img: addBasket,
          
        },
        {
          title: "Pagos en linea",
          img: dollar,
         
        },
        {
          title: "Puntos de atención",
          img: store,
      
        },
        {
          title: "Chat-Bot",
          img: cuteRobot,
         
        },
        {
          title: "Centro de Ayuda/soporte",
          img: questionmark,
         
        },
        {
          title: "Tramites",
          img: fileText,
    
        },
       
      ];
    
      return (
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-4 max-w-1280 mx-auto px-8 py-4 text-center">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between text-center">
                <b className="text-center">{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
}