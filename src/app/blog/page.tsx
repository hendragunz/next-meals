import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>This is blogs page</h1>
      <p><Link href="/blog/post-1">Post1</Link></p>
      <p><Link href="/blog/post-2">Post2</Link></p>
    </main>
  );
}