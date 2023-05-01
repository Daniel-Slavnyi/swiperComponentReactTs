import { SwiperOne } from "./components/SwiperOne/SwiperOne";

const listOfPhotos = [
  {
    id: 1,
    src: "/photos/1.jpg",
    preview: "/photos/preview/1.jpg",
    description: "Bridge and lace",
  },
  {
    id: 2,
    src: "/photos/2.jpg",
    preview: "/photos/preview/2.jpg",
    description: "Forest and morning",
  },
  {
    id: 3,
    src: "/photos/3.jpg",
    preview: "/photos/preview/3.jpg",
    description: "San Francisco and red bridge",
  },
  {
    id: 4,
    src: "/photos/4.jpg",
    preview: "/photos/preview/4.jpg",
    description: "The Earth",
  },
  {
    id: 5,
    src: "/photos/5.jpg",
    preview: "/photos/preview/5.jpg",
    description: "Elephant in forest",
  },
  {
    id: 6,
    src: "/photos/6.jpg",
    preview: "/photos/preview/6.jpg",
    description: "Space universe",
  },
  {
    id: 7,
    src: "/photos/7.jpg",
    preview: "/photos/preview/7.jpg",
    description: "Mountains",
  },
];

function App() {
  return (
    <>
      <SwiperOne photos={listOfPhotos} />
    </>
  );
}

export default App;
