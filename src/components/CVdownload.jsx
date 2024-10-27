import React from 'react'
import { Download } from 'lucide-react'
const CVdownload = () => {
    const handleDownload = () => {
        // Create the link to your CV file (stored in public folder)
        const cvUrl = '../../public/resume.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Ayaz.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
 
    return (
    <div>
        <a className="flex items-center justify-center text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 group relative mx-8 w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-black via-slate-500 to-gray-300 p-[2px] font-bold transition-all duration-300 hover:rounded-2xl active:rounded-xl active:duration-150 sm:mx-16 md:mx-auto md:mr-0 md:mt-16 md:-translate-x-[25%] md:scale-[1.5] md:hover:scale-[1.6] md:active:scale-[1.5] lg:mr-auto lg:translate-x-0" onClick={handleDownload}><span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white/90 px-4 py-2 text-black transition-all duration-300 group-hover:rounded-2xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black" ><Download />Download Resume</span></a>
    </div>
  )
}

export default CVdownload