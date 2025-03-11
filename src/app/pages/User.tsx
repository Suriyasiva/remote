import {
  Card,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  Box,
  HStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import data from '../data/data';
import { AppContext } from '../providers/AppContext';
import { useAppStore } from '../store/AppStore';

function User() {
  const params = useParams();
  const [selectedUser, setSelectedUser] = React.useState<any>(null);
  const navigate = useNavigate();

  const appContext = useContext(AppContext);
  const appStore = useAppStore();

  React.useEffect(() => {
    if (params?.userId) {
      const d = data.find((d) => d.id === Number(params?.userId));
      setSelectedUser(d);
    }
  }, [params?.userId]);

  return (
    <Box m={5} borderRadius={'lg'} border={'1px solid tomato'} p={5}>
      <Text color={'tomato'}>Im from Remote</Text>
      <Box
        display={'flex'}
        gap={10}
        alignItems={'center'}
        justifyContent={'start'}
      >
        <Text>Context Value: {appContext.contextCount}</Text>
        <Text>Store Value: {appStore.storeCount}</Text>
        <Link style={{ color: 'blue', textDecoration: 'underline' }} to={'/'}>
          Navigate to home (Link)
        </Link>
        <Button onClick={() => navigate('/users')}>
          Navigate to users (useNavigate)
        </Button>
      </Box>
      <Box mb={10} />
      {/* <Button onClick={appContext.updateContextCount}>update 1</Button>
      <Button onClick={appStore.updateStoreCount}>update 2</Button> */}
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
