import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Cards = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((response) => response.json())
      .then((data) => setApiData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-20 mx-3 md:mt-28 lg:mx-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-center">
      {apiData &&
        apiData.map((item, index) => (
          <Card key={index} className="mt-6 w-96 shadow-none">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/400,/0/default.jpg`}
                alt="card-image"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </CardHeader>
            <CardBody className="rounded-xl text-black">
              <Typography variant="h5" className="mb-2">
                {item.artist_display || "Autor desconocido"}
              </Typography>
              <Typography variant="h5" className="mb-2">
                {item.title || "Titulo desconocido"}
              </Typography>
              <Typography className=" font-medium lg:text-sm">
                {item.short_description || "Descripción no disponible"}
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
