import { Box, HStack, Spinner, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TempUser() {
  const navigate = useNavigate();

  async function onInit() {
    await new Promise((res) => {
      setTimeout(() => {
        navigate('/user/1');
        res('success');
      }, 2000);
    });
  }

  useEffect(() => {
    onInit();
  }, []);

  return (
    <Box mt={20}>
      <HStack justifyContent={'center'}>
        <Spinner />
        <Text>Loading Remote...</Text>
      </HStack>
    </Box>
  );
}

export default TempUser;
