export const DarkLayout = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
        border: "1px solid white",
      }}
    >
      {children}
    </div>
  );
};
