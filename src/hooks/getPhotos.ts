import { getPhotos } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export const useGetPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const awardData = await getPhotos();
      setPhotos(awardData);
    };

    fetchData();
  }, []);

  return photos;
};
