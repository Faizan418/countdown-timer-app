import Image from "next/image";

export default function Home() {
  return (
   <div className="main-home-page">
     <Image src="/images/home-page-image.jpg" alt="Home Page Image" width={1920} height={1080} />
     <h1>Welcome to My Next.js App</h1>
     <p>This is the home page.</p>
     <a href="/about">About Us</a>
     <a href="/contact">Contact Us</a>
   </div>
  );
}
