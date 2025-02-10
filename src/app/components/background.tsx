import Image from "next/image";

interface InfoSectionProps {
  title: string;
  content: string[];
  imageUrl: string;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ title, content, imageUrl }) => {
  return (
    <section className="container mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center my-32">
      
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">{title}</h2>
          {content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        
        <div className="w-full jsudtify-end">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className=" h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
