import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="hr.svg"
            height={32}
            width={40}
            alt="Croatian"
            className="mr-4 rounded-md"
          />
          Croation
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="es.svg"
            height={32}
            width={40}
            alt="Spanish"
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="it.svg"
            height={32}
            width={40}
            alt="Italian"
            className="mr-4 rounded-md"
          />
          Croation
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="fr.svg"
            height={32}
            width={40}
            alt="French"
            className="mr-4 rounded-md"
          />
          French
        </Button>

        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="jp.svg"
            height={32}
            width={40}
            alt="Japaneese"
            className="mr-4 rounded-md"
          />
          Japaneese
        </Button>
      </div>
    </footer>
  );
};
