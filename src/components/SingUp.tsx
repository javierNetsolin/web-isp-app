import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

const Signup = () => {
  useEffect(() => {
    console.log('sessionStorage', sessionStorage.getItem('Auth Token'));
  }, []);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [emailTouched, setEmailTouched] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const isInvalid = useMemo(() => {
    if (email === '') return false;

    return validateEmail(email) ? false : true;
  }, [email]);
  const validateForm = () => {
    return !isInvalid && password.length > 5;
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // navigate('/login');
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == 'auth/user-not-found') {
          setError('No existe ningún usuario con el email proporcionado.');
        } else if (errorCode == 'auth/wrong-password') {
          setError('Contraseña incorrecta. Por favor, intente de nuevo.');
        } else {
          setError('Error al iniciar sesión: ' + error.message);
        }
        console.log(errorCode);
        onOpen();
        // ..
      });
  };

  return (
    <>
      <form className="flex flex-col gap-4">
        <Input
          isRequired
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          isInvalid={isInvalid}
          color={isInvalid && emailTouched ? 'danger' : 'default'}
          errorMessage={isInvalid && 'Porfavor ingrese un email valido'}
          // onChange={(e) => setEmail(e.target.value)}
          onValueChange={setEmail}
        />
        <Input
          isRequired
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <p className="text-center text-small">
          Need to create an account?{' '}
          <Link size="sm" onPress={() => setSelected('sign-up')}>
            Sign up
          </Link>
        </p> */}
        <div className="flex gap-2 justify-end">
          <Button
            fullWidth
            color="primary"
            type="submit"
            isDisabled={!validateForm()}
            onClick={onSubmit}
            onBlur={() => {
              setEmailTouched(true);
            }}
          >
            Login
          </Button>
        </div>
      </form>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Error al iniciar sesión
              </ModalHeader>
              <ModalBody>
                <p>{errorMessage}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
