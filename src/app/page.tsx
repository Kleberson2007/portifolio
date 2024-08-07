import Link from "next/link";
import style from "/app/style.css"

export default function Home() {
  return (
  <>
  <button className="botao1"><Link href={"/about"}>Nada aqui</Link></button>
  </>
  );
}
