import { FormControl, Input, IInputProps } from "native-base";
import { ReactNode } from "react";

interface EntradaTextoProps extends IInputProps {
  label: string; 
}

export function EntradaTexto({ label, ...rest }: EntradaTextoProps) {
  return (
    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        size="lg"
        w="100%"
        borderRadius="lg"
        backgroundColor="gray.100"
        shadow={3}
        {...rest}
      />
    </FormControl>
  );
}
