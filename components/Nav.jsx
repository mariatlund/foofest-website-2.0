import React from "react";
import Logo from "../assets/foofest-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav(props) {
  const router = useRouter();

  function clickTickets() {
    props.resetOrderInfo();
    router.push("/tickets/step1");
  }

  return (
    <nav>
      <Link href={"/"}>
        <Image src={Logo} alt="Foofest logo" className="logo" />
      </Link>
      <button className={"primary"} onClick={clickTickets}>
        Get tickets
      </button>
    </nav>
  );
}

export default Nav;
