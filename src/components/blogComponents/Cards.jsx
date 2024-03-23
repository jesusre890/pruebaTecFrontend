import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import {useEffect,useState} from "react";

const Cards=() => {
  const [apiData,setApiData]=useState([]);
  
  //useEffect(() => {
  //  fetch(import.meta.env.VITE_APP_API)
  //    .then((response) => response.json())
  //    .then((data) => setApiData(data.articles))
  //    .catch((error) => console.error("Error fetching data:", error));
  //},[]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setApiData(data.slice(0, 10))) // Limitando a 10 elementos
      .catch((error) => console.error("Error fetching data:", error));
  },[]);

  return (
    <div className="mt-20 mx-3 md:mt-28 lg:mx-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-center">
      {apiData &&
        apiData.map((item, index) => (
          <Card key={index} className="mt-6 w-96 shadow-none">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                //src={item.urlToImage}
                src={item.thumbnailUrl}
                alt="card-image"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </CardHeader>
            <CardBody className="rounded-xl text-black">
              {/*<Typography variant="h5" className="mb-2">
                {item.author || "Autor desconocido"}
              </Typography>*/}
              <Typography className=" font-medium lg:text-sm">
                {item.title || "Titulo desconocido"}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="rounded-3xl bg-[#ac4245] text-sm text-center py-1 px-7 font-normal">
                CONOCER MÁS
              </Button>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default Cards;
