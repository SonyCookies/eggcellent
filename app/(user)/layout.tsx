import UserNavigation from "../components/user/UserNavigation";
import Footer from "../components/user/Footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
