import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { MdAddAPhoto } from "react-icons/md";
import Avatar from "./Avatar";
import { useAuth } from "hooks/auth";
import { useUpdateAvatar } from "hooks/users";

export default function EditProfile({ isOpen, onClose }) {
  const { user, isLoading: authLoading } = useAuth();
  const {
    setFile,
    updateAvatar,
    isLoading: fileLoading,
    fileURL,
  } = useUpdateAvatar(user?.id);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  if (authLoading) return "Loading...";
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack spacing="5">
            <Avatar user={user} overrideAvatar={fileURL}/>
            <FormControl py="4">
              <FormLabel htmlFor="picture">Change Avatar</FormLabel>
              <input type="file" accept="image/*" onChange={handleChange} />
            </FormControl>
          </HStack>
          <Button
            leftIcon={<MdAddAPhoto />}
            loadingText="Uploading"
            w="full"
            my="6"
            colorScheme="blue"
            onClick={updateAvatar}
            isLoading={fileLoading}
          >
            Save Photo
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
