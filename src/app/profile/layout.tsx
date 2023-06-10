import ProfileHeader from "@/components/ProfileHeader";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ProfileHeader />
      {children}
    </div>
  );
}
