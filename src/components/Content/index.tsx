
const Content = ({children}: any) => {
  return (
    <section
      className="
      p-6
      bg-slate-300
      row-span-3
      col-span-2
      min-w-screen
      min-h-screen
    "
    >
      {children}
    </section>
  );
}

export default Content