import prisma from "./prisma";

export const getCrates = async () => {
  const crates = await prisma.crate.findMany({
    // select: {
    //   id: true,
    //   name: true,
    // },
  });

  return crates;
};
