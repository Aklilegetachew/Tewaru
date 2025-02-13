export function CTASection() {
  return (
    <section className="relative py-32">
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#FF9F2D] to-[#FFB660]"
        aria-hidden="true"
      />
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Importing Quality Today
          </h2>
          <p className="text-white/90">
            Ready to bring the best to your business? Lets get started.
          </p>
          <button className="mt-8 bg-black text-white py-3 px-6 rounded-lg">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}
