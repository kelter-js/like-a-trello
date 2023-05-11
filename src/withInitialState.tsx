import { useState, useEffect, FC, useCallback } from "react";
import { load } from "./api/api";
import { AppState } from "./state/AppStateReducer";

interface InjectedProps {
  initialState: AppState;
}

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>

const withInitialState = <TProps,>(
  WrappedComponent: FC<PropsWithoutInjected<TProps> & InjectedProps>
) => {
  return (props: PropsWithoutInjected<TProps>) => {
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: null
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchInitialState = useCallback(async () => {
      setIsLoading(true);

      try {
        const data = await load();
        setInitialState(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        }
      }

      setIsLoading(false);
    }, []);

    useEffect(() => {
      fetchInitialState();
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} initialState={initialState} />
  }
}

export default withInitialState;