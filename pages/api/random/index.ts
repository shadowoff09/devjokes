import { url } from "inspector";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // pick from a folder a random image and return it
    const images = fs.readdirSync("public/images");
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imageUrl = `/images/${randomImage}`;

    return res.status(200).json({ "image": imageUrl });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Not authorized" });
  }
}
