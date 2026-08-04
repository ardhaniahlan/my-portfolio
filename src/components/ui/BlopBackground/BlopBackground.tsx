interface BlobConfig {
  color: string;
  size: string;
  position: string;
  delay?: string;
}

interface BlobBackgroundProps {
  blobs?: BlobConfig[];
  className?: string;
}

const defaultBlobs: BlobConfig[] = [
  {
    color: "bg-emerald-400/30 dark:bg-emerald-500/20",
    size: "w-72 h-72",
    position: "top-[-10%] left-[-5%]",
  },
  {
    color: "bg-teal-300/30 dark:bg-teal-500/20",
    size: "w-80 h-80",
    position: "top-[20%] right-[-10%]",
    delay: "animation-delay-1500",
  },
  {
    color: "bg-emerald-300/20 dark:bg-emerald-600/15",
    size: "w-96 h-96",
    position: "bottom-[-15%] left-[30%]",
    delay: "animation-delay-3000",
  },
];

export const BlobBackground = ({
  blobs = defaultBlobs,
  className = "",
}: BlobBackgroundProps) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute rounded-full blur-3xl animate-blob ${blob.color} ${blob.size} ${blob.position} ${blob.delay ?? ""}`}
        />
      ))}
    </div>
  );
};