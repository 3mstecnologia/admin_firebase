import Image from "next/image";
export default function Logo() {
  return (
    <div
      className={`
    flex felx-col justify-center items-center w-20 gap-y-20
    rounded-full
    `}
    >
      <Image
        className={`
    flex felx-col justify-center items-center w-20 gap-y-20
    rounded-full
    `}
        src="https://www.uniplaclages.edu.br/assets/img/logo.png"
        alt="Logo da Uniplac"
        width={200}
        height={200}
      ></Image>
    </div>
  );
}
