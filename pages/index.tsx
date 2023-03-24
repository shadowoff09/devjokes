import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Jokes from "@/components/Jokes";
import LoadingSpinner from "@/components/LoadingSpinner";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState({question: "", punchline: ""}); // Set initial state
  const [isLoading, setLoading] = useState(false); // Set initial state

  async function getJoke() {
    setLoading(true); // Show spinner
    const res = await fetch( // Fetch data from API
      `https://backend-omega-seven.vercel.app/api/getjoke`,
      { next: { revalidate: 0 } }
    ); 
    const data = await res.json(); // Convert to JSON
    setJoke(data[0]); // Set joke
    setLoading(false); // Hide spinner
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Jokes */}
      <div className="flex flex-col mt-60 ">
        <div className="text-center">
          <Button text="Get a Joke 😂" onClick={getJoke} />
        </div>
        <div className="flex justify-center items-center">
          {isLoading ? (
              <LoadingSpinner />
          ) : (
            // check if joke is empty}
            joke.question ? (
              <Jokes question={joke.question} punchline={joke.punchline} />
            ) : (
              <h1 className="text-2xl font-bold text-white mt-5 mx-5">Click above to get a joke!</h1>
            )
            
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
