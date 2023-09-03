import ClipLoader from "react-spinners/ClipLoader";
import dynamic from "next/dynamic";
export default function Home() {
  const MapBox = dynamic(() => import("@/components/map/map"), {
    loading: () => <ClipLoader color="#4D8CD5" />,
  });
  return <MapBox />;
}
