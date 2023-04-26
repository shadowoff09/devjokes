
async function getJoke() {
  const res = await fetch(
    // Fetch data from API
    `https://backend-omega-seven.vercel.app/api/getjoke`,
    { next: { revalidate: 0 } }
  );
  const data = await res.json();
  return data;
}

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const data = await getJoke();
    // Process a GET request
    res.status(200).json(data);
  } else {
    res.status(405).json({ error: "We only support GET Requests" });
  }
}
