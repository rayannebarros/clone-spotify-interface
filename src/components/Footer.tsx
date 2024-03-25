import {
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/album1.jpg"
          width={56}
          height={56}
          alt="Capa do álbum Wasting Light da banda Foo Fighters"
        />
        <div className="flex flex-col gap-1">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-500">Foo Fighters</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play fill="bg-black" />
          </button>

          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">1:25</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 rounded-full w-28 bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-500">4:19</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
