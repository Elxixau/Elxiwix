export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/videoplayback.mp4" type="video/mp4" />
        Browsermu tidak mendukung video tag.
      </video>

      {/* Lapisan Hitam Semi Transparan */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
    </div>
  );
}
