import { motion } from "framer-motion";
import {
  SiCss3, SiExpress, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql,
  SiNextdotjs as SiNextJs, SiNodedotjs as SiNodeJs, SiReact, SiTypescript,
  SiVisualstudiocode, SiYarn
} from "react-icons/si";

import PositionItem from "@components/PositionItem";
import PartnersItem from "@components/PartnersItem";
import RepoItem from "@components/RepoItem";
import { TechItem } from "@components/TechItem";

interface AppProps {
  stats: Record<string, number>;
  topRepos: Record<any, any>;
}

const partners = [
  {
    name: "TicketTool",
    description: "Your #1 Ticketing Platform for your discord server support tickets and helpdesk management.",
    image: "https://cdn.mythbot.org/img/dev_023par99.png",
    url: "https://tickettool.xyz"
  },
  {
    name: "Zap-Hosting",
    description: "You number one EU server hosting provider for your community and more with 99.99% uptime.",
    url: "https://zap-hosting.com/joker",
    image: "https://cdn.mythbot.org/img/dev_qjzvxpxj.png"
  },
  {
    name: "Partnership",
    description: "Would you like to become partners with me? Get in touch with me on discord or via email.",
    url: "https://discord.gg/Q6ZSW63Fpw",
    image: "https://cdn.mythbot.org/img/dev_p5ehn3ax.gif"
  }
],

positions = [
  {
    name: "SpaceTurtlesRP",
    description: "SpaceTurtlesRP is a FiveM roleplay server with a focus on community building and roleplay.",
    rank: "Moderator",
    url: "https://spaceturtl.es"
  },
  {
    name: "OblivionYT",
    description: "We are a YouTube channel dedicated to the game Oblivion.",
    rank: "Chat Moderator",
    url: "https://oblivionrust.com"
  },
  {
    name: "Hire Me",
    description: "Loyal staff member & experienced!",
    rank: "Looking to be hired, Contact Me!",
    url: "https://discord.gg/Q6ZSW63Fpw"
  }
],

  Index = ({ stats, topRepos }: AppProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className="mt-24 w-full"
      >
        <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Tom 👋</h1>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
        Verified Discord Bot Developer & Full Stack Web Developer
        </p>

        <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
        <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
        I am Tom (JoKeR#0001) . 30 y/o Inspired Developer/Software Engineer , Verified Discord Bot Developer , and Web Developer 
        </p>
        <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
          <TechItem icon={SiTypescript} name="TypeScript" />
          <TechItem icon={SiJavascript} name="JavaScript" />
          <TechItem icon={SiHtml5} name="HTML5" />
          <TechItem icon={SiCss3} name="CSS3" />
          <TechItem icon={SiVisualstudiocode} name="VSCode" />
          <TechItem icon={SiReact} name="React.js" />
          <TechItem icon={SiNodeJs} name="Node.js" />
          <TechItem icon={SiYarn} name="Yarn" />
          <TechItem icon={SiExpress} name="Express" />
          <TechItem icon={SiNextJs} name="Next.js" />
          <TechItem icon={SiGit} name="Git" />
          <TechItem icon={SiMongodb} name="MongoDB" />
          <TechItem icon={SiMysql} name="MySQL" />
        </div>

        <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
        <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
          In my free time, I enjoy creating open source projects on{" "}
          <a
            href="https://github.com/JoKeRxTD"
            rel="noreferrer"
            className="font-semibold text-violet-500 hover:underline"
          >
            GitHub
          </a>
          , so I can learn from others and showcase what I know. In total, all of my open sourced projects have
          earned me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on
          GitHub, and <span className="font-bold text-black dark:text-slate-200">{stats.forks}</span> forks. Below
          are some of my most popular repositories.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
          {topRepos.map((repo: Record<string, any>) => {
            return (
              <RepoItem
                key={repo.name}
                name={repo.name}
                description={repo.description}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                language={repo.language}
              />
            );
          })}
        </div>

        <h2 className="font-medium text-3xl mb-4">Current Positions 🏢</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
          {positions.map((pos: Record<string, any>) => {
            return (
              <PositionItem
                key={pos.name}
                name={pos.name}
                description={pos.description}
                rank={pos.rank}
                url={pos.url}
              />
            );
          })}
        </div>
        <h2 className="font-medium text-3xl mb-4">Current Partnerships 🤝</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-6">
          {partners.map((pos: Record<string, any>) => {
            return (
              <PartnersItem
                key={pos.name}
                name={pos.name}
                description={pos.description}
                url={pos.url} 
                image={pos.image}              
              />
            );
          })}
        </div>
        <section id="get-in-touch" data-aos="fade-up" className="rounded-lg bg-white/10 dark:bg-black/10 border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
            <span>Want to Hire me or just a General Inquiry, Please get in touch!</span>
            <a href="/contact" rel="noreferrer" className="border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600">Contact Me</a>
        </section>
      </motion.div>
    );
  };

export async function getStaticProps() {
  const stats = await fetch("https://api.github-star-counter.workers.dev/user/jokerxtd").then(res => res.json()),
    repos = await fetch("https://api.github.com/users/jokerxtd/repos?type=owner&per_page=100").then(res => res.json()),
    topRepos = repos
      .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4);

  return {
    props: { stats, topRepos },
    revalidate: 3600
  };
}

export default Index;
