import { Box, Button, Flex, Heading } from '@invoke-ai/ui-library';
import { SyncModelsIconButton } from 'features/modelManager/components/SyncModels/SyncModelsIconButton';

import ModelList from './ModelManagerPanel/ModelList';
import { ModelListNavigation } from './ModelManagerPanel/ModelListNavigation';
import { useCallback } from 'react';
import { useAppDispatch } from '../../../app/store/storeHooks';
import { setSelectedModelKey } from '../store/modelManagerV2Slice';

export const ModelManager = () => {
  const dispatch = useAppDispatch();
  const handleClickAddModel = useCallback(() => {
    dispatch(setSelectedModelKey(null));
  }, [dispatch]);

  return (
    <Box layerStyle="first" p={3} borderRadius="base" w="full" h="full">
      <Flex w="full" p={3} justifyContent="space-between" alignItems="center">
        <Flex gap={2}>
          <Heading fontSize="xl">Model Manager</Heading>
          <SyncModelsIconButton />
        </Flex>
        <Flex gap={2}>
          <Button colorScheme="invokeYellow" onClick={handleClickAddModel}>
            Add Model
          </Button>
          <Button>Scan for Models</Button>
        </Flex>
      </Flex>
      <Box layerStyle="second" p={3} borderRadius="base" w="full" h="full">
        <ModelListNavigation />
        <ModelList />
      </Box>
    </Box>
  );
};
