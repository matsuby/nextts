export default async function DatePage() {
  const now = new Date();
  return <p>{now.toISOString()}</p>;
}
