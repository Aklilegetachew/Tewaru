interface IdCardSectionProps {
  title: string;
  highlightedWord: string;
  mainHeading: string;
  description: string;
  additionalText?: string;
  imageUrl?: string;
}

export default function IdCardSection({
  title,
  highlightedWord,
  mainHeading,
  description,
  additionalText,
  imageUrl,
}: IdCardSectionProps) {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
          {title} <span className="text-orange-500">{highlightedWord}</span>
          
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              {mainHeading}
            </h2>

            <p className="text-gray-700 leading-relaxed">{description}</p>

            {additionalText && (
              <p className="text-gray-700 leading-relaxed">{additionalText}</p>
            )}
          </div>

          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl || "/placeholder.svg"}
                alt="ID Card Printing Solutions"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
