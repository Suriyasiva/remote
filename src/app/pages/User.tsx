import {
  Card,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data';

function User() {
  const params = useParams();
  const [selectedUser, setSelectedUser] = useState<any>(null);

  useEffect(() => {
    if (params?.userId) {
      const d = data.find((d) => d.id === Number(params?.userId));
      setSelectedUser(d);
    }
  }, [params?.userId]);

  return (
    <Box m={10}>
      {selectedUser ? (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={selectedUser?.image}
          />

          <Box>
            <CardBody>
              <Heading size='md'>{selectedUser?.name}</Heading>
              <Text py='2'>{selectedUser?.description}</Text>
            </CardBody>

            <CardFooter>
              <Button variant='ghost'>Dob: {selectedUser.dob}</Button>
              <Button variant='ghost'>Age: {selectedUser.age}</Button>
              <Button variant='ghost'>
                Birth place: {selectedUser.birthplace}
              </Button>
            </CardFooter>
          </Box>
        </Card>
      ) : (
        <Text>No Player Selected</Text>
      )}
    </Box>
  );
}

export default User;
