export default function CircularCounter({ count }: { count: number }) {
  return (
    <div className="flex items-center justify-center">
      <span>{count}</span>
    </div>
  );
}