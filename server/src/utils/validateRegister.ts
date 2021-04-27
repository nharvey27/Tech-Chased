import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "length must be greater than 2",
      },
    ];
  }

  if (options.password.length <= 2) {
    return [
      {
        field: "password",
        message: "length must be greater than 2",
      },
    ];
  }

  if (options.password.includes("@")) {
    return [
      {
        field: "username",
        message: "can not include an @",
      },
    ];
  }

  return null;
};
