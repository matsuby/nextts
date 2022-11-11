"use client";
import Head from "next/head";
import Image from "next/image";
import { Box, HStack, VStack } from "@chakra-ui/react";

export const Home: React.FC = () => (
  <>
    <Head>
      <title>hello nextts</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <VStack>
      <Box>hello nextts</Box>
      <HStack>
        <Box>box1</Box>
        <Box>box2</Box>
        <Box>box3</Box>
      </HStack>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </VStack>
  </>
);
