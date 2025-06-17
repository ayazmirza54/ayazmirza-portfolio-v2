import React from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { Server } from "lucide-react";
import { DiScriptcs } from "react-icons/di";
import { FaServer } from "react-icons/fa";
const Projects = () => {
  return (
    <div id="projects" className="portfolio-container">
      <div className="text-2xl md:text-2xl font-extrabold capitalize mb-8"><h1>🕸️Webdev × AI🤖 Projects</h1></div>

      {/* Main Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card 1 */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-5 h-full">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="https://opengraph.b-cdn.net/production/images/d2191f8c-f07c-494b-854b-281f67c52b6e.png?token=QK8jkkzV7j7xvYLQdz4UvUYMfRqlyDzGNER8TCVsP8c&height=1013&width=1200&expires=33271056025"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight">
                  Text to Content AI
                </h1>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                Text to Content AI is an AI-powered tool that converts text into content. It uses the Gemini API to generate content based on the text input.
              </p>
              <div className="flex flex-row justify-center text-center gap-4">
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://texttocontent.vercel.app/"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    🔗 Live Link
                  </span>
                </a>
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/text-to-content-ai/"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    <Github size={12} />
                    Github Link
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-5 h-full">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="/project_2.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight">
                  Intellisketch : AI powered drawing tool 🖌️
                </h1>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                IntelliSketch is an AI-powered drawing app that uses Google
                Gemini API to interpret and solve mathematical sketches and
                graphical problems in real-time. By combining Excalidraw's
                canvas with Gemini's analytical capabilities, it offers an
                interactive way to solve equations and understand abstract
                drawings.
              </p>
              <div className="flex flex-row justify-center text-center gap-4">
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://intellisketch.vercel.app/"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    🔗 Live Link
                  </span>
                </a>
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/intellisketch/"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    <Github size={12} />
                    Github Link
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-5 h-full">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="/project_1.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight">
                  Text/Code Utils.AI
                </h1>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                Text and Code Utilities: AI-enhanced tool by Google Gemini,
                offering streamlined text analysis and code generation.
              </p>
              <div className="flex flex-row justify-center text-center gap-4">
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://text-code-util-aiprod.vercel.app/"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    🔗 Live Link
                  </span>
                </a>
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/text-code-util.aiprod/"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    <Github size={12} />
                    Github Link
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>



        {/* Card 4 */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-5 h-full">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="/project_4.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-xl md:text-xl  font-bold tracking-tight">
                  Chat2pdf using gemini
                </h1>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                AI-powered app for conversational PDF interaction using Gemini
                and LangChain.
              </p>
              <div className="flex flex-row justify-center text-center gap-4">
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://chat2pdf-using-gemini.streamlit.app/"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    🔗 Live Link
                  </span>
                </a>
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/chat2pdf-using-gemini"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    <Github size={12} />
                    Github Link
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>




      </div>
      <div className="text-2xl md:text-4xl font-extrabold capitalize mb-8"><h1>Devops Projects</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card 5 */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-5 h-full">
          <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="/unixbot.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-xl md:text-2xl font-bold tracking-tight">
                  📜 UnixBot
                </h1>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                UnixBot is a chatbot that can be used to chat about unix commands. It uses the Gemini API to generate responses. You can ask it about any unix command and it will give you the answer.
              </p>
              <div className="flex flex-row justify-center text-center gap-4">
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://unix-bot.streamlit.app/"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    🔗 Live Link
                  </span>
                </a>
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/unixbot"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    <Github size={12} />
                    Github Link
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-5 h-full">
          <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="/query-smith.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight">
                  ⚒️ QuerySmith
                </h1>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                QuerySmith is a chatbot that can be used to generate SQL queries. It uses the Gemini API to generate responses. You can ask it about any database and it will give you the answer.
              </p>
              <div className="flex flex-row justify-center text-center gap-4">
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://query-smith.streamlit.app/"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    🔗 Live Link
                  </span>
                </a>
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/chat-with-db"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    <Github size={12} />
                    Github Link
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-5 h-full">
          <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="/ec2-control.gif"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight flex justify-center items-center gap-4">
                  <FaServer size={30} /> EC2 Manager TUI
                </h1>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                A CLI tool to manage EC2 instances. It uses the AWS SDK for Python to interact with the AWS API.
              </p>
              <div className="flex flex-row justify-center text-center gap-4">
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/ec2-manager-tui"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    🔗 Live Link
                  </span>
                </a>
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/ec2-manager-tui"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    <Github size={12} />
                    Github Link
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card 8 */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-5 h-full">
          <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="/keep-alive.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight">
                  📌 Keep Alive EC2 Script
                </h1>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                This script keeps an EC2 instance alive by pinging it every 10 minutes.
              </p>
              <div className="flex flex-row justify-center text-center gap-4">
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/pingservice"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    <Github size={12} /> Github Link
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card 9 */}
        <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
          <div className="bg-black rounded-lg p-5 h-full">
          <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="/system-metrics.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight">
                  System Metrics Logging Script
                </h1>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                This script logs system metrics (CPU usage and memory usage) to
                a PostgreSQL database hosted on Render at regular intervals.
              </p>
              <div className="flex flex-row justify-center text-center gap-4">
                <a
                  className="text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150"
                  href="https://github.com/ayazmirza54/system-metrics-monitoring-script"
                >
                  <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-2 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
                    <Github size={12} /> Github Link
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Other Noteworthy Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Small Project Card 1 */}
          <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
            <div className="bg-black rounded-lg p-4 h-full hover:bg-black/90 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-lg font-semibold mb-2">Studysensie</h1>
                  <p className="text-sm text-white mb-4">
                    Quiz Generator using Gemini AI API
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/ayazmirza54/studysensei/"
                    className="hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://studysensei.vercel.app/"
                    className="hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-800 rounded">React</span>
                <span className="px-2 py-1 bg-gray-800 rounded">
                  TailwindCSS
                </span>
                <span className="px-2 py-1 bg-gray-800 rounded">
                  Gemini AI API
                </span>
              </div>
            </div>
          </div>

          {/* Small Project Card 2 */}
          <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
            <div className="bg-black rounded-lg p-4 h-full hover:bg-black/90 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-lg font-semibold mb-2">Movie-Finder</h1>
                  <p className="text-sm text-white mb-4">
                    Movie Finder app using the the Movie Database API
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/ayazmirza54/movie-finder"
                    className="hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://movie-finder-lake-six.vercel.app/"
                    className="hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-800 rounded">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-gray-800 rounded">HTML/CSS</span>
                <span className="px-2 py-1 bg-gray-800 rounded">
                  Movie Database API
                </span>
              </div>
            </div>
          </div>

          {/* Small Project Card 3 */}
          <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
            <div className="bg-black rounded-lg p-4 h-full hover:bg-black/90 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-lg font-semibold mb-2">
                    Stone-Paper-Scissor-Game
                  </h1>
                  <p className="text-sm text-white mb-4">
                    Stone Paper Scissor Game using React and TailwindCSS
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://rock-paper-scrissors.netlify.app/"
                    className="hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-800 rounded">HTML/CSS</span>
                <span className="px-2 py-1 bg-gray-800 rounded">
                  JavaScript
                </span>
              </div>
            </div>
          </div>

          {/* Small Project Card 4 */}
          <div className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
            <div className="bg-black rounded-lg p-4 h-full hover:bg-black/90 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-lg font-semibold mb-2">
                    Quote-Generator
                  </h1>
                  <p className="text-sm text-white mb-4">
                    Quote Generator using an external API
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://quote-generator-live.netlify.app"
                    className="hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-800 rounded">React</span>
                <span className="px-2 py-1 bg-gray-800 rounded">NodeJS</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Axios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
