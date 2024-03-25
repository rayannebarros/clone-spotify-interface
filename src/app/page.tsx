import { Footer } from "@/components/Footer";
import { Album } from "@/components/Album";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { Playlist } from "@/components/Playlist";

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
            <Album
              src="/album1.jpg"
              alt="Capa do álbum Wasting Light da banda Foo Fighters"
              albumName="Wasting Light"
            />

            <Album
              src="/album2.jpg"
              alt="Capa do álbum 1989 da cantora americana Taylor Swift"
              albumName="1989"
            />

            <Album
              src="/album3.jpg"
              alt="Capa do álbum de estúdio intitulado X, do cantor e compositor inglês Ed Sheeran."
              albumName="X"
            />

            <Album
              src="/album4.jpg"
              alt="Capa do álbum Purpose do cantor Justin Bieber"
              albumName="Purpose"
            />

            <Album
              src="/album5.jpg"
              alt="Capa do álbum A Head Full of Dreams da banda Coldplay."
              albumName="A Head Full of Dreams"
            />

            <Album
              src="/album6.jpg"
              alt="Capa do álbum Ten da banda Pearl Jam"
              albumName="Ten"
            />
          </div>

          <h2 className="font-semibold text-2xl mt-10"> Made for you</h2>

          <div className="grid grid-cols-7 gap-4 mt-4">
            <Playlist
              src="/album1.jpg"
              alt="Capa do álbum Wasting Light da banda Foo Fighters"
              playlistName="Daily Mix 1"
              artist=" Wallows, COIN, girl in red and more"
            />

            <Playlist
              src="/album2.jpg"
              alt="Capa do álbum 1989 da cantora americana Taylor Swift"
              playlistName="Daily Mix 2"
              artist="Taylor Swift, Olivia Rodrigo, Selena Gomez and more"
            />

            <Playlist
              src="/album3.jpg"
              alt="Ed Sheeran, Bruno Mars, Sam Smith and more"
              playlistName="Daily Mix 3"
              artist="Capa do álbum de estúdio intitulado X, do cantor e compositor inglês Ed Sheeran."
            />

            <Playlist
              src="/album4.jpg"
              alt="Capa do álbum Purpose do cantor Justin Bieber"
              playlistName="Daily Mix 4"
              artist="Justin Bieber, ZAYN, Shawn Mendes and more"
            />

            <Playlist
              src="/album5.jpg"
              alt="Capa do álbum A Head Full of Dreams da banda Coldplay."
              playlistName="Daily Mix 5"
              artist="Coldplay, OneRepublic, Oasis and more"
            />

            <Playlist
              src="/album6.jpg"
              alt="Capa do álbum Ten da banda Pearl Jam"
              playlistName="Daily Mix 6"
              artist="Pearl Jam, Stone Temple Pilots, Soundgarden and more"
            />

            <Playlist
              src="/album7.jpg"
              alt="Capa do álbum In A Perfect World da banda Kodaline"
              playlistName="Daily Mix 7"
              artist="Kodaline, Seafret, Passenger and more"
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
