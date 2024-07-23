import ClientForm from "@/components/forms/ClientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex gap-x-2 items-center ">
            <Image
              src="/assets/icons/logo-icon.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="h-10 w-fit"
            />
            <div className="">
              <h1 className="uppercase">Patitas al rescate</h1>
            </div>
          </div>

          <ClientForm />

          <div className="text-14-regular flex justify-between mt-6">
            <p className="justify-items-end text-dark-600 xl:text-left">
              @ 2024 PatitasAlRescate
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        alt="onboarding"
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
