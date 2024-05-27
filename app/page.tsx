import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Image
        src="/images/profile.jpg"
        alt="Your Name"
        width={144}
        height={144}
      />
      <Link href="/posts">Posts</Link>
      <Link href="/product">Product</Link>
    </div>
  );
}
