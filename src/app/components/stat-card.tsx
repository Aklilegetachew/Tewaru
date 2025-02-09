interface StatCardProps {
  label: string;
  value: string;
  className?: string;
}

export function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div className={className}>
      <div className="text-white text-5xl font-bold mb-2">{value}</div>
      <div className="text-primary uppercase">{label}</div>
    </div>
  );
}
