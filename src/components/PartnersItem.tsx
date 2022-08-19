import { motion } from "framer-motion";
// import Image from "next/image";

interface RepoProps {
  name: string;
  description: string;
  image: string;
  url: string;
}

const PartnersItem = ({ name, description, image, url }: RepoProps) => {
  return (
    <a href={url} rel="noreferrer" target="_blank" className="PartnersItem">
      <div className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
        <h1 className="flex items-center m-1 font-semibold mb-1">
          <motion.div
              className="w-3 h-3 rounded-full mr-1"
              style={{ background: "rgba(100, 200, 100)" }}
            />
            {name}
        </h1>
        <p className="text-sm text-gray-800/70 dark:text-gray-100/70">{description}</p>
        <div className="mt-auto grid justify-items-center text-gray-700 dark:text-gray-300 text-sm ">
          <img src={image} width={52} height={52}  className="rounded-full justify-center m-6"/>
        </div>
      </div>
    </a>
  );
};

export default PartnersItem;
