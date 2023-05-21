// ** Component Imports
import Home from "@/components/Home";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Main() {
  // This is only for testing purposes
  // In the event that we are going to add something like check server status..
  // We are forcing a loading time.
  await wait(500);

  return (
    <main>
      <Home />
    </main>
  );
}
