
import React, { useState } from "react";
import axios from "axios";

import { Download } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Sprockets = ({ count = 20 }) => (
  <div className="flex justify-between px-3 py-2 bg-stone-200">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="w-2 h-2 rounded-full bg-stone-50" />
    ))}
  </div>
);

const ASPECTS = [
  { label: "Square", value: "1:1" },
  { label: "Portrait", value: "3:4" },
  { label: "Landscape", value: "4:3" },
  { label: "Wide", value: "16:9" },
];

const STYLES = ["Natural", "Cinematic", "Illustration", "Black & white"];

// --- Replace this with your real generation API call ---
// It should accept the prompt/options and resolve to an image URL (or blob).


// export async function generateImage({
//   prompt,
//   aspect,
//   style,
// }) {
//  // const prompt = prompt.trim();
//   console.log("Generating image with prompt:", prompt, "aspect:", aspect, "style:", style);

//   const response = await axios.post(

//     "http://localhost:3000/api/generate",
//     {
//       prompt,
//       aspect,
//       style,
//     },
//     {
//       responseType: "blob",
//     }
//   );

//   return URL.createObjectURL(response.data);
// }


const API_BASE = import.meta.env?.VITE_API_BASE || "http://localhost:3000";




export async function generateImage({ prompt, aspect, style }) {
 //  console.log("Generating image with prompt:", prompt, "aspect:", aspect, "style:", style);

 

  // const response = await axios.post(
  //   "http://localhost:3000/api/generate",
  //   { prompt, aspect, style },
  //   { responseType: "blob" }
  // );



  const response = await axios.post(
  `${API_BASE}/api/generate`,
  { prompt, aspect, style },
  {
    responseType: "blob",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
);

  const blob = response.data;
  const url = URL.createObjectURL(blob);
  const extension = blob.type.split("/")[1] || "png"; // e.g. "png", "jpeg", "webp"

 

  return { url, extension, blob };
}



const handleDownload = async (frame) => {
  try {
    const response = await fetch(frame.url); // blob URLs fetch instantly, no network call
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `darkroom-${frame.id}.${frame.extension || "png"}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error("Download failed:", err);
    setError("Couldn't download this frame.");
  }
};


// ---------------------------------------------------------

const Generate = () => {
  const [prompt, setPrompt] = useState("");
  const [aspect, setAspect] = useState("1:1");
  const [style, setStyle] = useState("Natural");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [frames, setFrames] = useState([]); // { id, prompt, style, url }

    const { user ,  setUser } = useAuth();

    const handleGenerate = async () => {
  const trimmed = prompt.trim();

  if (!trimmed || isGenerating) return;

  if (user?.framesRemaining <= 0) {
    setError("No credits left.");
    return;
  }

  setIsGenerating(true);
  setError(null);

  try {
    const { url, extension } = await generateImage({
      prompt: trimmed,
      aspect,
      style,
    });

    // Get updated credits
    const creditResponse = await creditRes();

    const updatedUser = {
      ...user,
      framesRemaining: creditResponse.data.framesRemaining,
    };

    setUser(updatedUser);

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setFrames((prev) => [
      {
        id: Date.now(),
        prompt: trimmed,
        style,
        url,
        extension,
      },
      ...prev,
    ]);

  } catch (e) {
    console.error(e);
    setError("Couldn't develop that frame. Try again.");
  } finally {
    setIsGenerating(false);
  }
};

const creditRes = async () => {
  return await axios.get(
    `${API_BASE}/api/generate/credit`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

const handleKeyDown = (e) => {
  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
    handleGenerate();
  }
};



 
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-600 mb-3 font-mono">
            Darkroom
          </p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-indigo-600">
            Develop a new frame.
          </h1>
          <p className="text-stone-500 leading-relaxed">
            Describe what you want to see. Every generation uses one frame
            from your monthly roll.
          </p>
        </div>

        {/* Contact sheet of results */}
        {(frames.length > 0 || isGenerating) && (
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-mono mb-4">
              Contact sheet
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {isGenerating && (
                <div className="aspect-square bg-stone-100 rounded-sm ring-1 ring-stone-200 flex items-center justify-center animate-pulse">
                  <span className="text-xs text-stone-400 font-mono">
                    developing…
                  </span>
                </div>
              )}

              {/* {frames.map((f) => (
                <div
                  key={f.id}
                  className="bg-white rounded-sm ring-1 ring-stone-200 overflow-hidden group"
                >
                  <img
                    src={f.url}
                    alt={f.prompt}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-3">
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {f.prompt}
                    </p>
                    <p className="text-[10px] uppercase tracking-wide text-stone-400 font-mono mt-1">
                      {f.style}
                    </p>
                  </div>
                </div>
              ))} */}


            

{frames.map((f) => (
  <div
    key={f.id}
    className="bg-white rounded-sm ring-1 ring-stone-200 overflow-hidden group relative"
  >
    <img
      src={f.url}
      alt={f.prompt}
      className="w-full aspect-square object-cover"
    />

    {/* Download button, shows on hover */}
    <button
      onClick={() => handleDownload(f)}
      className="absolute top-2 right-2 p-2 rounded-sm bg-white/90 text-stone-600 opacity-100  hover:text-indigo-600"
      title="Download frame"
    >
      <Download size={14} />
    </button>

    <div className="p-3">
      <p className="text-xs text-stone-600 line-clamp-2">{f.prompt}</p>
      <p className="text-[10px] uppercase tracking-wide text-stone-400 font-mono mt-1">
        {f.style}
      </p>
    </div>
  </div>
))}
            </div>
          </div>
        )}

        {/* Prompt panel */}
        <div className="bg-white rounded-sm ring-1 ring-stone-200 overflow-hidden mb-4">
          <Sprockets />
          <div className="p-6">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="A lighthouse at dusk, storm rolling in from the sea, long exposure..."
              rows={4}
              className="w-full resize-none bg-transparent text-stone-900 placeholder-stone-400 focus:outline-none text-base font-serif leading-relaxed"
            />

            <div className="mt-5 flex flex-wrap items-center gap-6">
              {/* Aspect ratio */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">
                  Frame
                </span>
                <div className="flex gap-1">
                  {ASPECTS.map((a) => (
                    <button
                      key={a.value}
                      onClick={() => setAspect(a.value)}
                      className={
                        "px-2.5 py-1 text-xs rounded-sm border transition " +
                        (aspect === a.value
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-stone-200 text-stone-500 hover:border-stone-300")
                      }
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">
                  Style
                </span>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="text-xs border border-stone-200 rounded-sm px-2 py-1 text-stone-600 bg-white focus:outline-none focus:border-stone-400"
                >
                  {STYLES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1" />

         <button
  onClick={handleGenerate}
  disabled={
    !prompt.trim() ||
    isGenerating ||
    !user ||
    (user.framesRemaining ?? 0) <= 0
  }
  className={`px-5 py-2.5 rounded-md font-medium text-sm transition ${
    !user || (user.framesRemaining ?? 0) <= 0
      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
      : "bg-indigo-600 text-white hover:bg-indigo-700"
  }`}
>
  {isGenerating ? "Developing..." : "Generate"}
</button>
            </div>

            {error && (
              <p className="mt-3 text-xs text-red-600 font-mono">{error}</p>
            )}
          </div>
          <Sprockets />
        </div>

        <p className="text-xs text-stone-400 font-mono mb-12">
          Tip: Ctrl/Cmd + Enter to generate.
        </p>
      </div>
    </div>
  );
};

export default Generate;
