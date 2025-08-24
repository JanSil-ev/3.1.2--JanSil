import { Loader } from "./Loader";
import { ComponentType } from "react";

export function withLoading<T extends object>(Component: ComponentType<T>) {
  return function WithLoading({ isLoading, ...props }: T & { isLoading: boolean }) {
    if (isLoading) {
      return <Loader />;
    }

    return <Component {...(props as T)} />;
  };
}
