import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10"> Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album1.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album2.jpg"
                width={104}
                height={104}
                alt="Capa do álbum 1989 da cantora americana Taylor Swift"
              />
              <strong>1989</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album3.jpg"
                width={104}
                height={104}
                alt="Capa do álbum de estúdio intitulado X, do cantor e compositor inglês Ed Sheeran."
              />
              <strong>X</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album4.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Purpose do cantor Justin Bieber"
              />
              <strong>Purpose</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album5.jpg"
                width={104}
                height={104}
                alt="Capa do álbum A Head Full of Dreams da banda Coldplay."
              />
              <strong>A Head Full of Dreams</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album6.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Ten da banda Pearl Jam"
              />
              <strong>Ten</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10"> Made for you</h2>

          <div className="grid grid-cols-7 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album1.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album2.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum 1989 da cantora americana Taylor Swift"
              />
              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-sm text-zinc-400">
                Taylor Swift, Olivia Rodrigo, Selena Gomez and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album3.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum de estúdio intitulado X, do cantor e compositor inglês Ed Sheeran."
              />
              <strong className="font-semibold">Daily Mix 3</strong>
              <span className="text-sm text-zinc-400">
                Ed Sheeran, Bruno Mars, Sam Smith and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album4.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Purpose do cantor Justin Bieber"
              />
              <strong className="font-semibold">Daily Mix 4</strong>
              <span className="text-sm text-zinc-400">
                Justin Bieber, ZAYN, Shawn Mendes and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album5.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum A Head Full of Dreams da banda Coldplay."
              />
              <strong className="font-semibold">Daily Mix 5</strong>
              <span className="text-sm text-zinc-400">
                Coldplay, OneRepublic, Oasis and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album6.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Ten da banda Pearl Jam"
              />
              <strong className="font-semibold">Daily Mix 6</strong>
              <span className="text-sm text-zinc-400">
                Pearl Jam, Stone Temple Pilots, Soundgarden and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album7.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum In A Perfect World da banda Kodaline"
              />
              <strong className="font-semibold">Daily Mix 7</strong>
              <span className="text-sm text-zinc-400">
                Kodaline, Seafret, Passenger and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
