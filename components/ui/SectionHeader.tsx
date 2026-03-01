interface SectionHeaderProps {
  title: string;
  description?: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {description && (
        <p className="text-base md:text-lg text-gray-500 mt-2 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
