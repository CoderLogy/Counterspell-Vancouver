import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import Head from "next/head";

import Hero from "../components/Vancouver/Hero";
import About from "../components/Vancouver/About";
import Guilds from "../components/Vancouver/Guilds";
import Steps from "../components/Vancouver/Steps";
import Locations from "../components/Vancouver/Locations";
import Faq from "../components/Vancouver/Faq";
import Footer from "../components/Vancouver/Footer";
import SecEmail from "../components/Vancouver/secEmail";
import Teamgallery from "../components/Vancouver/Teamgallery";

export default function Vancouver() {
  const [docHeight, setDocHeight] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const [play, { stop }] = useSound("/music.mp3", { volume: isMuted ? 0 : 1 });

  useEffect(() => {
    setDocHeight(document.documentElement.scrollHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  const audioRef = useRef(null);

  function toggleMute() {
    if (isMuted) {
      play();
    } else {
      stop();
    }
    setIsMuted(!isMuted);
  }

  return (
    <>
      <Head>
        <title>Counterspell Vancouver</title>
      </Head>
      <div>
        <div
          className="fixed bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-t from-darker from-20% to-transparent z-10 motion-safe:transition-all"
          style={{ opacity: docHeight - scrollPos < 1000 ? "0" : "100" }}
        ></div>
        <div
          style={{
            zIndex: 999,
          }}
          className="fixed bottom-3 right-3"
        >
          <div
            className="flex items-center justify-center border-2 rounded-full bg-darker border-pink size-12"
            onClick={toggleMute}
          >
            {!isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            )}
          </div>
        </div>
        <audio ref={audioRef} loop autoPlay>
          <source src="/music.mp3" type="audio/mp3" />
        </audio>
        <a
          className="fixed z-50 hidden px-3 py-2 text-white uppercase sm:block top-4 right-4 retro bg-pink hover:scale-105 hover:text-white"
          href="https://forms.hackclub.com/t/sdMpoL7wK9us"
          target="_blank"
          style={{ textDecorationLine: "none" }}
        >
          Sign Up!
        </a>
        <Hero />

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 pointer-events-none -bottom-4 grainy-bg"></div>
          <div className="absolute top-0 left-0 right-0 -bottom-4 -z-10 bg-dark"></div>

          <About />
          <Guilds />
          <Steps />
          <Locations />

          <div className="min-h-[700px] py-8 bg-[#2A385A] flex flex-col justify-evenly items-center">
            <div>
              <div className="uppercase text-3xl Sponser text-white font-semibold text-center retro mb-3">
                Help Us Bring the Magic By Being A Sponsor
              </div>
              <div className="text-2xl Sponser text-white font-semibold text-center fusion-pixel mb-8">
                If you are interested in becoming a sponsor, please contact us
                at vancouver@counterspell.hackclub.com
              </div>

              <SecEmail />
            </div>
            <div className="flex flex-wrap justify-center space-y-5 pt-5">
              <img
                src="/city/Vancouver/sponsers/visst.jpg"
                alt="VISST Logo"
                className="m-5 lg:w-[500px] h-[200px] sm:h-[200px] md:h-[260px] p-6 flex-shrink-0 rounded-[14px] bg-[#1A2F57] hover:bg-[#0D3059] transition-shadow duration-1000 hover:shadow-[20px_20px_4px_0px_rgba(0,255,255,0.88)] transform sm:scale-[0.9925]"
                style={{imageRendering: "auto"}}
              />

              <img
                src="/city/Vancouver/sponsers/ltt.jpg"
                alt="Linus Tech Tips Logo"
                className="m-5  lg:w-[500px] h-[200px] sm:h-[200px] md:h-[260px] p-6 flex-shrink-0 rounded-[14px] bg-[#1A2F57] hover:bg-[#0D3059] transition-shadow duration-1000 hover:shadow-[20px_20px_4px_0px_rgba(0,255,255,0.88)] transform sm:scale-[0.9925]"
                style={{imageRendering: "auto"}}
              />

              <img
                src="/city/Vancouver/sponsers/hackclub.png"
                alt="hackclub Logo"
                className="p-6 m-5 w-[200px] sm:w-[250px] md:w-[250px] lg:w-[250px] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[250px] flex-shrink-0 rounded-[14px] bg-[#1A2F57] hover:bg-[#0D3059] transition-shadow duration-1000 hover:shadow-[20px_20px_4px_0px_rgba(0,255,255,0.88)] transform sm:scale-[0.9925]"
                style={{imageRendering: "auto"}}
              />
            </div>
          </div>

          <div className="bg-[#00001E] flex flex-col justify-center py-12 text-center faq fusion-pixel">
            <div className="m-6">
              <p className="mb-6 text-5xl uppercase">
                Frequently Asked Questions
              </p>
              <div className="flex justify-center">
                <Faq />
              </div>
            </div>
          </div>
        </div>
        <Teamgallery />
        <Footer />

        <svg width="0" height="0" className="block">
          <filter id="grainy" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency=".5" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        </svg>
      </div>
    </>
  );
}