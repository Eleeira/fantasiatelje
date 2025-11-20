// src/components/YoutubeEmbed.jsx
export default function YoutubeEmbed({ videoId, title }) {
  return (
    <div className="relative w-full pb-[56.25%] overflow-hidden rounded-none border border-white/10 bg-black/40 shadow-ft-soft">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ULEzK9V0128?si=BnOlT0_htLCW1WyN" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen>
</iframe>
    </div>
  )
}
