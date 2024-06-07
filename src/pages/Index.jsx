import { Container, Box, VStack, Text, Heading, Button, HStack, SimpleGrid, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { FaCheckCircle, FaRocket, FaBook, FaUserTie, FaQuestionCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} fontFamily="Poppins">
      {/* Hero Section */}
      <Box as="section" textAlign="center" py={20} bgGradient="linear(to-r, gray.300, gray.500)">
        <Heading as="h1" size="2xl" mb={4} color="black">
          Welcome to Caipa
        </Heading>
        <Text fontSize="xl" mb={6} color="black">
          Custom Artificial Intelligent Process Management
        </Text>
        <Button size="lg" colorScheme="yellow" bg="#FCB535" color="black">
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box as="section" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Features
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack>
            <FaRocket size="3em" color="#FCB535" />
            <Text fontSize="lg" fontWeight="bold">
              Fast Implementation
            </Text>
            <Text textAlign="center">Deploy our AI solutions quickly and efficiently.</Text>
          </VStack>
          <VStack>
            <FaBook size="3em" color="#FCB535" />
            <Text fontSize="lg" fontWeight="bold">
              Comprehensive Documentation
            </Text>
            <Text textAlign="center">Detailed guides to help you every step of the way.</Text>
          </VStack>
          <VStack>
            <FaUserTie size="3em" color="#FCB535" />
            <Text fontSize="lg" fontWeight="bold">
              Expert Support
            </Text>
            <Text textAlign="center">Our team is here to assist you 24/7.</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Use-cases Section */}
      <Box as="section" py={20} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Use-cases
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzE3ODA0NjYxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Business Meeting" />
            <Text fontSize="lg" fontWeight="bold">
              Business Automation
            </Text>
            <Text textAlign="center">Streamline your business processes with AI.</Text>
          </VStack>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzE3ODA0NjYzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Data Analysis" />
            <Text fontSize="lg" fontWeight="bold">
              Data Analysis
            </Text>
            <Text textAlign="center">Gain insights from your data with our AI tools.</Text>
          </VStack>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MHx8fHwxNzE3ODA0NjY2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer Support" />
            <Text fontSize="lg" fontWeight="bold">
              Customer Support
            </Text>
            <Text textAlign="center">Enhance customer satisfaction with AI-driven support.</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* CTA Section */}
      <Box as="section" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={6}>
          Book a Free Consulting Hour
        </Heading>
        <Button size="lg" colorScheme="yellow" bg="#FCB535" color="black">
          Book Now
        </Button>
      </Box>

      {/* Product Section */}
      <Box as="section" py={20} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Product Suite
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1705096953495-8ea06879b986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTc4MDQ2Njh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 1" />
            <Text fontSize="lg" fontWeight="bold">
              Product 1
            </Text>
            <Text textAlign="center">Description of Product 1.</Text>
          </VStack>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1524143878510-e3b8d6312402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTc4MDQ2NzB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 2" />
            <Text fontSize="lg" fontWeight="bold">
              Product 2
            </Text>
            <Text textAlign="center">Description of Product 2.</Text>
          </VStack>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1700853010051-dce31802dafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTc4MDQ2NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 3" />
            <Text fontSize="lg" fontWeight="bold">
              Product 3
            </Text>
            <Text textAlign="center">Description of Product 3.</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Services Section */}
      <Box as="section" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1662516108520-e5a1171dfa43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlJTIwMXxlbnwwfHx8fDE3MTc4MDQ2NzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Service 1" />
            <Text fontSize="lg" fontWeight="bold">
              Service 1
            </Text>
            <Text textAlign="center">Description of Service 1.</Text>
          </VStack>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1561123815-3a3f73763807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlJTIwMnxlbnwwfHx8fDE3MTc4MDQ2NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Service 2" />
            <Text fontSize="lg" fontWeight="bold">
              Service 2
            </Text>
            <Text textAlign="center">Description of Service 2.</Text>
          </VStack>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1701486822668-84a4bd93b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlJTIwM3xlbnwwfHx8fDE3MTc4MDQ2Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Service 3" />
            <Text fontSize="lg" fontWeight="bold">
              Service 3
            </Text>
            <Text textAlign="center">Description of Service 3.</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* About Me Section */}
      <Box as="section" py={20} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          About Me
        </Heading>
        <VStack spacing={4} textAlign="center">
          <Image src="https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3VuZGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3ODA0NjgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Founder Portrait" borderRadius="full" boxSize="150px" />
          <Text fontSize="lg" fontWeight="bold">
            John Doe
          </Text>
          <Text>Founder & CEO</Text>
          <Text>John has over 20 years of experience in AI and process management.</Text>
        </VStack>
      </Box>

      {/* FAQ Section */}
      <Box as="section" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Frequently Asked Questions
        </Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is Caipa?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Caipa is a custom artificial intelligent process management solution designed to streamline your business operations.</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I get started?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>You can get started by booking a free consulting hour with our experts.</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What kind of support do you offer?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>We offer 24/7 expert support to assist you with any issues you may encounter.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      {/* Footer Section */}
      <Box as="footer" py={10} bg="gray.800" color="white" textAlign="center">
        <VStack spacing={4}>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <FaPhone />
            </Link>
            <Link href="#" isExternal>
              <FaQuestionCircle />
            </Link>
          </HStack>
          <Text>&copy; {new Date().getFullYear()} Caipa. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
