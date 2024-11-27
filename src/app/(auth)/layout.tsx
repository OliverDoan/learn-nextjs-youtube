export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>AuthLayout</div>
      {children}
    </div>
  );
}
