"use client";
import Image from "next/image";
import { Box, HStack, VStack } from "@chakra-ui/react";

export const Home: React.FC = () => (
  <VStack>
    <Box>hello nextts</Box>
    <HStack>
      <Box>box1</Box>
      <Box>box2</Box>
      <Box>box3</Box>
    </HStack>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  </VStack>
);
