import { motion } from "framer-motion";
import { useLanyard } from "use-lanyard";

const Spotify = () => {
  const { data: user } = useLanyard("116730818822537225");

  if (!user || !user.spotify) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
      className="fixed bottom-0 left-0 w-full h-16 bg-black/50 backdrop-blur-md flex flex-row items-center justify-center z-[1000] border-t border-slate-800/30"
    >
      <div className="flex flex-row items-center justify-center">
        <img
          src={user.spotify.album_art_url}
          alt="Spotify Album Art"
          className="w-12 h-12 rounded-md"
        />
        <div className="flex flex-col ml-2">
          <p className="text-white font-semibold text-sm">{user.spotify.song}</p>
          <p className="text-gray-300 text-xs">{user.spotify.artist}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center ml-4">
        <motion.div
          className="w-3 h-3 rounded-full mr-1"
          style={{ background: "rgba(100, 200, 100)" }}
        />
        <p className="text-white font-semibold text-sm">Listening to Spotify</p>
      </div>
    </motion.div>
  );
};

export default Spotify;
