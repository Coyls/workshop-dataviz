import Parallax from "../../../components/paralax/paralax";

export default function Tests() {
  return (
    <section>
      <div className=" bg-slate-500 h-96 w-screen"></div>
      <div className=" bg-red-600 h-96 w-screen"></div>
      <Parallax>
        {" "}
        <button>Test paralax</button>{" "}
      </Parallax>
      <div className=" bg-blue-500 h-96 w-screen"></div>
      <div className=" bg-red-600 h-96 w-screen"></div>
    </section>
  );
}
