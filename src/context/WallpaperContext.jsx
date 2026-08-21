import { createContext, useContext, useState } from 'react';
import cat from '../assets/images/cat.png';
import bliss from '../assets/images/windows.jpg';
import snowflakes from "../assets/images/snowflakes.jpg";
import frog from "../assets/images/frog.jpg";
import windows10 from "../assets/images/windows10.jpg";
import windows11wall from "../assets/images/windows11wall.jpg";
import sm from "../assets/images/sm.jpg";
import cr7 from "../assets/images/cr7.jpg";

export const wallpapers = [
  { id: 'default', label: 'Default', src: cat },
  { id: 'bliss', label: 'Bliss', src: bliss },
  { id: 'sm', label: 'sm', src: sm },
  { id: 'cr7', label: 'cr7', src: cr7 },
  { id: 'windows10', label: 'windows10', src: windows10 },
  { id: 'windows11wall', label: 'windows11wall', src: windows11wall },
];

const WallpaperContext = createContext(null);

export function WallpaperProvider({ children }) {
  const [wallpaper, setWallpaper] = useState(wallpapers[0]);
  return (
    <WallpaperContext.Provider value={{ wallpaper, setWallpaper }}>
      {children}
    </WallpaperContext.Provider>
  );
}

export function useWallpaper() {
  const ctx = useContext(WallpaperContext);
  if (!ctx) throw new Error('useWallpaper must be used inside WallpaperProvider');
  return ctx;
}
