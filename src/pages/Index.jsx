import { Box, Container, Flex, Heading, VStack, Text, Input, Button, HStack } from "@chakra-ui/react";
import { FaRunning, FaFire, FaDumbbell } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Fitness Tracker</Heading>
        <HStack spacing={4}>
          <Button variant="ghost" color="white">Home</Button>
          <Button variant="ghost" color="white">Metrics</Button>
          <Button variant="ghost" color="white">Log Workout</Button>
        </HStack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} mt={8}>
        {/* Fitness Metrics Section */}
        <Box w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>Today's Metrics</Heading>
          <HStack spacing={8} justifyContent="space-around">
            <VStack>
              <FaRunning size="24px" />
              <Text>Steps Taken</Text>
              <Text fontSize="2xl">10,000</Text>
            </VStack>
            <VStack>
              <FaFire size="24px" />
              <Text>Calories Burned</Text>
              <Text fontSize="2xl">500</Text>
            </VStack>
            <VStack>
              <FaDumbbell size="24px" />
              <Text>Workouts</Text>
              <Text fontSize="2xl">2</Text>
            </VStack>
          </HStack>
        </Box>

        {/* User Input Section */}
        <Box w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>Log Your Workout</Heading>
          <VStack spacing={4}>
            <Input placeholder="Workout Type (e.g., Running, Cycling)" />
            <Input placeholder="Duration (minutes)" />
            <Input placeholder="Calories Burned" />
            <Button colorScheme="blue">Submit</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;