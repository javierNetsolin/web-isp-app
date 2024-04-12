import {Card, CardBody, CardFooter, Image} from "@nextui-org/react"
import { useNavigate } from 'react-router-dom';

//Icons
import addBasket from '../assets/add-to-basket.svg'
import questionmark from '../assets/circle-questionmark.svg'
import dollar from '../assets/dollar.svg'
import store from '../assets/store.svg'
import cuteRobot from '../assets/cute-robot.svg'
import fileText from '../assets/file-text.svg'

export default function HomePage(){
  const navigateTo = useNavigate();
    const list = [
        {
          title: "Planes",
          img: addBasket,
          link:"planes"
          
        },
        {
          title: "Pagos en linea",
          img: dollar,
          link:"pagos-linea"
        },
        {
          title: "Puntos de atención",
          img: store,
          link:"puntos-atencion"
      
        },
        {
          title: "Chat-Bot",
          img: cuteRobot,
          link:"chat-bot"
         
        },
        {
          title: "Centro de Ayuda/soporte",
          img: questionmark,
          link:"centro-ayuda-soporte"
         
        },
        {
          title: "Tramites",
          img: fileText,
          link: "tramites"
        },
       
      ];
    
      return (
        <>
        <h1 className="font-bold text-3xl text-center">Bienvenido</h1>
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-4 max-w-1280 mx-auto px-8 py-4 text-center">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => navigateTo(item.link)}>
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
        </>
      );
}