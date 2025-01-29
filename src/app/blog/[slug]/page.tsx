export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>This is detail blog page</h1>
      <p>
        {params.slug}
      </p>
    </main>
  );
}