
export default function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="mb-12">
      <p className="section-subtitle">{subtitle}</p>

      <h2 className="section-heading">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-gray-400 max-w-2xl leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
