import Link from "next/link";

import Footer from "../components/Footer";
import Header from "../components/Header";
import IconButton from "../components/IconButton";
import FormCreateBottle from "../components/FormCreateBottle";
import FormCreateCrate from "../components/FormCreateCrate";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import prisma from "../lib/prisma";

import { getCrates } from "../lib/crates";

export const getBottles = async () => {
  const bottles = await prisma.bottle.findMany({
    // where: { published: true },
    include: {
      crate: {
        select: { id: true, name: true },
      },
    },
  });
  return bottles;
};

// export const createBottle = async (message, crateId) => {
//
// };

export default async function Page() {
  // const [crates, setCrates] = useState([]);
  const crates = (await getCrates()) || [];
  console.log("crates", crates);

  return (
    <div className={"page"}>
      <div className={"container"}>
        <Header />

        <p>Crates</p>
        {crates && (
          <ul>
            {crates.map((crate) => {
              return (
                <li key={crate.name}>
                  <Link href={"crates/" + crate.name}>{crate.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
        {crates.length === 0 && <p>No crates found.</p>}

        <FormCreateBottle crates={crates} />
        <FormCreateCrate />
        <IconButton icon={faArrowRight} color={"blue"} />

        <Footer />
      </div>
    </div>
  );
}
