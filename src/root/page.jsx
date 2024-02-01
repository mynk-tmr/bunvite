import { HeartIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

const HomePage = () => {
  return (
    <article className="text-3xl text-blue-600 mx-auto w-fit font-exbold">
      <h1>Welcome ...</h1>
      <HeartIcon className="w-16 animate-pulse" />
      <Button>Material UI</Button>
    </article>
  );
};

export default HomePage;
