import { Box, Container, Flex, Heading, VStack, Text, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaBurn } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Fitness Tracker</Heading>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} mt={8}>
        {/* Fitness Metrics Section */}
        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Today's Metrics</Heading>
          <Flex justifyContent="space-around" flexWrap="wrap">
            <Box textAlign="center" p={4}>
              <FaRunning size="2em" />
              <Text fontSize="xl" mt={2}>Steps Taken</Text>
              <Text fontSize="2xl" fontWeight="bold">10,000</Text>
            </Box>
            <Box textAlign="center" p={4}>
              <FaBurn size="2em" />
              <Text fontSize="xl" mt={2}>Calories Burned</Text>
              <Text fontSize="2xl" fontWeight="bold">500</Text>
            </Box>
            <Box textAlign="center" p={4}>
              <FaDumbbell size="2em" />
              <Text fontSize="xl" mt={2}>Workouts</Text>
              <Text fontSize="2xl" fontWeight="bold">2</Text>
            </Box>
          </Flex>
        </Box>

        {/* User Input Section */}
        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Log Your Workout</Heading>
          <VStack spacing={4}>
            <Input placeholder="Workout Type (e.g., Running, Weightlifting)" />
            <Input placeholder="Duration (minutes)" type="number" />
            <Button colorScheme="blue" w={isMobile ? "full" : "auto"}>Log Workout</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;