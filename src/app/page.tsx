"use client";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const ANIMALS = ["bear", "bison", "camel", "cat"];

const STORAGE_KEY = "realtime_chat_username";

const generateUsername = () => {
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `username-${animal}-${nanoid(4)}`;
};

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      let storedUsername = localStorage.getItem(STORAGE_KEY);
      if (!storedUsername) {
        storedUsername = generateUsername();
        localStorage.setItem(STORAGE_KEY, storedUsername);
      }
      setUsername(storedUsername);
    };

    main();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center text-zinc-500">
                Your Identity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-400 font-mono">
                  {username}
                </div>
              </div>
              <button className="w-full bg-zinc-100 text-black p-3 text-sm font-bold hover:bg-zinc-50 hover:text-black transition-colors mt-2 cursor-pointer disabled:opacity-50">
                CREATE SECURE ROOM
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
