import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner-2.jpg';

//Icons
import addBasket from '../assets/add-to-basket.svg';
import questionmark from '../assets/circle-questionmark.svg';
import dollar from '../assets/dollar.svg';
import store from '../assets/store.svg';
import cuteRobot from '../assets/cute-robot.svg';
import fileText from '../assets/file-text.svg';
import { AddBasket } from '../icons/AddBasket';
import { Dollar } from '../icons/Dollar';
import { Store } from '../icons/Store';
import { Bot } from '../icons/Bot';
import { QuestionMark } from '../icons/QuestionMark';
import { FileText } from '../icons/FileText';

export default function HomePage() {
  const navigateTo = useNavigate();
  const classIcons =
    'fill-primary max-w-[90%] max-h-[90%] drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)]';
  const list = [
    {
      title: 'Planes',
      img: addBasket,
      link: 'planes',
      icon: AddBasket({ className: classIcons }),
    },
    {
      title: 'Pagos en linea',
      img: dollar,
      link: 'pagos-linea',
      icon: Dollar({ className: classIcons }),
    },
    {
      title: 'Puntos de atención',
      img: store,
      link: 'puntos-atencion',
      icon: Store({ className: classIcons }),
    },
    {
      title: 'Chat-Bot',
      img: cuteRobot,
      link: 'chat-bot',
      icon: Bot({ className: classIcons }),
    },
    {
      title: 'Centro de Soporte',
      img: questionmark,
      link: 'centro-ayuda-soporte',
      icon: QuestionMark({ className: classIcons }),
    },
    {
      title: 'Tramites y Solicitudes',
      img: fileText,
      link: 'tramites',
      icon: FileText({ className: classIcons }),
    },
  ];

  return (
    <>
      <h1 className="text-large font-medium text-center mb-5">Bienvenido</h1>
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-4 max-w-1280 mx-auto px-8 py-4 text-center">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            className="hover:bg-slate-200"
            onPress={() => navigateTo(item.link)}
          >
            <CardBody className="overflow-visible p-0  justify-center items-center mt-2 h-16">
              {item.icon}
            </CardBody>
            <CardFooter className="text-small justify-center ">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="w-full  px-8 py-4 text-center">
        <Image isZoomed alt="NextUI hero Image" src={banner}></Image>
      </div>
    </>
  );
}
