import steps from "./steps";
import { Button } from "@/components/ui/button";
import StepImage from "@/components/StepImage";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-5 justify-center items-center py-20 max-w-screen-lg mx-auto px-5">
        <h1 className="text-3xl font-bold">ChadGPT Showcase</h1>

        {steps.map((step) => {
          if (step.type == "image") {
            return <StepImage key={step.id} link={step.link} id={step.id} />
          } else {
            return <StepVideo key={step.id} link={step.link} id={step.id} />
          }
        })}
      </main>
      <footer className="flex justify-center items-center pb-10">
        <h1>website by&nbsp;
          <a href="https://github.com/nabeelv7" target="_blank" className="underline">nabeel</a>
        </h1>
      </footer>
    </>
  );
}


export function StepVideo({ link, id }) {
  return (
    <div>
      <div className="flex items-center justify-between py-5 w-full">
        <h1 className="text-2xl font-medium">{id}.</h1>
        <Button asChild>
          <a href={link} download>Download</a>
        </Button>
      </div>
      <video controls width={1920} height={1080} crossOrigin="anonymous">
        <source src={link} type="video/mp4" />
        Your browser does not support the html video tag
      </video>
    </div>
  )
}