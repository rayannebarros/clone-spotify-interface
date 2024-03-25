import Image from "next/image";

interface PlaylistProps {
  src: string;
  alt: string;
  playlistName: string;
  artist: string;
}

export function Playlist({ src, alt, playlistName, artist }: PlaylistProps) {
  return (
    <a
      href=""
      className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <Image src={src} className="w-full" width={120} height={120} alt={alt} />
      <strong className="font-semibold">{playlistName}</strong>
      <span className="text-sm text-zinc-400">{artist}</span>
    </a>
  );
}
