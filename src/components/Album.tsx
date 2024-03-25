import Image from "next/image";
import { Play } from "lucide-react";

interface AlbumProps {
  src: string;
  alt: string;
  albumName: string;
}

export function Album({ src, alt, albumName }: AlbumProps) {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
    >
      <Image src={src} width={104} height={104} alt={alt} />
      <strong>{albumName}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play fill="bg-black" />
      </button>
    </a>
  );
}
